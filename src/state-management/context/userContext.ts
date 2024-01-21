import { Action } from "../reducers/loginReducer";
import React from "react";

interface UserContextType {
  user: string;
  dispatch: React.Dispatch<Action>;
}

const UserContext = React.createContext<UserContextType>({} as UserContextType);

export default UserContext;
