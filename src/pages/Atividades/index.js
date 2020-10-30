import React from 'react';

import { BsPeopleCircle } from "react-icons/bs";
import {
  Flex, Image, Grid, Box,
  Text, Stack, Icon, Link,
  Divider, Input, InputGroup, InputLeftElement
} from "@chakra-ui/core";

import {
  Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Button
} from "@chakra-ui/core";

import {
  Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverHeader, PopoverBody, PopoverCloseButton,
} from "@chakra-ui/core";



import vilaNova from '../../images/vilaNova.svg';
import Logo from '../../images/logo.svg';

import Footer from '../../components/Footer';
import './styles.css';

function Atividades() {
  return (
    <div id="atividade">
      <Flex >
        <Flex bg={'#454545'} height="100vh" w="217px" justifyContent="center" >
          <Stack p={2}>
            <Image src={Logo} paddingTop="0.2rem" />
            <InputGroup>
              <InputLeftElement children={<Icon name="search" color="gray.300" />} />
              <Input placeholder="Buscar" />
            </InputGroup>
            <Flex paddingTop="1rem" justify="center" >

            </Flex>
            <Flex justify="center" paddingTop="1rem">
              <Popover>
                <PopoverTrigger>
                  <Button leftIcon={BsPeopleCircle} variantColor="blue" variant="solid" w="100%">
                    Conta
                  </Button>
                </PopoverTrigger>
                <PopoverContent zIndex={4}>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Nome: Antônio Franscisco Sousa</PopoverHeader>
                  <PopoverBody>CPF:123.456.789.00</PopoverBody>
                  <PopoverBody>email:franscisco@email.com</PopoverBody>
                  <PopoverBody>Telefone:(88)9999-9999</PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Flex justify="center" paddingTop="250%">
              <Button w="110px">
                <Link href="/">Sair</Link>
              </Button>
            </Flex>
          </Stack>
        </Flex>

        <Stack padding="23px 5%">
          <Box bg={"white"} w="1143px" h="205px" borderRadius="5px" border="1px" borderColor="#74BFE9" shadow="md">
            <Grid templateColumns="repeat(2, 1fr)" gap={5}>
              <Box p={5} display={{ md: "flex" }} shadow="md" borderRadius="5px">
                <Box flexShrink="0">
                  <Image rounded="lg" width={{ md: 40 }} src={vilaNova} />
                </Box>
                <Box mt={{ base: 4, md: 0 }} ml={{ md: 3 }}>
                  <Text fontWeight="bold" textTransform="uppercase" fontSize="sm" letterSpacing="wide" color="blue.400">
                    Mercado Vila Nova
                  </Text>
                  <Text mt={1} display="block" fontSize="lg" lineHeight="normal" fontWeight="semibold">
                    Rua Salomão Pereira, 763
                  </Text>
                  <Link href="#" mt={85} display="block" fontSize="lg" lineHeight="normal" color="#74BFE9" >
                    Ver meu mercado
                  </Link>
                </Box>
              </Box>
              <Box shadow="sm" p={3} borderRadius="5px">
                <Flex bg={'#74BFE9'} w="554px" h="54px" borderTopLeftRadius="5px" borderTopRightRadius="5px" justify="center" alignItems="center">
                  <Text fontWeight="semibold" color="white">Suas atividades</Text>
                </Flex>
                <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                  <Box>
                    <Stat paddingLeft="0.2rem">
                      <StatLabel fontSize="xl">Saldo do mês</StatLabel>
                      <StatNumber>R$ 1753.21</StatNumber>
                      <StatHelpText>
                        <StatArrow type="increase" />
                        23.36%
                      </StatHelpText>
                    </Stat>
                  </Box>
                  <Box>
                    <Grid templateColumns="repeat(2, 1fr)" gap={4} >
                      <Box >
                        <Text p={0.5}>{<Icon name="check-circle" color="green.500" />} Vendido</Text>
                        <Text p={0.5}>{<Icon name="warning" color="red.500" />} Reclamações</Text>
                        <Text p={0.5}>{<Icon name="star" color="yellow.500" />} Avaliações</Text>
                      </Box>
                      <Box paddingLeft="90px">
                        <Text fontWeight="semibold">213</Text>
                        <Text paddingLeft="1rem" fontWeight="semibold">4</Text>
                        <Text fontWeight="semibold">90%</Text>
                      </Box>
                    </Grid >
                  </Box>
                </Grid>
                <Flex bg={'#C4C4C4'} w="554px" h="30px" borderBottomLeftRadius="5px" borderBottomRightRadius="5px">
                </Flex>
              </Box>
            </Grid>
          </Box>
          <Box paddingTop="42px" >
            <Grid templateColumns="repeat(3, 1fr)" gap={10} >
              <Box h="290px" border="1px" borderColor="#FFD556" borderRadius="5px" bg={"white"}>
                <Flex w="100%" h="34px" bg={"#FFD556"} borderTopLeftRadius="5px" borderTopRightRadius="5px" align="center" justify="center">
                  <Text fontWeight="semibold">{<Icon name="edit" />} Aguardando análise</Text>
                </Flex>
                <Box fontWeight="semibold" textAlign="center">
                  <Text textAlign="center" fontSize="xl" fontWeight="bold">Raimundo Nonato</Text>
                  <Text>Valor: R$1753.21</Text>
                  <Text>Quantidade de itens: 17</Text>
                  <Text>Itens diferentes: 6</Text>
                </Box>
                <Divider shadow="sm" borderColor="#DBDBDB" />
                <Box fontWeight="semibold" textAlign="center">
                  <Text>2 Arroz Branco Tio João</Text>
                  <Text>1 Milho verde</Text>
                  <Text>10 Feijão Preto Tio João</Text>
                  <Text>4 Azeitona Verde</Text>
                </Box>
                <Flex justify="center" align="center" bg={'#F3F3F3'} w="100%" h="15%" borderBottomLeftRadius="5px" borderBottomRightRadius="5px">
                  <Text fontWeight="semibold">Ver mais{<Icon name="chevron-right" />}</Text>
                </Flex>
              </Box>

              <Box h="290px" border="1px" borderColor="#FFD556" borderRadius="5px" bg={"white"}>
                <Flex w="100%" h="34px" bg={"#FFD556"} borderTopLeftRadius="5px" borderTopRightRadius="5px" align="center" justify="center">
                  <Text fontWeight="semibold">{<Icon name="edit" />} Aguardando análise</Text>
                </Flex>
                <Box fontWeight="semibold" textAlign="center">
                  <Text textAlign="center" fontSize="xl" fontWeight="bold">Raimundo Nonato</Text>
                  <Text>Valor: R$1753.21</Text>
                  <Text>Quantidade de itens: 17</Text>
                  <Text>Itens diferentes: 6</Text>
                </Box>
                <Divider shadow="sm" borderColor="#DBDBDB" />
                <Box fontWeight="semibold" textAlign="center">
                  <Text>2 Arroz Branco Tio João</Text>
                  <Text>1 Milho verde</Text>
                  <Text>10 Feijão Preto Tio João</Text>
                  <Text>4 Azeitona Verde</Text>
                </Box>
                <Flex justify="center" align="center" bg={'#F3F3F3'} w="100%" h="15%" borderBottomLeftRadius="5px" borderBottomRightRadius="5px">
                  <Text fontWeight="semibold">Ver mais{<Icon name="chevron-right" />}</Text>
                </Flex>
              </Box>

              <Box h="290px" border="1px" borderColor="#FFD556" borderRadius="5px" bg={"white"}>
                <Flex w="100%" h="34px" bg={"#FFD556"} borderTopLeftRadius="5px" borderTopRightRadius="5px" align="center" justify="center">
                  <Text fontWeight="semibold">{<Icon name="edit" />} Aguardando análise</Text>
                </Flex>
                <Box fontWeight="semibold" textAlign="center">
                  <Text textAlign="center" fontSize="xl" fontWeight="bold">Raimundo Nonato</Text>
                  <Text>Valor: R$1753.21</Text>
                  <Text>Quantidade de itens: 17</Text>
                  <Text>Itens diferentes: 6</Text>
                </Box>
                <Divider shadow="sm" borderColor="#DBDBDB" />
                <Box fontWeight="semibold" textAlign="center">
                  <Text>2 Arroz Branco Tio João</Text>
                  <Text>1 Milho verde</Text>
                  <Text>10 Feijão Preto Tio João</Text>
                  <Text>4 Azeitona Verde</Text>
                </Box>
                <Flex justify="center" align="center" bg={'#F3F3F3'} w="100%" h="15%" borderBottomLeftRadius="5px" borderBottomRightRadius="5px">
                  <Text fontWeight="semibold">Ver mais{<Icon name="chevron-right" />}</Text>
                </Flex>
              </Box>
            </Grid>
          </Box>
        </Stack>

      </Flex>
      <Footer />
    </div>
  );
}

export default Atividades;