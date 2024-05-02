import { ReactNode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export function withRouter(component: () => ReactNode) {
    return () => <Router>{component()}</Router>;
}
