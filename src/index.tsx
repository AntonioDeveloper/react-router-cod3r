import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import Inicio from './pages/shared/inicio';
// import Sobre from './pages/shared/sobre';
// import Contato from './pages/shared/contato';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello World</div>,
    //element: <Inicio />,
  },
  // {
  //   path: '/sobre',
  //   element: <Sobre />,
  // },
  // {
  //   path: '/contato',
  //   element: <Contato />,
  // },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
