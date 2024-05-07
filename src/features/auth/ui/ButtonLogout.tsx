import { clearUsers } from 'entities/users/model/units';
import { changeAuth } from 'entities/auth/model';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const ButtonLogout = () => {
    const { t } = useTranslation();
    const logoutHandler = () => {
        changeAuth(false);
        localStorage.removeItem('token');
        clearUsers();
    };
    return <button onClick={logoutHandler}>{t('Выйти')}</button>;
};
