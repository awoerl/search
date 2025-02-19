import { IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label="Color Mode"
      size="md"
      variant="ghost"
      margin={0}
      rounded="full"
      title={colorMode}
    >
      {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  );
};

export default ColorModeSwitch;
