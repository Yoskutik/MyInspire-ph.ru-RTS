import React, { FC } from 'react';

interface HiddenTextProps {
    text: string;
}

export const HiddenTitle: FC<HiddenTextProps> = ({ text }) => (
    <h1 style={{ display: 'none' }}>
        {text}
    </h1>
);
