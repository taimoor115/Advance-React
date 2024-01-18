interface Action {
  type: "INCREMENT" | "RESET";
}

// State is value and action is the object
const counterReducer = (state: number, action: Action) => {
  if (action.type === "INCREMENT") return state + 1;
  if (action.type === "RESET") return 0;
  // we can also throw an error but it is not nesscary
  return state;
};

export default counterReducer;
