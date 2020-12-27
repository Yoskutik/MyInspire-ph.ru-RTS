import React, { FC, useEffect, useState, Suspense } from 'react';
import { debounce, isMobileOrTablet, preprocessRequire } from '@utils';
import { Page, HiddenTitle, Spinner } from '@components';
import { Thumbnail } from './thumbnail';
import './style.scss';

interface IReactImageGalleryItem {
    original: string;
    thumbnail: string;
}

const ReactImageGallery = React.lazy(() => import('react-image-gallery'));

const thumbnails = preprocessRequire(require.context('@assets/photos/portfolio/thumbnails', false));

const galleryPhotos: Record<string, IReactImageGalleryItem[]> = {};
preprocessRequire(require.context('@assets/photos/portfolio/gallery'))
    .filter(it => !it.endsWith('m.jpg'))
    .forEach(it => {
        const key = it.replace('/static/assets/photos/portfolio/gallery/', '').replace(/\/.+$/, '');
        if (!galleryPhotos[key]) galleryPhotos[key] = [];
        galleryPhotos[key].push({
            original: it,
            thumbnail: it.replace('.jpg', 'm.jpg'),
        });
    });

const isMobile = isMobileOrTablet();

const Portfolio: FC = () => {
    const [galleryItems, setGalleryItems] = useState<IReactImageGalleryItem[]>(null);

    const updateGalleryItems = (imgSrc: string) => {
        if (imgSrc) {
            setGalleryItems(galleryPhotos[imgSrc.replace(/.+\//, '').replace('.jpg', '')]);
            document.body.style.overflow = 'hidden';
            window.location.hash = 'gallery';
        } else {
            document.body.style.overflow = null;
            window.history.back();
        }
    };

    useEffect(() => {
        window.on('hashchange', () => {
            if (window.location.hash === '') setGalleryItems(null);
        });

        if (!isMobile) return;
        window.on('scroll', debounce(() => {
            if (window.location.pathname !== '/portfolio/') return;
            $$('.thumbnail').forEach(it => {
                it.isVisible(200) ? it.classList.add('hover') : it.classList.remove('hover');
            });
        }))
            .trigger('scroll');
    }, []);

    return (
        <Page>
            <HiddenTitle text="Портфолио" />
            <div className="portfolio">
                {thumbnails.map(imgSrc => (
                    <Thumbnail key={imgSrc} imgSrc={imgSrc} onClick={() => updateGalleryItems(imgSrc)} />
                ))}
            </div>
            {galleryItems && (
                <div className="gallery">
                    <Suspense fallback={<Spinner size={96} />}>
                        <ReactImageGallery thumbnailPosition={isMobile ? 'bottom' : 'left'} showPlayButton={false}
                                           showFullscreenButton={!isMobile} items={galleryItems}/>
                    </Suspense>
                    <button className="gallery__close" onClick={() => updateGalleryItems(null)} type="button">
                        &times;
                    </button>
                </div>
            )}
        </Page>
    );
};

export default Portfolio;
