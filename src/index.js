import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './comoponents/Home/Home';
import Result from './comoponents/Result/Result';
import Spiner from './comoponents/Spiner/Spiner';
import Teachers from './comoponents/Teachers/Teachers';
import Gallary from './comoponents/Gallary/Gallary';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <p>This is error page</p>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'results',
        element: <Result></Result>,
        loader: () => fetch('result.json'),
      },
      {
        path: 'teachers',
        element: <Teachers></Teachers>,
        loader: () => fetch('teachers.json'),
      },
      {
        path: 'gallary',
        element: <Gallary></Gallary>,
        loader: () => fetch('schools.json'),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
