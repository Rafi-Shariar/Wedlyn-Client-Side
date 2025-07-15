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
import UserRoutes from "../privateRoutes/UserRoutes";
import EditBiodataPage2 from "../pages/Dashboard/User/EditBiodataPage2";
import CreateNewBiodataPage from "../pages/Dashboard/User/CreateNewBiodataPage";
import ViewBiodataPage from "../pages/Dashboard/User/ViewBiodataPage";
import MyContactRequestPage from "../pages/Dashboard/User/MyContactRequestPage";
import MyFavouriteBiodataPage from "../pages/Dashboard/User/MyFavouriteBiodataPage";
import MakePremiumPage from "../pages/Dashboard/Admin/MakePremiumPage";
import SuccessStoriesPage from "../pages/Dashboard/Admin/SuccessStoriesPage";
import GotMarriedPage from "../pages/Dashboard/User/GotMarriedPage";
import PaymentSuccess from "../components/Payment/PaymentSuccess";
import ApproveContactRequestPage from "../pages/Dashboard/Admin/ApproveContactRequestPage";
import TermsAndConditions from "../pages/TermsAndConditions";

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
      {path:'/checkout/:id',element: <CheckoutPage></CheckoutPage>},
      {path:'/paymentsuccess',element: <PaymentSuccess></PaymentSuccess>},
      {path:'/terms',element: <TermsAndConditions></TermsAndConditions>},

    ]
  },
  {
    path:'/dashboard',
    element:<DashboardLayout></DashboardLayout>,
    children:[
      {index:true, element:<DashboardHome></DashboardHome>},
      {path:'manageusers', element:<AdminRoutes><ManageUsersPage></ManageUsersPage></AdminRoutes>},
      {path:'approvedpremium', element:<AdminRoutes><MakePremiumPage></MakePremiumPage></AdminRoutes>},
      {path:'successstories', element:<AdminRoutes><SuccessStoriesPage></SuccessStoriesPage></AdminRoutes>},
      {path:'approvedcontactrequest', element:<AdminRoutes><ApproveContactRequestPage></ApproveContactRequestPage></AdminRoutes>},


      {path:'editbiodata' , element:<UserRoutes><EditBiodataPage2></EditBiodataPage2></UserRoutes>},
      {path:'editbiodata/createbiodata', element:<UserRoutes><CreateNewBiodataPage></CreateNewBiodataPage></UserRoutes>},
      {path:'viewbiodata', element:<UserRoutes><ViewBiodataPage></ViewBiodataPage></UserRoutes>},
      {path:'viewbiodata/createbiodata', element:<UserRoutes><CreateNewBiodataPage></CreateNewBiodataPage></UserRoutes>},
      {path:'mycontactrequest', element:<UserRoutes><MyContactRequestPage></MyContactRequestPage></UserRoutes>},
      {path:'favouritebiodata', element:<UserRoutes><MyFavouriteBiodataPage></MyFavouriteBiodataPage></UserRoutes>},
      
      {path:'gotmarried', element:<UserRoutes><GotMarriedPage></GotMarriedPage></UserRoutes>},

    ]
  }
]);

