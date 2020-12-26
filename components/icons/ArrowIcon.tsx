import React, { FC } from 'react';
import { IconProps } from './IconProps';

export const ArrowIcon: FC<IconProps> = ({ size, height, width, cls, fill }) => (
    <svg viewBox="0 0 256 256" enableBackground="0 0 256 256" className={cls} width={size ?? width}
         height={size ?? height}>
        <defs>
            <filter id="f1" x="0" y="0">
                <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
            </filter>
        </defs>
        <polygon fill="#000" filter="url(#f1)"
                 points="225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093" />
        <polygon fill={fill} points="225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093" />
    </svg>
);
