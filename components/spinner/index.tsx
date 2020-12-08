import React, { FC } from 'react';

interface ISpinner {
    isDark?: boolean;
}

export const Spinner: FC<ISpinner> = ({ isDark }) => (
    <div className={`loader ${isDark ? 'dark-loader' : ''}`}>
        <div className="loader__spinner" role="status" />
    </div>
);
