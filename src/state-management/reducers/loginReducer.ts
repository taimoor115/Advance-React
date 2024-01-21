interface LoginAction {
  type: "LOGIN";
  userName: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

type Action = LoginAction | LogoutAction;

const loginReducer = (user: string, action: Action) => {
  if (action.type === "LOGIN") return action.userName;
  if (action.type === "LOGOUT") return "";
  return user;
};

export default loginReducer;
