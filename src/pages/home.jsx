import {
  Image,
  Flex,
  Heading,
  Divider,
  SimpleGrid,
  Card,
  CardBody,
  CardFooter,
  Text,
  Button,
} from "@chakra-ui/react";
import { FiEye, FiShoppingBag } from "react-icons/fi";
import image1 from "../assets/herobanner1.png";
import image2 from "../assets/herobanner2.png";
import image3 from "../assets/herobanner3.png";
import tshirt1 from "../assets/tshirt1.webp";
import tshirt2 from "../assets/tshirt2.webp";
import tshirt3 from "../assets/tshirt3.webp";
import tshirt4 from "../assets/tshirt4.webp";
import { useState } from "react";
import Carousel from "../components/Carousel";
function HomePage() {
  return (
    <Flex flexDirection={"column"} justifyContent={"center"}>
      {/*This component is for hero banner*/}
      <Flex alignItems={"center"} justifyContent={"space-around"} mt={2}>
        <Flex
          w={"38rem"}
          h={"50rem"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Image src={image1} h={"50rem"} />
        </Flex>
        <Flex w={"38rem"} h={"50rem"}>
          <Image src={image2} h={"50rem"} />
        </Flex>
        <Flex w={"38rem"} h={"50rem"}>
          <Image src={image3} h={"50rem"} />
        </Flex>
      </Flex>
      {/*This component is for Best sellers*/}
      <Flex mx={16} my={4} flexDirection={"column"}>
        <Heading>Bestsellers</Heading>
        <Divider />
        <Flex mt={4}>
          <SimpleGrid columns={4} spacing={8}>
            <Card>
              <CardBody>
                <Flex direction={"column"}>
                  <Image src={tshirt1} borderRadius={8} />
                  <Heading size={"md"} mt={4}>
                    Men Black Oversized Tshirt
                  </Heading>
                  <Text
                    textDecoration={"line-through"}
                    fontSize={"md"}
                    mt={2}
                    color={"gray.500"}
                  >
                    ₹{1000}
                  </Text>
                  <Text fontSize={"2xl"} color={"black"}>
                    ₹{699}
                  </Text>
                </Flex>
              </CardBody>
              <CardFooter>
                <Button leftIcon={<FiEye />}>View</Button>
                <Button
                  leftIcon={<FiShoppingBag />}
                  ml={2}
                  bgColor={"yellow.400"}
                  _hover={{
                    bg: "yellow.300",
                  }}
                >
                  Add to cart
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <Flex direction={"column"}>
                  <Image src={tshirt2} borderRadius={8} />
                  <Heading size={"md"} mt={4}>
                    Men Oversized Tshirt
                  </Heading>
                  <Text
                    textDecoration={"line-through"}
                    fontSize={"md"}
                    mt={2}
                    color={"gray.500"}
                  >
                    ₹{1000}
                  </Text>
                  <Text fontSize={"2xl"} color={"black"}>
                    ₹{699}
                  </Text>
                </Flex>
              </CardBody>
              <CardFooter>
                <Button leftIcon={<FiEye />}>View</Button>
                <Button
                  leftIcon={<FiShoppingBag />}
                  ml={2}
                  bgColor={"yellow.400"}
                  _hover={{
                    bg: "yellow.300",
                  }}
                >
                  Add to cart
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <Flex direction={"column"}>
                  <Image src={tshirt3} borderRadius={8} />
                  <Heading size={"md"} mt={4}>
                    Oversized Tshirt
                  </Heading>
                  <Text
                    textDecoration={"line-through"}
                    fontSize={"md"}
                    mt={2}
                    color={"gray.500"}
                  >
                    ₹{1000}
                  </Text>
                  <Text fontSize={"2xl"} color={"black"}>
                    ₹{699}
                  </Text>
                </Flex>
              </CardBody>
              <CardFooter>
                <Button leftIcon={<FiEye />}>View</Button>
                <Button
                  leftIcon={<FiShoppingBag />}
                  ml={2}
                  bgColor={"yellow.400"}
                  _hover={{
                    bg: "yellow.300",
                  }}
                >
                  Add to cart
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <Flex direction={"column"}>
                  <Image src={tshirt4} borderRadius={8} />
                  <Heading size={"md"} mt={4}>
                    Oversized Tshirt
                  </Heading>
                  <Text
                    textDecoration={"line-through"}
                    fontSize={"md"}
                    mt={2}
                    color={"gray.500"}
                  >
                    ₹{1000}
                  </Text>
                  <Text fontSize={"2xl"} color={"black"}>
                    ₹{699}
                  </Text>
                </Flex>
              </CardBody>
              <CardFooter>
                <Button leftIcon={<FiEye />}>View</Button>
                <Button
                  leftIcon={<FiShoppingBag />}
                  ml={2}
                  bgColor={"yellow.400"}
                  _hover={{
                    bg: "yellow.300",
                  }}
                >
                  Add to cart
                </Button>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </Flex>
      </Flex>
      {/*This component is for reviews*/}
      <Flex></Flex>
      {/*this component is for about the footer*/}
      <Flex mt={2}>
        <Carousel />
      </Flex>
    </Flex>
  );
}

export default HomePage;
