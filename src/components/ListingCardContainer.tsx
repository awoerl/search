import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ListingCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} overflow="hidden" className="hoverImage">
      {children}
    </Box>
  );
};

export default ListingCardContainer;
