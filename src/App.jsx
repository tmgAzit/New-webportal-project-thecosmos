import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

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
            element: <AddMember text='member' />,
          },
          {
            path: 'moreInfo',
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
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
