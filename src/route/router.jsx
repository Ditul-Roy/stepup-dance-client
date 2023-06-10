import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Shared/login/Login/Login";
import Register from "../pages/Shared/login/Register/Register";
import MainLayout from "../Layout/MainLayout";
import Profile from "../pages/Profile/Profile";
import AllInstructors from "../pages/AllInstructors/AllInstructor/AllInstructors";
import AllClass from "../pages/AllClasses/AllClass/AllClass";
import DashboardLayout from "../Layout/DashboardLayout";
import MyClass from "../pages/Dashboard/Student/MyClass/MyClass";

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
          path: '/instructors',
          element: <AllInstructors></AllInstructors>
        },
        {
          path: '/allClasses',
          element: <AllClass></AllClass>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <DashboardLayout></DashboardLayout>,
      children: [
        {
          path: 'myClass',
          element: <MyClass></MyClass>
        }
      ]
    }
  ]);

  export default router;