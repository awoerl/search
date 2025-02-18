import { ImSwitch } from "react-icons/im";
import { BASE_URL } from "../core/config";

const logout = () => {
  let targetUrl = "";
  if (BASE_URL.includes("contentserv.com")) {
    targetUrl = "https://login.contentserv.com/?instancelogout=true";
  } else {
    targetUrl = BASE_URL + "/..?login=now";
  }

  window.open(targetUrl, "_top");
};

const Logout = () => {
  return <ImSwitch cursor="pointer" onClick={logout} title="Logout" />;
};

export default Logout;
