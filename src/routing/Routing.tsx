import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Layout from "./Layout";

import UserDetail from "./UserDetail";
import Page from "./Page";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      {
        path: "/users",
        element: <Page />,
        children: [{ path: "/users/:id", element: <UserDetail /> }],
      },
    ],
  },
]);

export default router;
