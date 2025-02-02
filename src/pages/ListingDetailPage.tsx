import { useParams } from "react-router-dom";
import { Box, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import useListing from "../hooks/useListing";
import ExpandableText from "../components/ExpandableText";
import ListingAttributes from "../components/ListingAttributes";
import ListingScreenshots from "../components/ListingScreenshots";

const ListingDetailPage = () => {
  const { id } = useParams();
  const { data: listing, isLoading, error } = useListing(id!);

  if (isLoading) return <Spinner />;
  if (error || !listing) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{listing.Label}</Heading>
        <ExpandableText>{listing.Description}</ExpandableText>
        <ListingAttributes listing={listing} />
      </GridItem>
      <GridItem>
        <ListingScreenshots listing={listing} />
      </GridItem>
    </SimpleGrid>
  );
};

export default ListingDetailPage;
