import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Main from "../pages/main/Main";
import Mypage from "../pages/mypage/Mypage";
import SignIn from "../pages/signIn/Signin";
import SignInSuccess from "../pages/signIn/SignInSuccess";
import SignUp from "../pages/signUp/SignUp";
import AuthLayout from "../pages/layout/AuthLayout";
import Sms from "../pages/signUp/Sms";

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout />,
    children : [
      {
        path : "",
        element : <Main />
      },
      {
        path : "/member",
        element : <AuthLayout />,
        children : [
          {
            path : "my",
            element : <Mypage />
          }
        ]
      }
    ]
      
  },
  {
    path : "/sign-in",
    element : <SignIn />
  },
  {
    path : "/sign-in-success",
    element : <SignInSuccess />
  },
  {
    path : "/sign-up",
    element : <SignUp />
  },
  {
    path : "/sms",
    element : <Sms />
  }
])

export default router;