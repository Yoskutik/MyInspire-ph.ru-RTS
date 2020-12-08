import React, { FC } from 'react';
import './style.scss';

export const Copyright: FC = () => (
    <span className="footer__copyright" title="Мельникова Татьяна. Профессиональный фотограф">
        <meta itemProp="copyrightYear" content="2019" />
        <meta itemProp="copyrightHolder" content="Мельникова Татьяна" />
        &copy; 2019-
        {new Date().getFullYear()}
        {' '}
        MyInspire-ph.ru
    </span>
);
