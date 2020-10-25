import React from 'react';
import {
  Grid,
  Text,
  Heading,
  Box, 
  Image,
  Flex
} from '@chakra-ui/core';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Celular from '../../images/imgCelular.svg';
import './styles.css'; 

function Principal(){
  return(
    <div id="page-main">
      <Header />
      <Grid templateColumns="repeat(2, 2fr)" gap="2%">
        <Box w="120%" paddingLeft="10.5625rem" >
          <Heading fontSize="4.5rem" color="#3F6FE9" >
            Mais vendas, menos trabalho.
          </Heading>
          <Text fontSize="2xl" fontWeight="semibold">
            Tenha controle das suas vendas na palma da mão. Conheça um novo conceito de vendas.
          </Text>
        </Box>
        <Box w="100%"  paddingTop="1.5rem">
          <Image src={Celular} paddingLeft="30%"/>
        </Box>
      </Grid>
    </div>
  );
}

export default Principal;