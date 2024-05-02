import { lazy } from 'react';
import { Loadable } from '../../../shared/ui/loadable';

export const AsyncUsersPage = Loadable(lazy(() => import('./UsersPage')));
