import { IconButton } from "@chakra-ui/react";
import { PiCardsFill } from "react-icons/pi";
import { BsFileRichtextFill } from "react-icons/bs";

import { useViewModeStore } from "../../stores/viewstore";

const ViewModeSwitch = () => {
  const { viewMode, toggleViewMode, isThumbMode } = useViewModeStore();

  return (
    <IconButton
      onClick={toggleViewMode}
      aria-label="View Mode"
      size="md"
      variant="ghost"
      margin={0}
      rounded="full"
      title={isThumbMode() ? "Show Thumbs" : "Show Cards"}
    >
      {viewMode === "thumb" ? <PiCardsFill /> : <BsFileRichtextFill />}
    </IconButton>
  );
};

export default ViewModeSwitch;
