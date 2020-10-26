import React from 'react';
import { Flex, Text, Button, Grid } from '@chakra-ui/core'

const Footer = props => {
  return (
    <Flex
      as="nav"
      height="110px"
      width="100%"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0.5rem"
      bg={"#C4C4C4"}
      color="#1a1a1a"
      {...props}
    >
      <Grid paddingLeft="10.5625rem" w="100%" templateColumns="repeat(2, 1fr)" gap={6}>
        <Text w="17rem" fontSize="lg" fontWeight="semibold">
          © Copyright 2020 - Sellup - 
          Todos os direitos reservados Sellup
          CNPJ 14.380.200/0001-21
        </Text>
        <Flex align="center" justify="center" paddingLeft="8rem">
          <Button variantColor="teal" size="md" >
            Saiba mais
          </Button>
        </Flex>
      </Grid>
    </Flex>
  );
};

export default Footer;