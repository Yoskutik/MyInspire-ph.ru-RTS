import React, { CSSProperties } from 'react';
import { SpinnerIcon } from '@components/icons';
import './style.scss';

interface SpinnerProps {
    className?: string;
    size?: number;
    style?: CSSProperties;
}

export const Spinner: React.FC<SpinnerProps> = ({ className, size, style }) => (
    <div className={`spinner ${className || ''}`} style={style}>
        <SpinnerIcon size={size || 16} />
    </div>
);
