import React, { FC } from 'react';
import './style.scss';

interface IDropdownButton {
    onClick: () => void;
}

export const DropdownButton: FC<IDropdownButton> = ({ onClick }) => (
    <button type="button" className="dropdown-button" onClick={onClick}>
        <span />
        <span />
        <span />
    </button>
);
