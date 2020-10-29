import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Box,
  Flex,
  Grid, 
  Heading, Link,
  Text, Input, 
  Stack, Button,
  InputGroup, InputLeftElement, InputRightElement,
  Icon } from '@chakra-ui/core';

import './styles.css';



function Cadastro(){
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return(
    <div>
      <Header />
      <Flex id="page-register" >
        <Grid paddingTop="54px" w="100%" templateColumns="repeat(2, 1fr)" gap={5}>
          <Box w="110%" paddingLeft="10.4rem" >
            <Heading fontSize="4.5rem" color="#3F6FE9" textAlign="center">
              Mais vendas, menos trabalho.
            </Heading>
            <Text paddingTop="1rem" fontSize="4xl" fontWeight="semibold" textAlign="center">
              Venda em passos simples e rápidos 
            </Text>
          </Box>
          <Box paddingLeft="30%">
            <Flex paddingTop="19px" justify="center" bg="white" borderRadius="10px" shadow="md" w="456px" h="528px" borderWidth="2px" flex="1">
              <Stack  align="center" spacing={8}>
                <Heading as="h4" size="lg" color="#3F6FE9">
                  Cadastre-se
                </Heading>
                <Input w="150%" placeholder="Nome do responsável legal" shadow="sm" borderRadius="10px"/>
                <Input type="number" w="150%" placeholder="CPF/CNPJ" shadow="sm" borderRadius="10px"/>
                <InputGroup w="150%" shadow="sm" borderRadius="10px">
                  <InputLeftElement children={<Icon name="email" color="gray.300" />} />
                  <Input type="email" placeholder="E-mail" borderRadius="10px" />
                </InputGroup>
                <InputGroup w="150%" shadow="sm" borderRadius="10px">
                  <InputLeftElement children={<Icon name="phone" color="gray.300" />} />
                  <Input type="number" placeholder="Telefone com DDD" borderRadius="10px" />
                </InputGroup>
                <InputGroup w="150%" shadow="sm" borderRadius="10px">
                  <InputLeftElement children={<Icon name="lock" color="gray.300" />} />
                  <Input type={show ? "text" : "password"} placeholder="Senha" borderRadius="10px" />
                  <InputRightElement  paddingRight="0.2rem">
                    <Icon name="view" h="1.75rem"  onClick={handleClick}  variant="solid">
                      {show ? "Ocultar" : "Monstrar"}
                    </Icon >
                  </InputRightElement>
                </InputGroup>
                <Button  bg={"#69AEFF"} color="white" variant="solid">
                  <Link href="/atividades">Continuar</Link> 
                </Button>
              </Stack>
            </Flex>
          </Box>
        </Grid>
      </Flex>
      <Footer />
    </div>
  );
}

export default Cadastro;
