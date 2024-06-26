import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';  // Import Provider from react-redux
import App from './App';
import store from "./redux/store";  // Import the Redux store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> 
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
