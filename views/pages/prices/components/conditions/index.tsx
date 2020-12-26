import React, { FC } from 'react';
import { Container } from '@components';
import conditions from '@data/conditions.json';
import './style.scss';

export const Conditions: FC = () => (
    <>
        {conditions.map((cond, i) => (
            <Container cls="conditions" key={`condition-${i}`}>
                <h3 className="conditions__title">{cond.title}</h3>
                {cond.paragraphs.map((p, j) => (
                    <p className="conditions__text" key={`conditions__text-${j}`}>{p}</p>
                ))}
            </Container>
        ))}
    </>
);
