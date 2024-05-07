import { lazy } from 'react';
import { Loadable } from 'shared/ui/loadable';

export const AsyncAuthFormPage = Loadable(lazy(() => import('./AuthFormPage')));
