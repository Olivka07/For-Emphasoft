import { Suspense } from 'react';
import { AppRouter } from './providers/router';
import { withProviders } from './providers/withProviders';
import './styles/index.scss';
import { Header } from 'widgets/Header';

function App() {
    return (
        <Suspense fallback={'Loading'}>
            <Header />
            <AppRouter />
        </Suspense>
    );
}

export default withProviders(App);
