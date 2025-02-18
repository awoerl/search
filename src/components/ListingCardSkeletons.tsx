import ListingCardContainer from "./ListingCardContainer";
import ListingCardSkeleton from "./ListingCardSkeleton";

const ListingCardSkeletons = () => {
  const skeletons = [...Array(12).keys()];

  return (
    <>
      {skeletons.map((skeleton) => (
        <ListingCardContainer key={"skeleton_" + skeleton}>
          <ListingCardSkeleton />
        </ListingCardContainer>
      ))}
    </>
  );
};

export default ListingCardSkeletons;
