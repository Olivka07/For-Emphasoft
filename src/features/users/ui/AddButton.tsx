import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as classes from './users.module.scss';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

export const AddButton = () => {
    const navigate = useNavigate();

    const { t } = useTranslation();

    const addHandler = () => {
        navigate('/user-form');
    };
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(classes.btn)}
            onClick={addHandler}
        >
            {t('Добавить')}
        </Button>
    );
};
