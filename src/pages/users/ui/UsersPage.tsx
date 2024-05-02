import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { usersStore } from '../../../entities/users';
import { Header } from '../../../shared/ui/header';
import { $auth, changeAuth } from '../../../entities/auth/model';
import { ButtonLogout } from '../../../features/auth/ui/ButtonLogout';
import { useUnit } from 'effector-react';
import { ListUsers } from '../../../widgets/users/ui/list-users/ListUsers';
import { Loading } from '../../../shared/ui/loading';

const UsersPage = () => {
    const auth = useUnit($auth);
    const loading = useUnit(usersStore.getUsersFx.pending);
    useEffect(() => {
        if (localStorage.getItem('token')) {
            usersStore.getUsersFx();
            changeAuth(true);
        }
    }, []);

    return (
        <>
            <Header auth={auth}>{auth && <ButtonLogout />}</Header>
            {(!loading && <ListUsers />) || <Loading />}
            <Outlet />
        </>
    );
};

export default UsersPage;
