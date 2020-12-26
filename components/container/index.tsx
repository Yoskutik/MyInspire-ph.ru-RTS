import React, { FC } from 'react';
import './style.scss';

interface ContainerProps {
    cls?: string,
}

export const Container: FC<ContainerProps> = ({ cls, children }) => (
    <div className={`container ${cls}`}>
        {children}
    </div>
);

Container.defaultProps = {
    cls: '',
};
