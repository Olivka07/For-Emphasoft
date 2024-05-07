import { AuthFromPage } from 'pages/auth-form';
import { ConfirmFormPage } from 'pages/confirm';
import { UserFormPage } from 'pages/user-form';
import { UsersPage } from 'pages/users';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
    MAIN = 'main',
    LOGIN = 'login',
    USER_FORM = 'user-form',
    USER_FROM_BY_ID = 'user-form-by-id',
    VALID = 'valid'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.LOGIN]: 'login',
    [AppRoutes.USER_FORM]: 'user-form',
    [AppRoutes.USER_FROM_BY_ID]: 'user-form/:id',
    [AppRoutes.VALID]: 'valid'
};

type RouteConfig = Record<AppRoutes, RouteProps>;

export const routeConfig: RouteConfig = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <UsersPage />
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <AuthFromPage />
    },
    [AppRoutes.USER_FORM]: { path: 'user-form', element: <UserFormPage /> },
    [AppRoutes.USER_FROM_BY_ID]: {
        path: 'user-form/:id',
        element: <UserFormPage />
    },
    [AppRoutes.VALID]: { path: 'valid', element: <ConfirmFormPage /> }
};
