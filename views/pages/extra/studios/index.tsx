import React, { FC, useState } from 'react';
import { preprocessRequire } from '@utils';
import { Container, Page } from '@components';
import studios from '@data/studios.json';
import hals from '@data/halls.json';
import { Filters, IFilters, Hall } from './components';

const images = preprocessRequire(require.context('@assets/photos/extra/studios'));

const Studios: FC = () => {
    const [filters, setFilters] = useState<IFilters>({
        furniture: null,
        darkness: null,
        by: null,
    });

    const filteredHalls = hals.filter(hall => filters.darkness === null || hall.darkness === filters.darkness)
        .filter(hall => filters.furniture === null || hall.furniture === filters.furniture);

    filteredHalls.sort((a, b) => {
        if (filters.by === null) return 0;
        return filters.by === 'asc' ? a.prices[0] - b.prices[0] : b.prices[0] - a.prices[0];
    });

    return (
        <Page>
            <Container>
                <Filters filters={filters} onChange={setFilters} />
                {filteredHalls.map(hall => (
                    <Hall {...hall} studioInfo={studios[hall.studio]} key={hall.title}
                          photos={images.filter(it => it.includes(hall.photos_dir))} />
                ))}
            </Container>
        </Page>
    );
};

export default Studios;
