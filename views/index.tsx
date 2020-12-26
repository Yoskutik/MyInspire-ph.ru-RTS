import { render } from 'react-dom';
import React from 'react';
import { App } from './app';
import '../framework';
import './style.scss';

render(
    <App />,
    document.querySelector('#body'),
);
