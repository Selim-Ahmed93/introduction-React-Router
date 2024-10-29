import React from 'react';
import ReactDOM from 'react-dom/client';
 import Home from './assets/Components/Home/Home';
 import About from './assets/Components/Home/About/About';
 import Contact from './assets/Components/Home/Contact/Contact';
 import Header from './assets/Components/Home/Header/Header';


// import App from './App.jsx';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  // {
  //   // path: '/',
  //   // element: <div>hello router</div>,
  // },
  // {
  //   path:'/About',
  //   element:<div>Hello React</div>
  // },
  // {
  // path:'/contact',
  // element:<Contact></Contact>
  // },
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:'/Header',
        element:<Header></Header>
      }
    ]
    
  },
 
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);


