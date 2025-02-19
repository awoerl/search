import { Text } from "@chakra-ui/react";

interface Props {
  features: { [key: string]: string };
  lines?: number;
}

const FeatureList = ({ features, lines = 2 }: Props) => {

  return Object.values(features) ? (
    <Text fontSize={13} color="gray.500" noOfLines={lines}>
      {Object.values(features).join(' - ')}
    </Text>
  ) : null;
};

export default FeatureList;
