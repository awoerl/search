import React from "react";
import { Box } from "@chakra-ui/react";

interface Props {
  url: string;
  thumbUrl?: string;
  controls?: boolean;
}
const VideoPlayer = ({ url, thumbUrl }: Props) => {
  return (
    <video
      onClick={() => alert(3)}
      width="100%"
      controls
      preload="auto"
      poster={thumbUrl}
    >
      <source src={url} />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
