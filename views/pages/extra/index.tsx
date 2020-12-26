import React, { FC } from 'react';
import { Page } from '@components';
import './style.scss';

const Extra: FC = () => (
    <Page>
        <nav className="nav">
            <a className="nav__link" href="studios/">Студии</a>
            <a className="nav__link" href="locations/">Локации для фотопрогулки</a>
            <a className="nav__link" href="poses/">Шпаргалка по позированию</a>
            <a className="nav__link" href="stylists/">Контакты визажистов и стилистов</a>
        </nav>
    </Page>
);

export default Extra;
