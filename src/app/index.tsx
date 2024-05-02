import withProviders from './providers';
import { AppRoutes } from './routes';
import './styles/index.scss';

function App() {
    return <AppRoutes />;
}

export default withProviders(App);
