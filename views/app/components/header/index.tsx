import React, { FC, useState } from 'react';
import { Container, MenuButton } from '@components';
import { Nav } from './nav';
import './style.scss';

export const Header: FC = () => {
    const [navIsVisible, setNavIsVisible] = useState(false);

    return (
        <header className="header">
            <Container cls="header__container">
                <MenuButton onClick={() => setNavIsVisible(!navIsVisible)} />
                <Nav visible={navIsVisible} />
                <h2 className="header__title" title="Фотограф в Санкт-Петербурге">
                    MyInspire photographer
                </h2>
            </Container>
        </header>
    );
};
