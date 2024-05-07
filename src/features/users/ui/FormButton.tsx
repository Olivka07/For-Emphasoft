import React, { FC, MouseEventHandler } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface FormButtonProps {
    type: 'submit' | 'reset';
    onClick: MouseEventHandler<HTMLButtonElement>;
    text: string;
    attention?: boolean;
}

export const FormButton: FC<FormButtonProps> = (props) => {
    const { onClick, text, type, attention } = props;

    const { t } = useTranslation('form');

    if (type === 'submit')
        return (
            <button
                type='submit'
                className={`form__button ${attention ? 'form__button_attention' : 'form__button_submit'}`}
                onClick={onClick}
            >
                {t(text)}
            </button>
        );
    return (
        <button onClick={onClick} className='form__button' type='reset'>
            {t(text)}
        </button>
    );
};
