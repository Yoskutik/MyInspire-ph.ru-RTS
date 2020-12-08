import React, { FC } from 'react';
import { Container } from '@components';
import { Block, ILink, Copyright } from './components';
import './style.scss';

const footerBlockContacts: ILink[] = [
    { title: 'Instagram', href: 'https://www.instagram.com/myinspire_ph/' },
    { title: 'VK', href: 'https://vk.com/inspiredbyspb' },
    { title: 'Telegram', href: 'https://t.me/MyInspire_ph' },
    { title: 'WhatsApp', href: 'https://wa.me/79995154217' },
    { title: 'Pinterest', href: 'https://www.pinterest.ru/tatianamix1910/' },
    { title: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100029685607190' },
    { title: 'E-mail', href: 'mailto:tatiana.mix.1910@gmail.com' },
];

const footerBlockDeveloper: ILink[] = [
    { title: 'GitHub', href: 'https://www.github.com/yoskutik' },
    { title: 'StackOverflow', href: 'https://stackoverflow.com/users/11589183/yoskutik' },
    { title: 'Habr', href: 'https://habr.com/ru/users/yoskutik/' },
];

const footerBlockIcons: ILink[] = [
    { title: 'By Freepik', href: 'https://www.freepik.com/' },
    { title: 'From www.flaticon.com', href: 'https://www.flaticon.com/' },
    { title: 'Licensed by CC 3.0 BY', href: 'http://creativecommons.org/licenses/by/3.0/' },
];

export const Footer: FC = () => (
    <footer className="footer" itemScope itemType="http://schema.org/WPFooter">
        <Container cls="footer__container">
            <Block title="Contacts" links={footerBlockContacts} />
            <Block title="Developer" links={footerBlockDeveloper} />
            <Block title="Icons" links={footerBlockIcons} />
            <Copyright />
        </Container>
    </footer>
);
