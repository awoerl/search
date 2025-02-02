import { Image, SimpleGrid } from "@chakra-ui/react";
import Listing from "../entities/Listing";

interface Props {
  listing: Listing;
}

const ListingScreenshots = ({ listing }: Props) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      <Image
        cursor="pointer"
        onClick={() => window.open(listing.ThumbUrl, "_blank")}
        key={listing.ID}
        src={listing.ThumbUrl}
      />
    </SimpleGrid>
  );
};

export default ListingScreenshots;
