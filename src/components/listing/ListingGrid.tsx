import React from "react";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";

import useListings from "../../hooks/useListings";
import ListingCard from "./ListingCard";
import ListingCardContainer from "./ListingCardContainer";
import ListingCardSkeletons from "./ListingCardSkeletons";
import { useViewModeStore } from "../../stores/viewstore";

const ListingGrid = () => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useListings();

  if (error) return <Text>Error</Text>;

  const fetchedListingsCount =
    data?.pages.reduce((total, page) => total + page.items.length, 0) || 0;

  const { viewMode } = useViewModeStore();

  return (
    <InfiniteScroll
      dataLength={fetchedListingsCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner margin="2" />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="10px"
      >
        {isLoading && <ListingCardSkeletons />}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.items.map((listing) => (
              <ListingCardContainer key={listing.ID}>
                <ListingCard listing={listing} />
              </ListingCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default ListingGrid;
