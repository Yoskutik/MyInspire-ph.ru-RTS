import React, { FC } from 'react';
import { IconProps } from './IconProps';

export const PinterestIcon: FC<IconProps> = ({ size, height, width, cls }) => (
    <svg viewBox="0 0 112.198 112.198" width={size ?? width} height={size ?? height} className={cls}>
        <g>
            <circle fill="#CB2027" cx="56.099" cy="56.1" r="56.098" />
            <g>
                {/* eslint-disable-next-line max-len */}
                <path fill="#F1F2F2" d="M60.627,75.122c-4.241-0.328-6.023-2.431-9.349-4.45c-1.828,9.591-4.062,18.785-10.679,23.588 c-2.045-14.496,2.998-25.384,5.34-36.941c-3.992-6.72,0.48-20.246,8.9-16.913c10.363,4.098-8.972,24.987,4.008,27.596 c13.551,2.724,19.083-23.513,10.679-32.047c-12.142-12.321-35.343-0.28-32.49,17.358c0.695,4.312,5.151,5.621,1.78,11.571 c-7.771-1.721-10.089-7.85-9.791-16.021c0.481-13.375,12.018-22.74,23.59-24.036c14.635-1.638,28.371,5.374,30.267,19.14 C85.015,59.504,76.275,76.33,60.627,75.122L60.627,75.122z" />
            </g>
        </g>
    </svg>
);
