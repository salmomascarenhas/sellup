import React from 'react';
import {
    Flex, Stack, Image, Text, Input, Divider,
    Button,
    Box
} from '@chakra-ui/core';

import { Link } from 'react-router-dom';

import loginIcon from '../../images/login_icon.png';
import facebookIcon from '../../images/facebook_icon.png';
import gmailIcon from '../../images/gmail_icon.png';


const Login = () => {
    return (
        <Box bg='#74BFE9' height='100vh' display='flex' alignItems='center' flexDir='column' >

            <Flex marginTop='5rem' padding='3rem' borderRadius="15px" borderRa bg='white' flexDir='column' justifyContent='space-between' alignItems='center' >
                <Stack isInline marginBottom='1rem'>
                    <Image src={loginIcon} alt='Ícone entrar' />
                    <Text>Entrar</Text>
                </Stack>
                <Stack isInline justify='space-around' marginBottom='2rem'>
                    <Link href="https://www.facebook.com" target='_blank'>
                        <Image src={facebookIcon} alt='Ícone Facebook' />
                    </Link>
                    <Link href="https://gmail.com" target='_blank' marginLeft='1rem'>
                        <Image src={gmailIcon} alt='Ícone Gmail' />
                    </Link>
                </Stack>
                <Stack isInline align='center' marginBottom='2rem'>
                    <Divider borderColor='#111111' w='150px' />
                    <Text textTransform='uppercase'>ou</Text>
                    <Divider borderColor='#111111' w='150px' />
                </Stack>
                <Stack justifyContent >
                    <Input placeholder='Email' width='25rem' />
                    <Input placeholder='Senha' />
                    <Flex flexDir='column' marginTop='1rem'>
                        <Link href='https://www.google.com' target='_blank' color='#74BFE9' >Esqueceu a senha ?</Link>
                        <Link to="/atividades"><Button bg='#74BFE9' color='white' width='100%'>Entrar</Button></Link>
                    </Flex>
                    <Link textAlign='center' href='https://www.google.com' target='_blank' color='#74BFE9' >Criar uma conta</Link>
                </Stack>
            </Flex>
        </Box>
    );
}

export default Login;