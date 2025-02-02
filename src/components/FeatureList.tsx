import { Text } from "@chakra-ui/react";

interface Props {
  features: string[];
  lines?: number;
}

const FeatureList = ({ features, lines = 2 }: Props) => {
  return (
    <Text fontSize={13} color="gray.500" noOfLines={lines} height="54px">
      {features.join(", ")}
    </Text>
  );
};

export default FeatureList;
