import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useListings from "../hooks/useListings";
import ListingCard from "./ListingCard";
import ListingCardContainer from "./ListingCardContainer";
import ListingCardSkeleton from "./ListingCardSkeleton";

const ListingGrid = () => {
  const { data, error, isLoading } = useListings();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return <Text>Error</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding="10px"
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <ListingCardContainer key={skeleton}>
            <ListingCardSkeleton />
          </ListingCardContainer>
        ))}
      {data?.items.map((listing) => (
        <ListingCardContainer key={listing.ID}>
          <ListingCard listing={listing} />
        </ListingCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default ListingGrid;
