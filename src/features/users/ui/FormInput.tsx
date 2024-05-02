import { useUnit } from 'effector-react';
import { $formUser } from '../../../entities/form/model';
import React, { ChangeEvent, FC } from 'react';

type TypeInput = 'checkbox' | 'password';

interface FormInputProps {
    type?: TypeInput;
    title: string;
    value: string | boolean;
    changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}
const FormInput: FC<FormInputProps> = ({
    title,
    type,
    value,
    changeHandler
}) => {
    return (
        <div className='form__item'>
            <label style={{ display: 'block' }} htmlFor={title}>
                {title}
            </label>
            <input
                style={{ display: 'block' }}
                id={title}
                onChange={changeHandler}
                checked={typeof value === 'boolean' ? value : undefined}
                value={typeof value === 'boolean' ? undefined : value}
                type={type ?? 'text'}
            />
        </div>
    );
};

export default FormInput;
