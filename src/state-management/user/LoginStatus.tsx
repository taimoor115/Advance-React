import { useContext } from "react";
import UserContext from "./userContext";

const useUser = () => useContext(UserContext);
const LoginStatus = () => {
  // const [user, setUser] = useState('');
  const { user, dispatch } = useUser();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => {
          dispatch({ type: "LOGIN", userName: "Taimoor Hussain" });
        }}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
