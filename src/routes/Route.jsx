import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Homepage from "../pages/Homepage";
import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";
import { BiodatasPage } from "../pages/BioDatasPage";
import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
      {index:true, element:<Homepage></Homepage>},
      {path:'/aboutus',element:<AboutUsPage></AboutUsPage>},
      
      {path:'/contactus',element:<ContactUsPage></ContactUsPage>},
      {path:'/biodatas',element:<BiodatasPage></BiodatasPage>},
      {path:'/login',element:<LoginPage></LoginPage>},
      {path:'/register',element:<RegisterPage></RegisterPage>},
    ]
  },
]);

