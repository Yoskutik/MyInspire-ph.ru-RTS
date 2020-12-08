import React, { FC } from 'react';
import './style.scss';

interface IContainer {
    cls?: string,
}

export const Container: FC<IContainer> = ({ cls, children }) => (
    <div className={`container ${cls}`}>
        {children}
    </div>
);

Container.defaultProps = {
    cls: '',
};
