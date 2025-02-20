import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Tooltip,
} from "@chakra-ui/react";

import { ImSwitch } from "react-icons/im";
import { ImArrowRight2 } from "react-icons/im";

import { BASE_URL } from "../../core/config";
import usePortals from "../../hooks/usePortals";
import useUser from "../../hooks/useUser";

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
  const user = useUser();

  return (
    <Menu>
      <Tooltip
        borderRadius={4}
        label={
          <Box
            dangerouslySetInnerHTML={{
              __html:
                "User: " +
                user?.LongName +
                "<br />" +
                "Project: " +
                user?.Project,
            }}
          />
        }
      >
        <MenuButton
          as={Button}
          variant="ghost"
          margin={0}
          p={0}
          rounded="full"
          borderRadius="full"
          size="md"
        >
          <Avatar
            size="sm"
            title={user?.Name}
            src={user?.Image}
            name={user?.LongName}
            variant="solid"
            borderColor="gray.200"
            borderWidth="2px"
          />
        </MenuButton>
      </Tooltip>

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
