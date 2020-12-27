import React, { FC } from 'react';
import { Picture } from '@components';
import { InstagramIcon, VKIcon, WhatsAppIcon } from '@components/icons';
import ava from '@assets/photos/ava.jpg';
import './style.scss';

export const Card: FC = () => (
    <div className="info__card" itemScope itemType="http://schema.org/Organization">
        <link itemProp="url" href="https://myinspire-ph.ru/" />
        <div className="info__card_avatar">
            <Picture src={ava} />
        </div>
        <div className="info__card_message">
            <h2 itemProp="name" className="info__card_title">
                Мельникова Татьяна
            </h2>
            <h1 itemProp="jobTitle" className="info__card_subtitle">
                Профессиональный фотограф в Санкт-Петербурге
            </h1>
            <p className="info__card_description">
                Индивидуальные фотосессии и love-story
            </p>
            <div className="info__card_social">
                <a itemProp="sameAs" href="https://www.instagram.com/myinspire_ph/" target="_blank" rel="noreferrer">
                    <InstagramIcon size={38} />
                </a>
                <a itemProp="sameAs" href="https://vk.com/inspiredbyspb/" target="_blank" rel="noreferrer">
                    <VKIcon size={38} />
                </a>
                <a itemProp="sameAs" href="https://wa.me/79995154217" target="_blank" rel="noreferrer">
                    <WhatsAppIcon size={38} />
                </a>
            </div>
        </div>
    </div>
);
