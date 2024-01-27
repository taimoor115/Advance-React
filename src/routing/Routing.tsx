import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Layout from "./Layout";

import UserDetail from "./UserDetail";
import Page from "./Page";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/users",
        element: <Page />,
        children: [{ path: "/users/:id", element: <UserDetail /> }],
      },
    ],
  },
]);

export default router;
