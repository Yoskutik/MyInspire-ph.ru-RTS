import React, { FC } from 'react';

export interface PictureProps {
    src: string;
    cls?: string;
    lazy?: boolean;
    alt?: string;
    onLoad?: () => void;
    onClick?: () => void;
}

export const Picture: FC<PictureProps> = ({ src, cls, lazy, alt, onLoad, onClick }) => (
    <picture>
        <source srcSet={`${src}.webp`} type="image/webp" />
        <img className={cls} alt={alt} src={`${src}.jpg`} loading={lazy ? 'lazy' : 'eager'} onLoad={onLoad}
             onClick={onClick} />
    </picture>
);
