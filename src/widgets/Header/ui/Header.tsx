import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { ButtonLang } from 'widgets/ButtonLang';
import { ButtonLogout } from 'features/auth/ui/ButtonLogout';
import { useUnit } from 'effector-react';
import { $auth } from 'entities/auth/model';
import { useTranslation } from 'react-i18next';
import { Languages } from 'widgets/ButtonLang/ui/ButtonLang';
import Logo from 'shared/assets/icons/logo.svg';

export const Header: FC = () => {
    const { t } = useTranslation();
    const auth = useUnit($auth);

    return (
        <header className='header'>
            <div className='header__logo'>
                <Logo />
            </div>
            <nav className='header__nav'>
                {(!auth && (
                    <button>
                        <Link to={'/login'}>{t('Войти')}</Link>
                    </button>
                )) || <ButtonLogout />}
                <ButtonLang lang={Languages.RU} />
                <ButtonLang lang={Languages.EN} />
            </nav>
        </header>
    );
};
