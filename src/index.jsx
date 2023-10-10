import { createRoot } from 'react-dom/client';
import MainPage from './pages/MainPage';
import './font.css';
import './index.css';
import { setupStore } from './store/index';
import { Provider } from 'react-redux';
const store = setupStore();

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <MainPage />
    </Provider>
);
