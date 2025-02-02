import { SimpleGrid, Text } from "@chakra-ui/react";
import Listing from "../entities/Listing";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

interface Props {
  listing: Listing;
}
const ListingAttributes = ({ listing }: Props) => {
  return <Text>{listing.Label}</Text>;
};

export default ListingAttributes;
