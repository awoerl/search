import { SimpleGrid, Text } from "@chakra-ui/react";
import Details from "../entities/Details";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

interface Props {
  details: Details;
}
const DetailAttributes = ({ details }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      {details.infos.map((info) => (
        <DefinitionItem term={info["key"]} key={info["key"]}>
          <Text>{info["val"]}</Text>
        </DefinitionItem>
      ))}
    </SimpleGrid>
  );
};

export default DetailAttributes;
