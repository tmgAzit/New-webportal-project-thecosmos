import './index.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { memberDetails, students } from './components/data.js';
import Logout from './components/logout';
import {
  Login,
  HomeLayout,
  Dashboard,
  AddMember,
  Student,
  Profile,
  Calendar,
  MedDashboard,
  Notification,
  Error,
  Register,
} from './components/index';
import AddFamily from './components/Profile/AddMember/AddFamily';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />, // Change this to Login component
    errorElement: <Error />,
  },
  {
    path: '/', 
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: 'profile',
        element: <Profile />,
        children: [
          {
            path: 'addmember',
            element: <AddMember text='member' />,
          },
          {
            path: 'addfamily',
            element: <AddFamily text='member' />,
          },
          {
            path: 'moreInfo/:child_id',
            element: <Student />,
          },
          {
            path: 'addchildren',
            element: <AddMember text='children' />,
          },
        ],
      },
      {
        path: 'calendar',
        element: <Calendar />,
      },
      { path: 'medication', element: <MedDashboard /> },
      {
        path: 'notification',
        element: <Notification />,
      },
    ],
  },
  {
    path: '/logout',
    element: <Logout />,
    errorElement: <Error />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
  },
  {
    path: '/getData',
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
