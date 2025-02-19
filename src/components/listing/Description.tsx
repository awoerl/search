import { Text } from "@chakra-ui/react";

interface Props {
  children: string;
  lines?: number;
}
const Description = ({ children, lines = 3 }: Props ) => {
  return children ? (
    <Text fontSize={13} color="gray.500" noOfLines={lines}>{children}</Text>
  ) : null;
}

export default Description