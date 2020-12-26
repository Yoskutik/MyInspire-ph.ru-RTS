import React, { FC, useEffect, useState } from 'react';
import { debounce } from '@utils';
import { Page } from '@components';
import { Collage, Genres, Info } from './components';

const Home: FC = () => {
    const [infoMargin, setInfoMargin] = useState(0);

    useEffect(() => {
        window.on('collageImageLoaded', () => {
            window.on('resize', debounce(() => {
                if (window.location.pathname !== '/') return;
                const imgBottom = $('.collage__img').getBoundingClientRect().bottom;
                const headerBottom = document.find('.header').getBoundingClientRect().bottom;
                setInfoMargin(imgBottom - headerBottom);
            }, 5))
                .trigger('resize');
        });
    }, []);

    return (
        <Page>
            <Collage />
            <Info marginTop={infoMargin} />
            <Genres />
        </Page>
    );
};

export default Home;
