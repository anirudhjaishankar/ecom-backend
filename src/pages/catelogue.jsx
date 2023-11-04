import { Flex, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
export default function CateloguePage() {
  const params = useParams();

  return (
    <Flex>
      <Heading size="xl">{`${params.gender}'s ${params.type}`}</Heading>
    </Flex>
  );
}
