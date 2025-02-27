import { Grid, Show, GridItem, Box, Flex, Text } from "@chakra-ui/react";

import ListingGrid from "../components/listing/ListingGrid";
import ListingHeading from "../components/listing/ListingHeading";
import KeywordList from "../components/navigation/KeywordList";
import SortSelector from "../components/navigation/SortSelector";
import AreaSelector from "../components/navigation/AreaSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`, // > 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX="3">
          <KeywordList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <ListingHeading />
          <Flex marginBottom={5} marginTop={5}>
            <Box marginRight={3}>
              <AreaSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <ListingGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
