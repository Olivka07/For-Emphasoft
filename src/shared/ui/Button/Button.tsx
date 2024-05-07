import React, { ButtonHTMLAttributes, FC } from 'react';
import * as classes from './button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme: ThemeButton;
}
export const Button: FC<ButtonProps> = (props) => {
    const { className, theme, children, ...otherProps } = props;

    return (
        <button
            className={classNames(classes.button, {}, [
                className,
                classes[theme]
            ])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
