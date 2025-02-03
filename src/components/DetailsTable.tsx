import { Link, Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/react";
import Details from "../entities/Details";
import { LinkIcon } from "@chakra-ui/icons";
import SplitList from "./SplitList";
import TagList from "./TagList";

interface Props {
  details: Details;
}

const DetailsTable = ({ details }: Props) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Tbody>
          {details.infos.map((info) => (
            <Tr>
              <Td paddingLeft="0" color="gray.500" verticalAlign="top">
                {info["key"]}
              </Td>
              <Td whiteSpace="wrap" paddingLeft="0">
                {info["val"].startsWith("http") ? (
                  <Link target="_blank" href={info["val"]}>
                    <LinkIcon marginRight={2} /> {info["val"]}
                  </Link>
                ) : info["key"].startsWith("Zutaten") ? (
                  <SplitList text={info["val"]} />
                ) : info["key"].startsWith("Tags") ? (
                  <TagList text={info["val"]} />
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: info["val"] }} />
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DetailsTable;
