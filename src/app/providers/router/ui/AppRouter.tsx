import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AppRoutes, routeConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => (
    <Routes>
        <Route
            path={routeConfig[AppRoutes.MAIN].path}
            element={routeConfig[AppRoutes.MAIN].element}
        >
            <Route
                path={routeConfig[AppRoutes.LOGIN].path}
                element={routeConfig[AppRoutes.LOGIN].element}
            />
            <Route
                path={routeConfig[AppRoutes.USER_FORM].path}
                element={routeConfig[AppRoutes.USER_FORM].element}
            />
            <Route
                path={routeConfig[AppRoutes.USER_FROM_BY_ID].path}
                element={routeConfig[AppRoutes.USER_FROM_BY_ID].element}
            >
                <Route
                    path={routeConfig[AppRoutes.VALID].path}
                    element={routeConfig[AppRoutes.VALID].element}
                />
            </Route>
        </Route>
    </Routes>
);
