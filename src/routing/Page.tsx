import { Outlet } from "react-router";
import UserList from "./UserList";
const Page = () => {
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
