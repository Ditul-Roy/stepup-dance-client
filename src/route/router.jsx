import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Shared/login/Login/Login";
import Register from "../pages/Shared/login/Register/Register";
import MainLayout from "../Layout/MainLayout";
import Profile from "../pages/Profile/Profile";
import Dashboard from "../pages/Dashboard/Dashboard";
import AllInstructors from "../pages/AllInstructors/AllInstructor/AllInstructors";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'profile',
          element: <Profile></Profile>
        },
        {
          path: 'dashboard',
          element: <Dashboard></Dashboard>
        },
        {
          path: '/instructors',
          element: <AllInstructors></AllInstructors>
        }
      ]
    },
  ]);

  export default router;