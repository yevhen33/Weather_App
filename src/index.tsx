import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';
import { Provider } from 'react-redux';
import store from './store/store';
import './style/style.scss';

createRoot(document.getElementById('app') as Element).render(
  <Provider store={store}>
    <App />
  </Provider>
);
