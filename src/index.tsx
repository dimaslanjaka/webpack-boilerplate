import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './assets/css/main.scss';
import './index.css';
import Landing from './layout/Landing';
import YusrilTemplate from './layout/Yusril';

// https://aszka-laundry.business.site/

const container = document.getElementById('root');

if (!container) {
  throw new Error("React root element doesn't exist!");
}

const router = createBrowserRouter([
  {
    children: [
      {
        path: '*',
        element: <YusrilTemplate />
      },
      {
        path: '/old',
        element: <Landing />
      }
    ]
  }
]);

function MainRouter() {
  return <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />;
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <MainRouter />
  </StrictMode>
);
