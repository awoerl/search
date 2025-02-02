import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
  max?: number;
}

const CriticScore = ({ score, max = 100 }: Props) => {
  let normScore = score / max;
  let color = normScore > 0.85 ? "green" : normScore > 0.7 ? "yellow" : "";

  return (
    <Badge fontSize="14px" paddingX={2} borderRadius="4px" colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
