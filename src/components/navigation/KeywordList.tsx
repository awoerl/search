import {
  Button,
  Heading,
  HStack,
  List,
  ListItem,
  Skeleton,
} from "@chakra-ui/react";

import useAreas from "../../hooks/useAreas";
import useSearchQueryStore from "../../stores/querystore";

const KeywordList = () => {
  const { data, isLoading, error } = useAreas();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const selectedAreaId = useSearchQueryStore((s) => s.searchQuery.areaId);
  const setSelectedAreaId = useSearchQueryStore((s) => s.setAreaId);

  if (error) {
    return null;
  }

  if (isLoading)
    return (
      <>
        <Heading fontSize="2xl" marginBottom="3">
          Keywords
        </Heading>
        {skeletons.map((s) => (
          <HStack marginY="10px" height="32px" marginBottom="10px" key={s}>
            <Skeleton borderRadius="8px" width="100%" height="100%" />
          </HStack>
        ))}
      </>
    );

  return (
    <>
      <Heading fontSize="2xl" marginBottom="3">
        Keywords
      </Heading>
      <List>
        {data?.items?.map((area) => (
          <ListItem paddingY="5px" key={area.id}>
            <Button
              onClick={() => setSelectedAreaId(area.id)}
              fontSize="lg"
              variant="link"
              whiteSpace="normal"
              textAlign="left"
              justifyContent="left"
              fontWeight={area.id == selectedAreaId ? "bold" : "normal"}
            >
              {area.title}
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default KeywordList;
