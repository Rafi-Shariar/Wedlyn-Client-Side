import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Homepage from "../pages/Homepage";
import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";
import { BiodatasPage } from "../pages/BioDatasPage";
import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";
import BiodataDetailsPage from "../pages/BiodataDetailsPage";
import PrivateRoute from '../privateRoutes/PrivateRoute';
import LottiLoading from "../components/shared/LottiLoading";
import CheckoutPage from "../pages/CheckoutPage";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import ManageUsersPage from "../pages/Dashboard/Admin/ManageUsersPage";
import AdminRoutes from "../privateRoutes/AdminRoutes";
import EditBiodataPage2 from "../pages/Dashboard/User/EditBiodataPage2";
import CreateNewBiodataPage from "../pages/Dashboard/User/CreateNewBiodataPage";

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
      {path:'/test',element:<LottiLoading></LottiLoading>},
      {path:'/biodatadetails/:id',element:<PrivateRoute><BiodataDetailsPage></BiodataDetailsPage></PrivateRoute>},
      {path:'/checkout',element:<PrivateRoute> <CheckoutPage></CheckoutPage> </PrivateRoute>},
    ]
  },
  {
    path:'/dashboard',
    element:<DashboardLayout></DashboardLayout>,
    children:[
      {index:true, element:<DashboardHome></DashboardHome>},
      {path:'manageusers', element:<AdminRoutes><ManageUsersPage></ManageUsersPage></AdminRoutes>},
      {path:'editbiodata' , element:<EditBiodataPage2></EditBiodataPage2>},
      {path:'editbiodata/createbiodata', element:<CreateNewBiodataPage></CreateNewBiodataPage>}

    ]
  }
]);

