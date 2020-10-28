import React from 'react';
import {
  Flex,
  Text, 
  Button, 
  Link,
  Image,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/core";

import Logo from '../../images/logo.svg'

  const Header = props => {
    const [show, setShow] = React.useState(false);
    const handleToggle = () => setShow(!show);
  
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="0.5rem"
        bg={"#74BFE9"}
        color="white"
        {...props}
      >
        <Flex align="center" mr={5} >
          <Heading letterSpacing={"0.2rem"} paddingLeft="3rem">
            <Image width="157px" height="46px" src={Logo}/>
          </Heading>
        </Flex>
  
        <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
          <svg
            fill="white"
            width="12px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
          </svg>
        </Box>
  
        <Box
          display={{ sm: show ? "block" : "none", md: "flex" }}
          width={{ sm: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
        >
        </Box>
  
        <Box
          display={{ sm: show ? "block" : "none", md: "block" }}
          mt={{ base: 4, md: 0 }}
        >
          <Breadcrumb separator="|" fontWeight="medium">
            <BreadcrumbItem>
              <BreadcrumbLink href="cadastro">Cadastrar mercado</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem paddingRight="3rem">
              <BreadcrumbLink href="#">Entrar</BreadcrumbLink>
              <BreadcrumbLink href="cadastro">Cadastrar mercado</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem paddingRight="3rem">
              <BreadcrumbLink href="/login">Entrar</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
      </Flex>
    );
  };

export default Header;