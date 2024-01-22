import LoginStatus from "./user/LoginStatus";
import useCounterStore from "./counter/store";

const NavBar = () => {
  const counter = useCounterStore((s) => s.counter);
  console.log("Ok");

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
