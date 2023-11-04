import { jwtDecode } from "jwt-decode";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  Link,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { useEffect, useState } from "react";

export default function TopNav({ cart }) {
  const { isOpen, onToggle } = useDisclosure();
  const [loggedInUser, setLoggedInUser] = useState();
  const [dropdownOptions, setdropdownOptions] = useState();
  function logout(e) {
    console.log(e.target);
    console.log("logout");
    localStorage.removeItem("tkn");
    window.location.reload();
  }

  useEffect(() => {
    decodeToken();
  }, []);
  async function decodeToken() {
    const token = localStorage.getItem("tkn");
    if (token) {
      const userDetails = jwtDecode(token);
      setLoggedInUser(userDetails);
      if (userDetails.isAdmin) {
        setdropdownOptions([
          {
            key: "products",
            element: <Link href="/inventory">Products</Link>,
          },
          {
            key: "orders",
            element: <Link href="/orders">Orders</Link>,
          },
          {
            key: "users",
            element: <Link href="/users">Users</Link>,
          },
          {
            key: "logout",
            element: <Link onClick={logout}>Logout</Link>,
          },
        ]);
      } else {
        setdropdownOptions([
          {
            key: "profile",
            element: <Link href="/profile">Orders</Link>,
          },
          {
            key: "orders",
            element: <Link href="/orders">Users</Link>,
          },
          {
            key: "logout",
            element: <Link onClick={logout}>Logout</Link>,
          },
        ]);
      }
    }
  }

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: "24rem" }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            <Link href="/">Gamma-EComm</Link>
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
            color={"black"}
          >
            {loggedInUser ? (
              <Menu>
                <MenuButton textDecoration={"underline"}>
                  {" "}
                  {loggedInUser.name}
                </MenuButton>
                <MenuList>
                  {dropdownOptions.map((link) => (
                    <MenuItem key={link.key}>{link.element}</MenuItem>
                  ))}
                </MenuList>
              </Menu>
            ) : (
              <Link href="/login">Login</Link>
            )}
          </Button>
          {!loggedInUser?.isAdmin && (
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"black"}
              bg={"yellow.400"}
              href={"#"}
              _hover={{
                bg: "yellow.300",
              }}
              leftIcon={<FiShoppingCart />}
            >
              Cart {cart?.length !== 0 && `(${cart?.length})`}
            </Button>
          )}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("yellow.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "yellow.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"yellow.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Men",
    children: [
      {
        label: "Shirts",
        href: "/catelogue/Men/Shirt",
      },
      {
        label: "T-Shirts",
        href: "/catelogue/Men/T-Shirt",
      },
      {
        label: "Hoodies and Sweatshirts",
        href: "/catelogue/Men/Hoodies and Sweatshirts",
      },
      {
        label: "Oversized T-Shirts",
        href: "/catelogue/Men/Oversized T-Shirts",
      },
    ],
  },
  {
    label: "Women",
    children: [
      {
        label: "Shirts",
        href: "/catelogue/Women/Shirts",
      },
      {
        label: "T-Shirts",
        href: "/catelogue/Women/T-Shirts",
      },
      {
        label: "Hoodies and Sweatshirts",
        href: "/catelogue/Women/Hoodies and Sweatshirts",
      },
      {
        label: "Oversized T-Shirts",
        href: "/catelogue/Women/Oversized T-Shirts",
      },
    ],
  },
];
