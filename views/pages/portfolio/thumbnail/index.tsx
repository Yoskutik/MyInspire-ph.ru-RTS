import React, { FC } from 'react';
import { Picture } from '@components';
import './style.scss';

interface ThumbnailProps {
    imgSrc: string;
    onClick: () => void;
}

export const Thumbnail: FC<ThumbnailProps> = ({ onClick, imgSrc }) => {
    const title = imgSrc.replace(/^.+\//, '').replace(/\d/g, '').replace('.jpg', '');

    return (
        <div className="thumbnail" onClick={onClick} role="button" tabIndex={0}>
            <div className="thumbnail__photo">
                <Picture alt={title} src={imgSrc} />
                <div className="thumbnail__title">
                    {title}
                </div>
            </div>
        </div>
    );
};
