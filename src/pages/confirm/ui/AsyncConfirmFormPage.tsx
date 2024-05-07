import { lazy } from 'react';
import { Loadable } from 'shared/ui/loadable';

export const AsyncConfirmFormPage = Loadable(
    lazy(() => import('./ConfirmFormPage'))
);
