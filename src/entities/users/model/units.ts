import { createEffect, createEvent, createStore, sample } from 'effector';
import { debounce } from 'patronum';
import { IUserDTO, PostUser } from 'shared/api/users/model';
import {
    createUser,
    deleteUser,
    getUsers,
    putUser
} from 'shared/api/users/users';

const DEBOUNCE_TIME = 600;

export const clearUsers = createEvent();

export const getUsersFx = createEffect('Get Users', {
    handler: async () => {
        const users = await getUsers();
        return users;
    }
});

export const createUserFx = createEffect('Create User', {
    handler: async (postUser: PostUser) => {
        const user = await createUser(postUser);
        return user;
    }
});

export const putUserFx = createEffect('Put User', {
    handler: async ({ postUser, id }: { postUser: PostUser; id: number }) => {
        const user = await putUser({ user: postUser, id });
        return user;
    }
});

export const deleteUserFx = createEffect('Delete User', {
    handler: async (id: number) => {
        await deleteUser(id);
        return id;
    }
});

export const $users = createStore<null | IUserDTO[]>(null)
    .on(getUsersFx.doneData, (_, payload) => payload)
    .on(clearUsers, () => null)
    .on(createUserFx.doneData, (users, payload) =>
        users ? [...users, payload] : [payload]
    )
    .on(putUserFx.doneData, (users, payload) =>
        users.map((user) => {
            if (user.id === payload.id) return payload;
            return user;
        })
    )
    .on(deleteUserFx.doneData, (users, payload) => {
        return users.filter((user) => user.id !== payload);
    });

export const changedSearching = createEvent<string>();

export const debounceChangedSearching = debounce({
    source: changedSearching,
    timeout: DEBOUNCE_TIME
});

const $debounceSearch = createStore<string>('');

sample({
    source: debounceChangedSearching,
    target: $debounceSearch
});

export const $listUsers = createStore<null | IUserDTO[]>(null);

export const sortAsc = createEvent();
export const sortDesc = createEvent();

sample({
    clock: $users,
    target: $listUsers
});

sample({
    clock: $debounceSearch,
    source: $users,
    fn: (users, str) => {
        const reg = new RegExp(str, 'i');
        return users.filter((u) => reg.test(u.username));
    },
    target: $listUsers
});

sample({
    clock: sortAsc,
    source: $listUsers,
    fn: (users) => Array.from(users.sort((u1, u2) => u1.id - u2.id)),
    target: $listUsers
});

sample({
    clock: sortDesc,
    source: $listUsers,
    fn: (users) => Array.from(users.sort((u1, u2) => u2.id - u1.id)),
    target: $listUsers
});
