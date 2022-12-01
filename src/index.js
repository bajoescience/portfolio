import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter as Router,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from './App';
import Error from './components/Error';
import Portfolio from './components/Portfolio';

const buttonSize = () => {
  const width = window.screen.width
    if (width > 520) {
      return 'medium'
    }
    return 'small'
}

const router = Router([
  {
    path: "/portfolio",
    element: <App buttonSize={buttonSize} />,
    errorElement: <Error />,
    children: [{
      path: '',
      element: <Portfolio buttonSize={buttonSize} />,
    }]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
