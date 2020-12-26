import React, { FC } from 'react';
import { HiddenTitle, Page } from '@components';
import { Conditions, PriceList } from './components';

const Prices: FC = () => (
    <Page>
        <HiddenTitle text="Цены"/>
        <PriceList />
        <Conditions />
    </Page>
);

export default Prices;
