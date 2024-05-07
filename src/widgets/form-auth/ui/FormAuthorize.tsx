import { FormButton } from 'features/users/ui/FormButton';
import FormInput from 'features/users/ui/FormInput';
import React, { ChangeEvent, FC, MouseEventHandler, useState } from 'react';
import { login } from 'shared/api/users/users';
import { useNavigate } from 'react-router-dom';
import { changeAuth } from 'entities/auth/model';
import { usersStore } from 'entities/users';
import { useTranslation } from 'react-i18next';

interface FormAuthorizeProps {
    toggle: (p: string) => void;
}

export const FormAuthorize: FC<FormAuthorizeProps> = ({ toggle }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { t } = useTranslation('form');
    const navigate = useNavigate();

    const changeUsername = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };
    const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const submitHandler: MouseEventHandler<HTMLButtonElement> = async (e) => {
        try {
            e.preventDefault();
            await login({ password, username });
            changeAuth(true);
            navigate('/');
            usersStore.getUsersFx();
        } catch (e) {
            toggle(`Error: ${JSON.stringify(e.response.data)}`);
        }
    };
    return (
        <form className='form'>
            <h2>{t('Войти')}</h2>
            <FormInput
                title='username'
                value={username}
                changeHandler={changeUsername}
            />
            <FormInput
                title='password'
                value={password}
                changeHandler={changePassword}
            />
            <div className='form__buttons'>
                <FormButton
                    onClick={submitHandler}
                    text='Войти'
                    type='submit'
                />
                <FormButton
                    onClick={() => {
                        navigate('/');
                    }}
                    text='Отмена'
                    type='reset'
                />
            </div>
        </form>
    );
};
