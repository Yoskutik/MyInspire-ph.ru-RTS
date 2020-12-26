import React, { FC, useEffect, useState } from 'react';
import { createKeywordGenerator, preprocessRequire } from '@utils';
import { Picture } from '@components';
import { ArrowIcon } from '@components/icons';
import './style.scss';

const allPhotos = preprocessRequire(require.context('@assets/photos/home', true, /\.(webp|jpg)$/i), 'home')
    .sort(() => Math.random() - 0.5);
const verticalPhotos = allPhotos.filter(it => it.includes('vertical'));
const horizontalPhotos = allPhotos.filter(it => it.includes('horizontal'));

const isMobile = window.innerWidth < 700 && window.innerWidth < window.innerHeight;

const generator = createKeywordGenerator();

export const Collage: FC = () => {
    const [images, setImages] = useState(isMobile ? verticalPhotos : horizontalPhotos);

    useEffect(() => {
        // TODO or NOT TODO
        // Если Таня таки захочет сделать несколько горизонтальных фоток, нужно убрать условие
        isMobile && setInterval(() => {
            const image = $$('.collage__img').slice(-1)[0];
            image.style.opacity = '0';
            image.on('transitionend', () => {
                const firstImage = images.pop();
                images.unshift(firstImage);
                setImages([...images]);
            });
        }, 6000);
    }, []);

    return (
        <div className="collage">
            {images.slice(-2).map((src, i) => (
                <Picture cls="collage__img" key={`collage-picture-${i}`} src={src} alt={generator.next().value}
                         onLoad={() => window.trigger('collageImageLoaded')} />
            ))}
            <ArrowIcon cls="collage__arrow" size={20} />
        </div>
    );
};
