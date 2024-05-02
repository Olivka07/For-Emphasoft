import { createEvent, createStore } from 'effector';

export const changeLogin = createEvent('Change login');
export const changePassword = createEvent('Change password');

export const $formUser = createStore({})
    .on(changeLogin, (formUser, payload) => {
        return { ...formUser, login: payload };
    })
    .on(changePassword, (formUser, payload) => {
        return { ...formUser, password: payload };
    });
