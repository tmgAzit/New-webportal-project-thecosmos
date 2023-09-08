import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  HomeLayout,
  Dashboard,
  AddMember,
  Profile,
  Calendar,
  Medication,
  Notification,
} from './components/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: 'profile',
        element: <Profile />,
        children: [
          {
            path: 'addmember',
            element: <AddMember />,
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
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
//  {/* <Login /> */}
//     {/* <Status />
//     <Feed /> */}
//     {/* <Profile /> */}
//     {/* <Calendar /> */}
//     <Medication />
//     {/* <Notification /> */}
