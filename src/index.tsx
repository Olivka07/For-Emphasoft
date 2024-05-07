import { createRoot } from 'react-dom/client';
import App from './app/index';

import 'shared/config/i18nConfig/i18nConfig';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
