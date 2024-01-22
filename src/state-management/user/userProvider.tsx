import { ReactNode, useReducer } from "react";
import UserContext from "./userContext";

interface LoginAction {
  type: "LOGIN";
  userName: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

export type Action = LoginAction | LogoutAction;

const loginReducer = (user: string, action: Action) => {
  if (action.type === "LOGIN") return action.userName;
  if (action.type === "LOGOUT") return "";
  return user;
};

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
