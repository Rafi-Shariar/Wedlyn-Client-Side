import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Homepage from "../pages/Homepage";
import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
      {index:true, element:<Homepage></Homepage>},
      {path:'/aboutus',element:<AboutUsPage></AboutUsPage>},
      {path:'/contactus',element:<ContactUsPage></ContactUsPage>},
    ]
  },
]);

