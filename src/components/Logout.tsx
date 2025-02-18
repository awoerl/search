import { ImSwitch } from "react-icons/im";
import { BASE_URL } from "../core/config";

const logout = () => {
  window.open(BASE_URL + "/..?login=now", "_top");
};

const Logout = () => {
  return <ImSwitch cursor="pointer" onClick={logout} title="Logout" />;
};

export default Logout;
