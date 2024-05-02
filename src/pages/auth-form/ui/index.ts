import { lazy } from 'react';
import { Loadable } from '../../../shared/ui/loadable';

export const AsyncAuthForm = Loadable(lazy(() => import('./AuthForm')));
