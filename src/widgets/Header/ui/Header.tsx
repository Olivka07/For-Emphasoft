import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as classes from './header.module.scss';
import { ButtonLang } from 'widgets/ButtonLang';
import { ButtonLogout } from 'features/auth/ui/ButtonLogout';
import { useUnit } from 'effector-react';
import { $auth } from 'entities/auth/model';
import { useTranslation } from 'react-i18next';
import { Languages } from 'widgets/ButtonLang/ui/ButtonLang';
import Logo from 'shared/assets/icons/logo.svg';
import { classNames } from 'shared/lib/classNames/classNames';

export const Header: FC = () => {
    const { t } = useTranslation();
    const auth = useUnit($auth);
    const [hide, setHide] = useState(false);

    const checkScroll = () => {
        if (window.scrollY > 50) {
            setHide(true);
        } else setHide(false);
    };

    useEffect(() => {
        document.addEventListener('scroll', checkScroll);

        return () => {
            document.removeEventListener('scroll', checkScroll);
        };
    }, []);

    return (
        <header
            className={classNames(classes.header, {
                [classes.header__hide]: hide
            })}
        >
            <div className={classes.header__logo}>
                <Logo />
            </div>
            <nav className={classes.header__nav}>
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
