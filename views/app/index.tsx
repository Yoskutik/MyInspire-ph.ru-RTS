import React, { FC, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header, Footer } from './components';

export const App: FC = () => (
    <Suspense fallback={''}>
        <BrowserRouter>
            <Header />

            <Route exact path="/" />
            <Route exact path="/portfolio/" />
            <Route exact path="/prices/" />
            <Route exact path="/contacts/" />

            <Footer />
        </BrowserRouter>
    </Suspense>
);
