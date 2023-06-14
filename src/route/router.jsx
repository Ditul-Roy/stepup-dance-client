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
import MyEnrolled from "../pages/Dashboard/Student/MyEnrolled/MyEnrolled";
import InstrClasses from "../pages/Dashboard/Instructor/InstrClasses/InstrClasses";
import AddClass from "../pages/Dashboard/Instructor/AddClass/AddClass";
import Payment from "../pages/Dashboard/Student/Payment/Payment";
import ProvateRoute from "./ProvateRoute";
import ManageUser from "../pages/Dashboard/Admin/Admin/ManageUser/ManageUser";
import ManageClass from "../pages/Dashboard/Admin/Admin/ManageClass/ManageClass";
import FeedBack from "../pages/Dashboard/Admin/Admin/FeedBack/FeedBack";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";

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
      element: <ProvateRoute><DashboardLayout></DashboardLayout></ProvateRoute>,
      children: [
        {
          path: 'myClass',
          element: <MyClass></MyClass>
        },
        {
          path: 'enrolled',
          element: <MyEnrolled></MyEnrolled>
        },
        {
          path: 'pay',
          element: <ProvateRoute><Payment></Payment></ProvateRoute>
        },
        {
          path: 'instructorClasses',
          element: <InstructorRoute><InstrClasses></InstrClasses></InstructorRoute>
        },
        {
          path: 'addClass',
          element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
        },
        {
          path: 'manageUser',
          element: <AdminRoute><ManageUser></ManageUser></AdminRoute>
        },
        {
          path: 'manageClass',
          element: <AdminRoute><ManageClass></ManageClass></AdminRoute>
        },
        {
          path: 'feedback',
          element: <FeedBack></FeedBack>
        }
      ]
    }
  ]);

  export default router;