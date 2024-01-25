import { useLocation, useParams } from "react-router";
import { useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  const params = useParams();
  console.log(params);
  const location = useLocation();
  console.log(location);

  const [search, setSearchParams] = useSearchParams();
  console.log(search.get('name'));

  return <p>User</p>;
};

export default UserDetailPage;
