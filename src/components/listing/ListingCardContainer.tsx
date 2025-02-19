import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

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
