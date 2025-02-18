import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/cs.webp";
import SearchInput from "./SearchInput";
import ColorModeSwitch from "./ColorModeSwitch";
import Logout from "./Logout";

const NavBar = () => {
  return (
    <HStack padding={6}>
      <Link to="/">
        <Image src={logo} boxSize="40px" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
      <Logout />
    </HStack>
  );
};

export default NavBar;
