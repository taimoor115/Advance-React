import { Action } from "../reducers/loginReducer";
import React from "react";

interface UserContextType {
  user: string;
  userDispatch: React.Dispatch<Action>;
}

const UserContext = React.createContext<UserContextType>({} as UserContextType);

export default UserContext;
