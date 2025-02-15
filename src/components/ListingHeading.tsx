import { Heading } from "@chakra-ui/react";
import Area from "../hooks/useArea";
import useSearchQueryStore from "../store";

const ListingHeading = () => {
  const selectedAreaId = useSearchQueryStore((s) => s.searchQuery.areaId);
  const area = Area.getArea(selectedAreaId);

  const title = `${area?.title || "Search"}`;

  return (
    <Heading fontSize="5xl" as="h1">
      {title}
    </Heading>
  );
};

export default ListingHeading;
