import {
  Image,
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";

import { BASE_URL } from "../../core/config";
import Details from "../../entities/Details";
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
          {details.images.length ? (
            <Tr>
              <Td paddingLeft="0" color="gray.500" verticalAlign="top">
                Images
              </Td>
              <Td whiteSpace="wrap" paddingLeft="0">
                {details.images?.map((image) => (
                  <Image
                    key={image}
                    className="hoverImage"
                    display="inline"
                    borderRadius={5}
                    width="146px"
                    height=""
                    marginRight="2"
                    marginBottom="2"
                    cursor="pointer"
                    onClick={() =>
                      window.open(
                        BASE_URL + "/../" + image + "&width=0&height=0",
                        "_blank"
                      )
                    }
                    src={BASE_URL + "/../" + image}
                  />
                ))}
              </Td>
            </Tr>
          ) : null}
          {details.infos.map((info) =>
            info["val"] ? (
              <Tr key={info["key"]}>
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
            ) : null
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DetailsTable;
