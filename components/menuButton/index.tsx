import React, { FC } from 'react';
import './style.scss';

interface MenuButtonProps {
    onClick: () => void;
}

export const MenuButton: FC<MenuButtonProps> = ({ onClick }) => (
    <button type="button" className="dropdown-button" onClick={onClick}>
        <span />
        <span />
        <span />
    </button>
);
