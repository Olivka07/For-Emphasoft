import React, { FC, PropsWithChildren } from 'react';
import * as classes from './modal.module.scss';
import { useNavigate } from 'react-router-dom';

export const Modal: FC<PropsWithChildren> = ({ children }) => {
    const navigate = useNavigate();

    return (
        <div className={classes.modal__bg} onClick={() => navigate('/')}>
            <div
                onClick={(e) => e.stopPropagation()}
                className={classes.modal__content}
            >
                {children}
            </div>
        </div>
    );
};
