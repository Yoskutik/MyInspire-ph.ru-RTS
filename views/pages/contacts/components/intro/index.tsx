import React, { FC } from 'react';
import { Container } from '@components';
import './style.scss';

export const Intro: FC = () => (
    <Container cls="intro">
        <div className="intro__container">
            <h2 className="intro__title">Запись на съёмку</h2>
            <div className="intro__text">
                <p>
                    Если вы ознакомились со всеми ценами, прочли условия и осознали,
                    что я - именно тот, кого Вы так давно искали, то скорее пишите мне
                    в удобной Вам социальной сети и мы с Вами обсудим все детали.
                </p>
                <p>
                    У меня не всегда бывает возможность моментально отвечать. Обычно
                    ответ занимает не больше суток. Прошу отнестись к этому с пониманием.
                </p>
            </div>
        </div>
    </Container>
);
