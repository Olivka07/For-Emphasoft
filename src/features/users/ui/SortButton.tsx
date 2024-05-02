import { sortAsc, sortDesc } from '../../../entities/users/model/units';
import React, { FC } from 'react';
import * as classes from './users.module.scss';
interface SortButtonProps {
    sort: 'asc' | 'desc';
}
const SortButton: FC<SortButtonProps> = ({ sort }) => {
    const clickHandler = () => {
        if (sort === 'asc') sortAsc();
        else sortDesc();
    };
    return (
        <button
            className={classes.btn}
            onClick={sort === 'asc' ? clickHandler : () => sortDesc()}
        >
            {sort === 'asc' ? '⬆' : '⬇'}
        </button>
    );
};

export default SortButton;
