import { ReactNode, useReducer } from "react";
import loginReducer from "./reducers/loginReducer";
import UserContext from "./context/userContext";

interface Props {
  children: ReactNode;
}

const UserProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(loginReducer, "");
  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
