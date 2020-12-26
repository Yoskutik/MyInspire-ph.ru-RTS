import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { FC, Suspense } from 'react';
import { Container, Spinner } from '@components';
import { Header, Footer } from './components';

const Home = React.lazy(() => import('@pages/home'));
const Portfolio = React.lazy(() => import('@pages/portfolio'));
const Prices = React.lazy(() => import('@pages/prices'));
const Contacts = React.lazy(() => import('@pages/contacts'));

const Extra = React.lazy(() => import('@pages/extra'));
const Studios = React.lazy(() => import('@pages/extra/studios'));
const Locations = React.lazy(() => import('@pages/extra/locations'));
const Poses = React.lazy(() => import('@pages/extra/poses'));
const Stylists = React.lazy(() => import('@pages/extra/stylists'));

const PageNotFound: FC = () => (
    <Container cls="page-not-found">
        <h1>Упс!</h1>
        <h3>Кажется, необходимый Вам файл отсутствует.</h3>
    </Container>
);

export const App: FC = () => (
    <Suspense fallback={ <Spinner size={96} style={{ width: '100%', height: '100%' }} />}>
        <BrowserRouter>
            <Header />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/portfolio/" component={Portfolio} />
                <Route exact path="/prices/" component={Prices} />
                <Route exact path="/contacts/" component={Contacts} />

                <Route exact path="/extra/" component={Extra} />
                <Route exact path="/extra/studios/" component={Studios} />
                <Route exact path="/extra/locations/" component={Locations} />
                <Route exact path="/extra/poses/" component={Poses} />
                <Route exact path="/extra/stylists/" component={Stylists} />

                <Route component={PageNotFound} />
            </Switch>

            <Footer />
        </BrowserRouter>
    </Suspense>
);
