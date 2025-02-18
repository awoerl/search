import { Link as NavLink, useParams } from "react-router-dom";
import { Link, DownloadIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Icon,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import DetailsScreenshots from "../components/DetailsScreenshots";
import useDetails from "../hooks/useDetails";
import { IoMdArrowRoundBack } from "react-icons/io";
import DetailsTable from "../components/DetailsTable";

const DetailPage = () => {
  const { id, areaid } = useParams();
  const { data: details, isLoading, error } = useDetails(id!, areaid!);

  if (isLoading) return <Spinner />;
  if (error || !details) throw error;

  return (
    <Box maxWidth={800} paddingX={3}>
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        <Box marginBottom={6}>
          <DetailsScreenshots details={details} />
          <Link href={details.url} target="_blank">
            <Text marginTop={6}>
              <DownloadIcon marginRight={2} />
              Download
            </Text>
          </Link>
        </Box>
        <Box>
          <Heading
            marginTop={-1}
            marginBottom={4}
            fontSize={20}
            color="gray.500"
          >
            {details.subtitle}
          </Heading>
          <Heading marginBottom={4}>
            <NavLink to="/">
              <Icon marginBottom={-1} marginLeft={-1} as={IoMdArrowRoundBack} />{" "}
              {details.title}
            </NavLink>
          </Heading>
          <ExpandableText limit={500}>{details.description}</ExpandableText>
        </Box>
      </SimpleGrid>
      <Heading marginBottom={4} fontSize={20} marginTop={10}>
        Details
      </Heading>
      <DetailsTable details={details} />
    </Box>
  );
};

export default DetailPage;
