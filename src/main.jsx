import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainRoot from './mainRoot.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import AuthProvider from './AuthProvider.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import Profile from './Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },

      {
        path: "/login",
        element: <Login></Login>
      },

      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
