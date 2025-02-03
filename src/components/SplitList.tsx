import { List, ListItem } from "@chakra-ui/react";
import React from "react";

interface Props {
  text: string;
}

const SplitList = ({ text }: Props) => {
  const parts = text.split(", ");

  return (
    <List>
      {parts.map((part) => (
        <ListItem marginBottom={1}>{part}</ListItem>
      ))}
    </List>
  );
};

export default SplitList;
