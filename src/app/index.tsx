import { Suspense } from 'react';
import { AppRouter } from './providers/router';
import { withProviders } from './providers/withProviders';
import './styles/index.scss';
import { Header } from 'widgets/Header';
import { Loading } from 'shared/ui/loading';

function App() {
    return (
        <Suspense fallback={<Loading />}>
            <Header />
            <AppRouter />
        </Suspense>
    );
}

export default withProviders(App);
