import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  IconButton,
  InputGroup,
  InputRightElement,
  useColorModeValue,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { useState } from "react";
import { login } from "../http/auth";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const toast = useToast();

  function handleFormUpdate(name, value) {
    setLoginForm((prevState) => {
      return { ...prevState, [name]: value };
    });
  }
  function validateForm() {
    return true;
  }
  function submitLoginForm() {
    setLoading(true);
    if (!loading && validateForm()) {
      login(loginForm.email, loginForm.password)
        .then((res) => {
          if (res.status === 200) {
            res.json().then((resJson) => {
              localStorage.setItem("tkn", resJson.data);
              toast({
                title: "Login Succesfull!",
                status: "success",
                duration: 9000,
                isClosable: true,
              });
            });
          } else if (res.status === 401) {
            toast({
              title: "Email/Password invalid! Try again.",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          } else {
            toast({
              title: "Something went wrong! Try again later.",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          }
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }

  return (
    <Flex
      minH={"90vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={8}
        mx={"auto"}
        maxW={"lg"}
        py={12}
        px={6}
        w={{ sm: "lg", md: "md", lg: "sm" }}
      >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Login</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                value={loginForm.email}
                type="email"
                onChange={(e) =>
                  handleFormUpdate(e.target.name, e.target.value)
                }
                name="email"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  value={loginForm.password}
                  type={showPassword ? "text" : "password"}
                  onChange={(e) =>
                    handleFormUpdate(e.target.name, e.target.value)
                  }
                  name="password"
                />
                <InputRightElement>
                  <IconButton
                    variant="ghost"
                    aria-label="show/hide password"
                    icon={showPassword ? <FiEyeOff /> : <FiEye />}
                    onClick={() => {
                      setShowPassword((prevState) => !prevState);
                    }}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Text color={"blue.400"}>Forgot password?</Text>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={submitLoginForm}
              >
                {loading ? <Spinner size="sm" /> : "Sign in"}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
