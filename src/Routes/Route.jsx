import Test from "@/components/Test";
import { createBrowserRouter } from "react-router";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Test></Test>
  },
]);

export default router;