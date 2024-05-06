import { clearUsers } from 'entities/users/model/units';
import { changeAuth } from 'entities/auth/model';
import React from 'react';

export const ButtonLogout = () => {
    const logoutHandler = () => {
        changeAuth(false);
        localStorage.removeItem('token');
        clearUsers();
    };
    return <button onClick={logoutHandler}>Log out</button>;
};
