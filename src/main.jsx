import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './Component/Home.jsx';
import BlogPage from './Page/BlogPage.jsx';
import ErrorPage from './Page/ErrorPage.jsx';
import AllRecips from './Page/AllRecips.jsx';
import RecpiesDetails from './Page/RecpiesDetails.jsx';
import AddRecpies from './Page/AddRecpies.jsx';
import MyRecipes from './Page/MyRecipes.jsx';
import SignIn from './Component/SignIn.jsx';
import SignUp from './Component/SignUp.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import PrivateRoute from './Utils/privateRoute.jsx';
import Dashboard from './Component/Dashboard.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
      },
      {
        path: '/blog',
        element: <BlogPage></BlogPage>,
      },
      {
        path: '/all-recipes',
        element: <AllRecips></AllRecips>,
      },
      {
        path: '/recipes-details/:id',
        element: (
          <PrivateRoute>
            <RecpiesDetails></RecpiesDetails>
          </PrivateRoute>
        ),
      },
      {
        path: '/add-recipes',
        element: (
          <PrivateRoute>
            <AddRecpies></AddRecpies>
          </PrivateRoute>
        ),
      },
      {
        path: '/my-recipes',
        element: (
          <PrivateRoute>
            <MyRecipes></MyRecipes>
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        element: <SignIn></SignIn>,
      },
      {
        path: '/register',
        element: <SignUp></SignUp>,
      },
    ]
  },
   {
        path: '*',
        element: <ErrorPage></ErrorPage>,
      }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
<AuthProvider>
  <RouterProvider router={router} />
</AuthProvider>

    
  </StrictMode>,
)
