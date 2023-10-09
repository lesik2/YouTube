import { createRoot } from 'react-dom/client';
import MainPage from './pages/MainPage';
import './font.css';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(<MainPage />);
