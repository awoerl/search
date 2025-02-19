import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import logo from "../../assets/icon.png";
import Logout from "./Logout";
import SearchInput from "./SearchInput";
import ColorModeSwitch from "./ColorModeSwitch";
import ViewModeSwitch from "./ViewModeSwitch";

const NavBar = () => {
  return (
    <HStack padding={6}>
      <Link to=".">
        <Image src={logo} boxSize="40px" objectFit="cover" />
      </Link>
      <SearchInput />
      <HStack marginLeft={2}>
        <ViewModeSwitch />
        <ColorModeSwitch />
        <Logout />
      </HStack>
    </HStack>
  );
};

export default NavBar;
