import { createRoot } from 'react-dom/client';
import MainPage from './pages/MainPage';
import './font.css';
import './index.css';
import { store } from './store/index';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary/index';
const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <ErrorBoundary>
            <MainPage />
        </ErrorBoundary>
    </Provider>
);
