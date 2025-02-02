import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import { Link } from "react-router-dom";
import Listing from "../entities/Listing";
import CriticScore from "./CriticScore";
import FeatureList from "./FeatureList";

interface Props {
  listing: Listing;
}

const ListingCard = ({ listing }: Props) => {
  return (
    <Card>
      <Link to={"listing/" + listing.ID}>
        <Image width="100%" height="200px" fit="cover" src={listing.ThumbUrl} />
      </Link>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <Text color="gray.500">{listing.Category}</Text>
          <CriticScore score={parseFloat(listing.Infos.Sterne)} max={5} />
        </HStack>

        <Heading
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          fontSize="l"
          marginBottom={1}
        >
          <Link to={"listing/" + listing.ID}>{listing.Label}</Link>
        </Heading>
        <FeatureList
          lines={3}
          features={[
            listing.Infos["Brennwert in kcal"],
            listing.Infos["Gesamtzeit"],
            listing.Infos["Schwierigkeitsgrad"],
            listing.Infos.Tags,
          ]}
        />
      </CardBody>
    </Card>
  );
};

export default ListingCard;
