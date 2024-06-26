import { changedSearching } from 'entities/users/model/units';
import React, { ChangeEvent, useState } from 'react';
import * as classes from './users.module.scss';
import { useTranslation } from 'react-i18next';

export const SearchInput = () => {
    const [value, setValue] = useState('');

    const { t } = useTranslation();

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        changedSearching(e.target.value);
    };
    return (
        <input
            className={classes.search}
            value={value}
            onChange={changeHandler}
            type='text'
            placeholder={t('Поиск') + '...'}
        />
    );
};
