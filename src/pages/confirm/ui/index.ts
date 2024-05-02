import { lazy } from 'react';
import { Loadable } from '../../../shared/ui/loadable';

export const AsyncConfirmForm = Loadable(lazy(() => import('./ConfirmForm')));
