import { Text } from "@chakra-ui/react";

interface Props {
  features: { [key: string]: string };
  lines?: number;
}

const FeatureList = ({ features, lines = 2 }: Props) => {
  let aFeatures = [];
  for (let key in features) {
    aFeatures.push(features[key]);
  }
  return aFeatures ? (
    <Text fontSize={13} color="gray.500" noOfLines={lines}>
      {aFeatures.join(' - ')}
    </Text>
  ) : null;
};

export default FeatureList;
