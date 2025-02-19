import { Tag } from "@chakra-ui/react";

interface Props {
  text: string;
}

const TagList = ({ text }: Props) => {
  const parts = text.split(", ");

  return (
    <>
      {parts.map((part) => (
        <Tag marginRight={2} marginBottom={2} key={part}>
          {part}
        </Tag>
      ))}
    </>
  );
};

export default TagList;
