import { lazy } from 'react';
import { Loadable } from 'shared/ui/loadable';

export const AsyncUserFormPage = Loadable(lazy(() => import('./UserFormPage')));
