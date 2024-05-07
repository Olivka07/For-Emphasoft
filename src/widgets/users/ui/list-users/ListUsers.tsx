import { useUnit } from 'effector-react';
import { $listUsers } from 'entities/users/model/units';
import { User } from 'entities/users/ui/user/User';
import React from 'react';
import { SearchInput } from 'features/users/ui/SearchInput';
import SortButton from 'features/users/ui/SortButton';
import { AddButton } from 'features/users/ui/AddButton';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const ListUsers = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const listUsers = useUnit($listUsers);
    if (listUsers !== null)
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 0
                }}
            >
                <h1>{t('Список пользователей')}</h1>
                <SearchInput />
                <div className='users__container'>
                    <div>
                        <SortButton sort='asc' />
                        <SortButton sort='desc' />
                    </div>
                    <AddButton />
                </div>
                <ul className='users__container__list'>
                    {listUsers.map((user) => (
                        <li
                            onClick={() => navigate(`/user-form/${user.id}`)}
                            key={user.id}
                        >
                            <User user={user} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    return (
        <div style={{ textAlign: 'center' }}>
            {t('Чтобы увидеть список пользователей, необходимо войти')}
        </div>
    );
};
