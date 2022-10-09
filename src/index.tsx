import React from 'react';
import ReactDOM from 'react-dom/client';

import Global from './styles/global'
import App from './App';
import{BrowserRouter} from 'react-router-dom'
import { store } from './store'; 
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Global/>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


