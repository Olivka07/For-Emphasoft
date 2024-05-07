import React, { FC } from 'react';
import * as classes from './buttonLang.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { ThemeButton } from 'shared/ui/Button/Button';

export enum Languages {
    RU = 'ru',
    EN = 'en'
}

interface ButtonLangProps {
    className?: string;
    lang: Languages;
}
export const ButtonLang: FC<ButtonLangProps> = ({ className, lang }) => {
    const { i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(lang);
    };

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(
                classes.buttonLang,
                { [classes.picked]: i18n.language === lang },
                [className]
            )}
            onClick={toggle}
        >
            {lang.toUpperCase()}
        </Button>
    );
};
