import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as classes from './users.module.scss';

export const AddButton = () => {
    const navigate = useNavigate();

    const addHandler = () => {
        navigate('/user-form');
    };
    return (
        <button className={classes.btn} onClick={addHandler}>
            New
        </button>
    );
};
