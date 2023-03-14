import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  Marvel from './pages/Marvel';
import Nasa from './pages/Nasa'
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const rutas = createBrowserRouter([{
  path: '/',
  element: <App />
},{
  path: '/marvel',
  element: <Marvel />
},{
  path: '/nasa',
  element: <Nasa />
}]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={rutas} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
