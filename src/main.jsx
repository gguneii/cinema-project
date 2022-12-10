import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { myStore } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Provider store={myStore}>
        <App />
      </Provider>
    </BrowserRouter>
);
