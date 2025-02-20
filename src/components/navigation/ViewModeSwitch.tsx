import { IconButton, Tooltip } from "@chakra-ui/react";
import { PiCardsFill } from "react-icons/pi";
import { BsFileRichtextFill } from "react-icons/bs";

import { useViewModeStore } from "../../stores/viewstore";

const ViewModeSwitch = () => {
  const { viewMode, toggleViewMode, isThumbMode } = useViewModeStore();

  return (
    <Tooltip
      borderRadius={4}
      label={isThumbMode() ? "Show Thumbs" : "Show Cards"}
    >
      <IconButton
        onClick={toggleViewMode}
        aria-label="View Mode"
        size="md"
        variant="ghost"
        margin={0}
        rounded="full"
      >
        {viewMode === "thumb" ? <PiCardsFill /> : <BsFileRichtextFill />}
      </IconButton>
    </Tooltip>
  );
};

export default ViewModeSwitch;
