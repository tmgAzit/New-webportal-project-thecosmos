import './index.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { memberDetails, students } from './components/data.js';
import {
  Login,
  HomeLayout,
  Dashboard,
  AddMember,
  Student,
  Profile,
  Calendar,
  Medication,
  Notification,
  Error,
  Register,
} from './components/index';

const router = createBrowserRouter([
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
            element: <AddMember text='member' details={memberDetails} />,
          },
          {
            path: 'moreInfo',
            element: <Student />,
          },
          {
            path: 'addchildren',
            element: <AddMember text='children' details={students} />,
          },
        ],
      },
      {
        path: 'calendar',
        element: <Calendar />,
      },
      { path: 'medication', element: <Medication /> },
      {
        path: 'notification',
        element: <Notification />,
      },
    ],
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
  const [data, setData] = useState('');

  const getData = async () => {
    const response = await axios.get('https://localhost:500/getData');
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
