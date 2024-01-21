import { useContext } from "react";
import UserContext from "./context/userContext";

const LoginStatus = () => {
  // const [user, setUser] = useState('');
  const { user, userDispatch } = useContext(UserContext);

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => userDispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => {
          userDispatch({ type: "LOGIN", userName: "Taimoor Hussain" });
        }}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
