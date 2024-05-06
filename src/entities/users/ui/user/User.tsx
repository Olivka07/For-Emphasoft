import React, { FC } from 'react';
import { IUserDTO } from 'shared/api/users/model';
import * as classes from './user.module.scss';
interface UserProps {
    user: IUserDTO;
}
const User: FC<UserProps> = ({ user }) => {
    const dateLastLogin = user.last_login
        ? new Date(Date.parse(user.last_login))
        : null;
    return (
        <div className={classes.user}>
            <div
                className={classes.user__name}
            >{`${user.is_superuser ? '⭐(SU)' : ''} ${user.first_name !== '' ? user.first_name : 'No firstname'} ${user.last_name !== '' ? user.last_name : 'No lastname'}`}</div>
            <div className={classes.user__meta}>{user.username}</div>
            <div
                className={classes.user__meta}
            >{`${user.is_active ? 'Active' : 'No Active'}`}</div>
            {dateLastLogin && (
                <div
                    className={classes.user__meta}
                >{`Last login: ${dateLastLogin.toLocaleDateString()} ${dateLastLogin.toLocaleTimeString()}`}</div>
            )}
        </div>
    );
};

export default User;
