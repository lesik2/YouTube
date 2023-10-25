import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import ErrorBoundary from './components/ErrorBoundary/index';
import MainPage from './pages/MainPage';
import { store } from './store/index';

import './font.css';
import './index.css';
const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <ErrorBoundary>
            <MainPage />
        </ErrorBoundary>
    </Provider>
);
