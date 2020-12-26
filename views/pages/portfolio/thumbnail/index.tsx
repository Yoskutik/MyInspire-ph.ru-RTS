import React, { FC } from 'react';
import { Picture } from '@components';
import './style.scss';

interface ThumbnailProps {
    imgSrc: string;
    onClick: () => void;
}

export const Thumbnail: FC<ThumbnailProps> = ({ onClick, imgSrc }) => (
    <div className="thumbnail" onClick={onClick} role="button" tabIndex={0}>
        <div className="thumbnail__photo">
            <Picture alt={imgSrc.replace(/^.+\//, '')} src={imgSrc} />
            <div className="thumbnail__title">
                {imgSrc.replace(/^.+\//, '').replace(/\d/g, '')}
            </div>
        </div>
    </div>
);
