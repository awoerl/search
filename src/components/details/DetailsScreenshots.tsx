import { Box, Image, Text } from "@chakra-ui/react";
import Details from "../../entities/Details";
import VideoPlayer from "./VideoPlayer";
import { isVideoFile } from "../../core/utils";

interface Props {
  details: Details;
}

const DetailsScreenshots = ({ details }: Props) => {
  if (isVideoFile(details.title)) {
    return (
      <Box marginRight={10} borderRadius={10} overflow="hidden">
        <VideoPlayer url={details.url} />
      </Box>
    );
  }

  return (
    <Image
      className="hoverImage"
      borderRadius={10}
      width="330px"
      cursor="pointer"
      onClick={() => window.open(details.image, "_blank")}
      key={details.title}
      src={details.image}
    />
  );
};

export default DetailsScreenshots;
