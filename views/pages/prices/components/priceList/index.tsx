import React, { FC, Fragment } from 'react';
import { Container } from '@components';
import listItems from '@data/priceList.json';
import './style.scss';

interface ListItemProps {
    title: string;
    description: string[];
    price: number;
    additional?: string;
    discount?: number;
}

const ListItem: FC<ListItemProps> = ({ title, description, price, additional, discount }) => (
    <div className="list__item">
        <div className="list__item_header">
            <h2 className="list__item_title">{title}</h2>
        </div>
        <p className="list__item_info" itemProp="description">
            {description.map((it, i) => (
                <Fragment key={`${title}-${i}`}>
                    {it}
                    <br/>
                </Fragment>
            ))}
            {additional && (
                <small>{`* ${additional}`}</small>
            )}
        </p>
        <div className="list__item_price-column">
            <strong className={`list__item_price ${discount ? 'discount' : ''}`}>
                <span>{price}</span>
            </strong>
            {discount && (
                <strong className="list__item_price">
                    <span>{discount}</span>
                </strong>
            )}
        </div>
    </div>
);

export const PriceList: FC = () => (
    <Container cls="list">
        {listItems.map((item, i) => (
            <ListItem key={`list-item-${i}`} {...item} />
         ))}
    </Container>
);
