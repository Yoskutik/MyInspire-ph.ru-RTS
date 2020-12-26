import React, { FC } from 'react';
import { Container } from '@components';
import { Card, Message } from './components';
import './style.scss';

interface InfoProps {
    marginTop: number;
}

export const Info: FC<InfoProps> = ({ marginTop }) => (
    <div className="info" style={{ marginTop }}>
        <Container cls="info__container">
            <Message />
            <Card />
        </Container>
    </div>
);
