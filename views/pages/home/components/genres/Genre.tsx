import React, { FC } from 'react';
import { Picture } from '@components';

interface GenreProps {
    alt: string;
    imgSrc: string;
    paragraphs: string[];
    title: string;
}

export const Genre: FC<GenreProps> = ({ alt, imgSrc, paragraphs, title }) => (
    <div className="genres__container container">
        <div className="genres__genre">
            <div className="genres__container_photo">
                <Picture alt={alt} src={imgSrc} />
            </div>
            <div className="genres__container_info">
                <h3 className="genres__container_title">{title}</h3>
                {paragraphs.map((p, i) => (
                    <p className="genres__container_paragraph" key={`genres__container_paragraph-${i}`}>
                        {p}
                    </p>
                ))}
            </div>
        </div>
    </div>
);
