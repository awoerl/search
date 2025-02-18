import { HStack, Box, Switch, Text, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Box
        onClick={toggleColorMode}
        cursor="pointer"
        title={colorMode === "dark" ? "Dark Mode" : "Light Mode"}
      >
        {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
      </Box>
    </HStack>
  );
};

export default ColorModeSwitch;
