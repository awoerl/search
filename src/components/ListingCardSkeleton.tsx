import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import { useViewModeStore, ViewMode } from "../stores/viewstore";

const ListingCardSkeleton = () => {
  const { isCardMode } = useViewModeStore();
  const isCard = isCardMode();

  return (
    <Card>
      <Skeleton height={isCard ? "274px" : "196px"} />
      <CardBody display={isCard ? "" : "none"}>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default ListingCardSkeleton;
