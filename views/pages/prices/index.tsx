import React, { FC } from 'react';
import { Page } from '@components';
import { Conditions, PriceList } from './components';

const Prices: FC = () => (
    <Page>
        <PriceList />
        <Conditions />
    </Page>
);

export default Prices;
