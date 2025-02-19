import { ImSwitch } from "react-icons/im";
import { BASE_URL } from "../../core/config";
import usePortals from "../../hooks/usePortals";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import { ImArrowRight2 } from "react-icons/im";

const logout = () => {
  let targetUrl = BASE_URL + "/../login.php?action=logout";
  if (BASE_URL.includes("saas.contentserv")) {
    targetUrl = "//login.contentserv.com/?instancelogout=true";
  }

  window.open(targetUrl, "_top");
};

const switchToPortal = (portalID: number) => {
  window.location.href =
    BASE_URL + "/../../admin/portal.php?PortalPortalID=" + portalID;
};

const Logout = () => {
  const { data } = usePortals();
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        title="Logout or switch Portal"
        icon={<ImSwitch />}
        size="md"
        variant="ghost"
        margin={0}
        rounded="full"
      />
      <MenuList>
        {data?.items.map((portal) => (
          <MenuItem
            key={portal.id}
            icon={<ImArrowRight2 />}
            onClick={() => switchToPortal(portal.id)}
          >
            {portal.title}
          </MenuItem>
        ))}
        <MenuDivider title="Portals" />
        <MenuItem icon={<ImSwitch />} onClick={logout}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Logout;
