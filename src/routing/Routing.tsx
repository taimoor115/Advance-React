import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Layout from "./Layout";

import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import Page from "./Page";
import PrivateRoute from "./PrivateRoute";
import UserDetail from "./UserDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/users",
        element: <Page />,
        children: [{ path: "/users/:id", element: <UserDetail /> }],
      },
    ],
  },
]);

export default router;
