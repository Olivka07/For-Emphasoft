import React, { ChangeEvent, useState } from 'react';
import { Loading } from '../../../shared/ui/loading';
import FormInput from '../../../features/users/ui/FormInput';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { PostUser } from '../../../shared/api/users/model';
import { FormButton } from '../../../features/users/ui/FormButton';
import { useUnit } from 'effector-react';
import { deleteUserFx, putUserFx } from '../../../entities/users/model/units';

type ContextType = PostUser & {
    changePassword: (e: ChangeEvent<HTMLInputElement>) => void;
    id: number;
    toggle: (p: string) => void;
    changed: boolean;
};

export const ConfirmUser = () => {
    const loading_change = useUnit(putUserFx.pending);
    const loading_delete = useUnit(deleteUserFx.pending);
    const navigate = useNavigate();

    const {
        username,
        password,
        first_name,
        last_name,
        is_active,
        id,
        changed,
        changePassword,
        toggle
    } = useOutletContext<ContextType>();

    const submitHandler = async () => {
        try {
            if (changed)
                await putUserFx({
                    postUser: {
                        username,
                        first_name,
                        is_active,
                        last_name,
                        password
                    },
                    id
                });
            else await deleteUserFx(id);
            navigate('/');
        } catch (e) {
            toggle(`Error: ${JSON.stringify(e.response.data)}`);
        }
    };

    return (
        <div className='form__confirm'>
            <form className='form'>
                <h2>{changed ? `Confirm changes` : 'Confirm deleting'}</h2>
                {((loading_change || loading_delete) && <Loading />) || (
                    <>
                        <FormInput
                            type='password'
                            title='password'
                            value={password}
                            changeHandler={changePassword}
                        />
                        <div className='form__buttons'>
                            <FormButton
                                onClick={submitHandler}
                                text='Confirm'
                                type='submit'
                            />
                            <FormButton
                                onClick={() => {
                                    navigate('../');
                                }}
                                text='Cancel'
                                type='reset'
                            />
                        </div>
                    </>
                )}
            </form>
        </div>
    );
};
