import React, { FC, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

interface FormButtonProps {
    type: 'submit' | 'reset';
    onClick: MouseEventHandler<HTMLButtonElement>;
    text: string;
    attention?: boolean;
}

export const FormButton: FC<FormButtonProps> = ({
    onClick,
    text,
    type,
    attention
}) => {
    if (type === 'submit')
        return (
            <button
                type='submit'
                className={`form__button ${attention ? 'form__button_attention' : 'form__button_submit'}`}
                onClick={onClick}
            >
                {text}
            </button>
        );
    return (
        <button onClick={onClick} className='form__button' type='reset'>
            {text}
        </button>
    );
};
