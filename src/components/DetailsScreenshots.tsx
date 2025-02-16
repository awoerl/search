import { Image, SimpleGrid } from "@chakra-ui/react";
import Details from "../entities/Details";
import { CSPIN } from "../config"
interface Props {
  details: Details;
}

const DetailsScreenshots = ({ details }: Props) => {
  return (
    <Image
      borderRadius={10}
      width="330px"
      cursor="pointer"
      onClick={() => window.open(details.image, "_blank")}
      key={details.title}
      src={details.image + '&CSPIN=' + CSPIN}
    />
  );
};

export default DetailsScreenshots;
