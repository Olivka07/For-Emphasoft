import { createEvent, createStore } from 'effector';

export const changeAuth = createEvent<boolean>('Change Auth');

export const $auth = createStore(false).on(changeAuth, (_, payload) => payload);
