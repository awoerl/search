import { Grid, Show, GridItem, Box, Flex } from "@chakra-ui/react";
import ListingGrid from "../components/ListingGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import AreaSelector from "../components/AreaSelector";

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
        <GridItem area="aside" paddingX="5">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading></GameHeading>
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
