import FormInput from 'features/users/ui/FormInput';
import { FormButton } from 'features/users/ui/FormButton';
import React, {
    ChangeEvent,
    FC,
    MouseEventHandler,
    useEffect,
    useState
} from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { getUser } from 'shared/api/users/users';
import { createUserFx } from 'entities/users/model/units';
import { useTranslation } from 'react-i18next';

interface FormUserProps {
    id?: number;
    toggle: (p: string) => void;
    changeLoading: (p: boolean) => void;
    loading: boolean;
}
export const FormUser: FC<FormUserProps> = ({
    toggle,
    id,
    changeLoading,
    loading
}) => {
    const [changed, setChanged] = useState<boolean>();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [is_active, setIsActive] = useState<boolean>(false);

    const { t } = useTranslation('form');

    const navigate = useNavigate();

    const fetchUserById = async () => {
        try {
            changeLoading(true);
            const user = await getUser(Number(id));
            setUsername(user.username);
            setFirstName(user.first_name);
            setLastName(user.last_name);
            setIsActive(user.is_active);
            changeLoading(false);
        } catch (e) {
            toggle(e);
            changeLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchUserById();
        }
    }, []);

    const changeUsername = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };
    const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const changeFirstName = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    };
    const changeLastName = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };
    const changeIsActive = (e: ChangeEvent<HTMLInputElement>) => {
        setIsActive(e.target.checked);
    };
    const submitHandler: MouseEventHandler<HTMLButtonElement> = async (e) => {
        try {
            e.preventDefault();
            if (!id) {
                changeLoading(true);
                await createUserFx({
                    username,
                    first_name,
                    is_active,
                    last_name,
                    password
                });
                changeLoading(false);
                navigate('/');
            } else navigate(`/user-form/${id}/valid`);
        } catch (e) {
            changeLoading(false);
            toggle(`Error: ${JSON.stringify(e.response.data)}`);
        }
    };
    return (
        <>
            <Outlet
                context={{
                    username,
                    password,
                    first_name,
                    last_name,
                    is_active,
                    changed,
                    changePassword,
                    id,
                    toggle
                }}
            />
            <form className='form'>
                <h2>
                    {t(id ? 'Изменить пользователя' : 'Создать пользователя')}
                </h2>
                {!loading && (
                    <>
                        <FormInput
                            title='username'
                            value={username}
                            changeHandler={changeUsername}
                        />

                        <FormInput
                            type='password'
                            title='password'
                            value={password}
                            changeHandler={changePassword}
                        />

                        <FormInput
                            title='first_name'
                            value={first_name}
                            changeHandler={changeFirstName}
                        />
                        <FormInput
                            title='last_name'
                            value={last_name}
                            changeHandler={changeLastName}
                        />
                        <FormInput
                            title='is_active'
                            value={is_active}
                            type='checkbox'
                            changeHandler={changeIsActive}
                        />
                        <div className='form__buttons'>
                            <FormButton
                                onClick={(e) => {
                                    submitHandler(e);
                                    setChanged(true);
                                }}
                                text={id ? 'Изменить' : 'Зарегистрировать'}
                                type='submit'
                            />
                            {(id && (
                                <FormButton
                                    onClick={(e) => {
                                        submitHandler(e);
                                        setChanged(false);
                                    }}
                                    text='Удалить'
                                    type='submit'
                                    attention={true}
                                />
                            )) || <></>}
                            <FormButton
                                onClick={() => {
                                    navigate('/');
                                }}
                                text='Отмена'
                                type='reset'
                            />
                        </div>
                    </>
                )}
            </form>
        </>
    );
};
