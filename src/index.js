import $ from 'jquery';
import { createRoot } from 'react-dom/client';
import App from './App';
import './style.css';
window.jQuery = $;
const root = createRoot(document.getElementById('root'));
root.render(<App />);
