import { ToastProvider } from 'react-toast-notifications';
import React, { FC } from 'react';
import { Container, Page } from '@components';
import { Card, Intro, Feedback } from './components';
import './style.scss';

const Contacts: FC = () => (
    <Page>
        <Intro/>
        <Container cls="contacts">
            <Container cls="contacts__container">
                <ToastProvider placement="bottom-right">
                    <Card/>
                    <Feedback/>
                </ToastProvider>
            </Container>
        </Container>
    </Page>
);

export default Contacts;
