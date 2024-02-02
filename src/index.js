import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store';
import './styles/index.scss';
import App from './app/App';

const root = createRoot(document.getElementById('root'));
root.render(<React.StrictMode><Provider store={store}><App /></Provider></React.StrictMode>);
