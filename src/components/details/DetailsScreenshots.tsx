import { Image } from "@chakra-ui/react";
import Details from "../../entities/Details";
interface Props {
  details: Details;
}

const DetailsScreenshots = ({ details }: Props) => {
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
