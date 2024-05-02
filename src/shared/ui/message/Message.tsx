import React, { FC } from 'react';
import * as classes from './message.module.scss';
interface MessageProps {
    visible: string | null;
}
export const Message: FC<MessageProps> = ({ visible }) => {
    return (
        <div
            className={
                classes.message +
                ' ' +
                (visible !== null ? classes.message_open : '')
            }
        >
            {visible}
        </div>
    );
};
