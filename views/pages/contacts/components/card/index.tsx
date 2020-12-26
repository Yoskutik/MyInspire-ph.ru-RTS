import React, { FC } from 'react';
import { InstagramIcon, VKIcon, PinterestIcon, WhatsAppIcon } from '@components/icons';
import { Links } from './Links';
import './style.scss';

const Social = () => (
    <div className="contacts__social">
        <h3 className="contacts__social_title">Социальные сети:</h3>
        <div className="contacts__social_links">
            <a itemProp="sameAs" href="https://www.instagram.com/myinspire_ph/" target="_blank" rel="noreferrer">
                <InstagramIcon size={38} />
            </a>
            <a itemProp="sameAs" href="https://vk.com/inspiredbyspb" target="_blank" rel="noreferrer">
                <VKIcon size={38} />
            </a>
            <a itemProp="sameAs" href="https://www.pinterest.ru/tatianamix1910/" target="_blank" rel="noreferrer">
                <PinterestIcon size={38} />
            </a>
            <a itemProp="sameAs" href="https://wa.me/79995154217/" target="_blank" rel="noreferrer">
                <WhatsAppIcon size={38} />
            </a>
        </div>
    </div>
);

const Address = () => (
    <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
        <h2 className="contacts__card_city locality" itemProp="addressLocality">г. Санкт-Петербург</h2>
    </div>
);

export const Card: FC = () => (
    <div className="contacts__card vcard" itemScope itemType="http://schema.org/Organization">
        <h3 className="contacts__card_title">Контакты</h3>
        <h1 className="contacts__card_name fn org" itemProp="name">Мельникова Татьяна</h1>
        <Links />
        <Address />
        <Social />
        <span className="url">
            <span className="value-title" title="https://myinspire-ph.ru/" />
        </span>
    </div>
);
