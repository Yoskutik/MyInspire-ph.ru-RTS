import React, { FC, useEffect } from 'react';
import { createKeywordGenerator, debounce } from '@utils';
import genres from '@data/genres.json';
import { Genre } from './Genre';
import './style.scss';

const keywordGenerator = createKeywordGenerator();

export const Genres: FC = () => {
    useEffect(() => {
        document.on('scroll', debounce(() => {
            if (window.location.pathname !== '/') return;
            $$('.genres__container').forEach(it => {
                if (it.isVisible(50)) {
                    it.style.transform = 'translateY(0)';
                    it.style.opacity = '1';
                } else {
                    it.style.opacity = '0';
                    it.style.transform = `translateY(${80 * Math.sign(it.getBoundingClientRect().bottom)}px)`;
                }
            });
        }, 50))
            .trigger('scroll');
    }, []);

    return (
        <div className="genres">
            {genres.map((genre, i) => (
                <Genre key={`genre-${i}`} {...genre} imgSrc={`/static/assets/photos/home/${genre.imgSrc}.jpg`}
                       alt={keywordGenerator.next().value} />
            ))}
        </div>
    );
};
