import { Navigate, Outlet } from "react-router";
import useAuth from "./hooks/useAuth";

const PrivateRoute = () => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
