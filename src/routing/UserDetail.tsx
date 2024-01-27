import { useLocation, useParams } from "react-router";
// import { useSearchParams } from "react-router-dom";

const UserDetail = () => {
  const params = useParams();
  console.log(params);
  const location = useLocation();
  console.log(location);

  // const [search, setSearchParams] = useSearchParams();
  // console.log(search.get("name"));

  return <p>User {params.id}</p>;
};

export default UserDetail;
