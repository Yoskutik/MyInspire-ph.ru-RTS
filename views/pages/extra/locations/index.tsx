import React, { FC, useEffect } from 'react';
import { debounce, preprocessRequire } from '@utils';
import { Container, Page } from '@components';
import locations from '@data/locations.json';
import { Location } from './Location';
import './style.scss';

const images = preprocessRequire(require.context('@assets/photos/extra/locations'));

const Locations: FC = () => {
    useEffect(() => {
        window.on('resize', debounce(() => {
            if (window.location.pathname !== '/extra/locations/') return;
            $$('.location').forEach(it => {
                const height = `${it.find('.location__photos_main').clientHeight}px`;
                it.find('.location__photos_extra--photos').style.maxHeight = height;
            });
        }))
            .trigger('resize');
    }, []);

    return (
        <Page>
            <Container cls="locations">
                {locations.map(loc => (
                    <Location key={Math.random()} {...loc}
                              photosList={images.filter(it => it.includes(loc.photosDir) && it.endsWith('m.jpg'))} />
                ))}
            </Container>
        </Page>
    );
};

export default Locations;
