import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import Listing from "../entities/Listing";
import FeatureList from "./FeatureList";
import { Link } from "react-router-dom";
import Description from "./Description";
import { IMAGE_MODE } from "../core/config";
import { useViewModeStore, ViewMode } from "../stores/viewstore";

interface Props {
  listing: Listing;
}

const getImageFit = (listingClass: string) => {
  switch (IMAGE_MODE) {
    case "cover":
      return "cover";

    case "contain":
      return "contain";

    default:
      return listingClass == "Mamfile" ? "cover" : "contain";
  }
};

const ListingCard = ({ listing }: Props) => {
  const { isCardMode } = useViewModeStore();
  const isCard = isCardMode();

  return (
    <Link to={"listing/" + listing.SearchAreaID + "/" + listing.ID}>
      <Card cursor={"pointer"}>
        <Image
          backgroundColor="#FFFFFF"
          width="100%"
          height="200px"
          fit={getImageFit(listing.Class)}
          src={listing.ThumbUrl + "&height=360&width=360"}
          title={listing.Label}
        />
        <CardBody display={isCard ? "" : "none"}>
          <HStack justifyContent="space-between" marginBottom={3}>
            <Text color="gray.500">{listing.Category}</Text>
          </HStack>

          <Heading
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
            fontSize="l"
            marginBottom={1}
          >
            {listing.Label}
          </Heading>
          <Description lines={3}>{listing.Description}</Description>
          <FeatureList lines={3} features={listing.Infos} />
        </CardBody>
      </Card>
    </Link>
  );
};

export default ListingCard;
