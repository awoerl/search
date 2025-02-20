import { Text, IconButton, Tooltip, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Tooltip
      label={colorMode === "dark" ? "Dark Mode" : "Day Mode"}
      borderRadius={4}
    >
      <IconButton
        onClick={toggleColorMode}
        aria-label="Color Mode"
        size="md"
        variant="ghost"
        margin={0}
        rounded="full"
      >
        {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default ColorModeSwitch;
