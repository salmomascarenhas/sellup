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
import Mouse from '../../images/mouseMain.svg';
import Motoboy from '../../images/motoboy.svg';
import GooglePlay from '../../images/Playstore.svg';
import Appstore from '../../images/AppStore.svg';
import './styles.css';

function Principal() {
  return (
    <div id="page-main">
      <Header />
      <Grid templateColumns="repeat(2, 2fr)" gap="2%">
        <Box w="110%" paddingLeft="10.4rem" >
          <Heading fontSize="4.5rem" color="#3F6FE9" textAlign="center">
            Mais vendas, menos trabalho.
          </Heading>
          <Text fontSize="2xl" fontWeight="semibold" textAlign="center">
            Tenha controle das suas vendas na palma da mão. Conheça um novo conceito de vendas.
          </Text>
        </Box>
        <Box w="100%" paddingTop="1.5rem">
          <Image src={Celular} paddingLeft="30%" />
        </Box>
      </Grid>
      <Heading paddingTop="7rem" textAlign="center" as="h1" size="2xl">
        O que oferecemos
      </Heading>
      <Flex paddingTop="0.2rem" justifyContent="center">
        <Flex align="flex-end">
          <Image src={Mouse} paddingLeft="4rem" />
        </Flex>
        <Flex size="20rem" paddingLeft="2rem" paddingTop="11.563rem" textAlign="center">
          <Text fontSize="4xl">Venda em passos simples e rápido</Text>
        </Flex>
        <Flex align="flex-end" paddingLeft="10rem">
          <Image src={Motoboy} />
        </Flex >
        <Flex paddingTop="11.563rem" paddingLeft="1rem" textAlign="center">
          <Text fontSize="4xl">Sem entrega, sem problemas!<br></br> A sellup entrega pra você</Text>
        </Flex>
      </Flex>
      <Heading paddingTop="11.563rem" textAlign="center" as="h1" size="2xl">
        Baixe agora mesmo
      </Heading>
      <Flex paddingTop="6rem" paddingBottom="6rem" justifyContent="center">
        <Flex>
          <Image src={GooglePlay} />
        </Flex>
        <Flex>
          <Image src={Appstore} paddingLeft="10rem" />
        </Flex>
      </Flex>
      <Footer />
    </div>
  );
}

export default Principal;