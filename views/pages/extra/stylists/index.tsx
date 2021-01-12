import React, { FC } from 'react';
import { Container, Page } from '@components';
import stylists from '@data/stylists.json';
import './style.scss';

interface StylistsProps {
    name: string;
    type: string;
    username: string;
}

const Stylist: FC<StylistsProps> = ({ name, type, username }) => (
    <div className="stylists__item">
        <div className="stylists__item_column">
            <h2 className="stylists__item_title">{name}</h2>
            <h3 className="stylists__item_subtitle">{type}</h3>
        </div>
        <div className="stylists__item_column">
            <span>
                Контакты:
                {' '}
                <a className="stylists__item_instagram" href={`https://www.instagram.com/${username}/`} target="_blank"
                   rel="noreferrer">
                    {`@${username}`}
                </a>
            </span>
        </div>
    </div>
);

const Stylists: FC = () => (
    <Page>
        <Container>
            <p className="intro">
                Это девушки, с которыми я работала на съёмках и за чьи работы я могу быть уверена и советовать их Вам
                как проверенных мастеров.
            </p>
            <div className="stylists">
                {stylists.map(stylist => (
                    <Stylist key={Math.random()} {...stylist} />
                ))}
                <p className="stylists__caption">
                    * Услуги стилистов и визажистов бронируются и оплачиваются Вами отдельно.
                    <br />
                    ** Гримёрка для сборов оплачивается отдельно. Обычно в студиях её цена варьируется от 200 до 300 ₽
                    за час.
                </p>
            </div>
        </Container>
    </Page>
);

export default Stylists;
