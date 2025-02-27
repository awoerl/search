import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";

const router = createBrowserRouter([
  {
    path: location.pathname,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "listing/:areaid/:id", element: <DetailPage /> },
    ],
  },
]);

export default router;
