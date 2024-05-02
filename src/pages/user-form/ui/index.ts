import { lazy } from 'react';
import { Loadable } from '../../../shared/ui/loadable';

export const AsyncUserForm = Loadable(lazy(() => import('./UserForm')));
