import React from "react";
import { Action } from "./userProvider";

interface UserContextType {
  user: string;
  dispatch: React.Dispatch<Action>;
}

const UserContext = React.createContext<UserContextType>({} as UserContextType);

export default UserContext;
