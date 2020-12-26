import React, { CSSProperties, FC, ReactNode } from 'react';

interface PageProps {
    children: ReactNode;
    cls?: string;
    style?: CSSProperties;
}

export const Page: FC<PageProps> = ({ cls, style, children }) => (
    <div className={`page ${cls}`} style={style}>
        {children}
    </div>
);

Page.defaultProps = {
    cls: '',
};
