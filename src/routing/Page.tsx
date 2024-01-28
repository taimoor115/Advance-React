import { Navigate, Outlet } from "react-router";
import UserList from "./UserList";
import useAuth from "./hooks/useAuth";
const Page = () => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="row">
      <div className="col">
        <UserList />
      </div>
      <div className="col">
        <Outlet />
      </div>
    </div>
  );
};

export default Page;
