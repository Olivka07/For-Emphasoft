import { Routes, Route } from 'react-router-dom';
import { AsyncUsersPage } from '../../pages/users';
import { AsyncAuthForm } from '../../pages/auth-form';
import { AsyncUserForm } from '../../pages/user-form';
import { AsyncConfirmForm } from '../../pages/confirm';

export const AppRoutes = () => (
    <Routes>
        <Route path='/' element={<AsyncUsersPage />}>
            <Route path='login' element={<AsyncAuthForm />} />
            <Route path='user-form' element={<AsyncUserForm />} />
            <Route path='user-form/:id' element={<AsyncUserForm />}>
                <Route path='valid' element={<AsyncConfirmForm />} />
            </Route>
        </Route>
    </Routes>
);
