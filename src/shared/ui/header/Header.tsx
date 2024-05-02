import React, { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

interface HeaderProps extends PropsWithChildren {
    auth: boolean;
}

export const Header: FC<HeaderProps> = ({ children, auth }) => {
    return (
        <header className='header'>
            <div className='header__logo'>LogoApp</div>
            <nav className='header__nav'>
                {!auth && (
                    <button>
                        <Link to={'/login'}>Log in</Link>
                    </button>
                )}
                {children}
            </nav>
        </header>
    );
};
