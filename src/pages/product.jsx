import {
  Flex,
  Image,
  Box,
  Text,
  Select,
  Button,
  Accordion,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../http/product";
import { FiShoppingCart } from "react-icons/fi";
import tshirt1 from "../assets/tshirt1.webp";

export default function ProductPage() {
  let [product, setProduct] = useState();
  const params = useParams();

  useEffect(() => {
    getProductById("652a186d97554479f8f604ce")
      .then((res) => res.json())
      .then((productData) => setProduct(productData.data));
  }, []);

  return (
    <Flex justifyContent={"center"} mt={"5rem"}>
      <Box>
        <Image src={tshirt1} borderRadius={8} height={"40rem"} />
      </Box>
      <Box ml={"3rem"} width={"30rem"} maxW={"30rem"}>
        <Text fontSize="2xl">Gamma-Ecomm</Text>
        <Text fontSize="xl">{product?.name}</Text>
        <Text fontSize="xl" fontWeight={800} mt={4}>
          {product?.price}
        </Text>
        <Text mt={4}>Size</Text>
        <Select placeholder="Select a size">
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </Select>
        <Button
          borderRadius={8}
          mt={4}
          leftIcon={<FiShoppingCart />}
          background={"yellow.400"}
          _hover={{
            bg: "yellow.300",
          }}
          w={"100%"}
        >
          Add to cart
        </Button>

        <Accordion mt={4} allowMultiple allowToggle defaultIndex={[0]}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontWeight={700}>
                  Description
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={"15px"}>
              {product?.description}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontWeight={700}>
                  Manufacturer information
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={"15px"}>
              Country of Origin - India Manufactured By - GammaEcomm Brands Pvt
              Ltd, Sairaj Logistic Hub #A5, Bmc Pipeline Road, Opposite All
              Saints High School, Amane, Bhiwandi, Thane, Maharashtra - 421302
              Packed By - GammaEcomm Brands Pvt Ltd, Sairaj Logistic Hub #A5,
              Bmc Pipeline Road, Opposite All Saints High School, Amane,
              Bhiwandi, Thane, Maharashtra - 421302
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontWeight={700}>
                  15 Returns & Exchange
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={"15px"}>
              <UnorderedList>
                <ListItem>Easy returns upto 15 days of delivery.</ListItem>
                <ListItem>Exchange available on select pincodes.</ListItem>
                <ListItem>100% Secure payments.</ListItem>
                <ListItem>Instant refund and Global shipping.</ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Flex>
  );
}
