import React from 'react';
import {
    Flex, Stack, Image, Text, Input, Link, Divider,
    Button
} from '@chakra-ui/core';

import { ReactComponent as Logo } from '../../images/logo.svg';
import loginIcon from '../../images/login_icon.png';
import facebookIcon from '../../images/facebook_icon.png';
import gmailIcon from '../../images/gmail_icon.png';

const Login = () => {
    return (
        <Flex bg='#74BFE9' height='100vh' justifyContent='center' alignItems='center' flexDir='column'>
            <Logo />
            <Flex width='650px' height='550px' marginTop='5rem' padding='3rem' bg='white' flexDir='column' justifyContent='space-between' alignItems='center' >
                <Stack isInline>
                    <Image src={loginIcon} alt='Ícone entrar' />
                    <Text>Entrar</Text>
                </Stack>
                <Stack isInline justify='space-around'>
                    <Link href="https://www.facebook.com" target='_blank'>
                        <Image src={facebookIcon} alt='Ícone Facebook' />
                    </Link>
                    <Link href="https://gmail.com" target='_blank' marginLeft='1rem'>
                        <Image src={gmailIcon} alt='Ícone Gmail' />
                    </Link>
                </Stack>
                <Stack isInline align='center'>
                    <Divider borderColor='#111111' w='150px' />
                    <Text textTransform='uppercase'>ou</Text>
                    <Divider borderColor='#111111' w='150px' />
                </Stack>
                <Stack>
                    <Input placeholder='Email' width='25rem' />
                    <Input placeholder='Senha' />
                    <Flex flexDir='column' marginTop='1rem'>
                        <Link href='https://www.google.com' target='_blank' color='#74BFE9' >Esqueceu a senha ?</Link>
                        <Button bg='#74BFE9' color='white'>Entrar</Button>
                    </Flex>
                    <Link textAlign='center' href='https://www.google.com' target='_blank' color='#74BFE9' >Criar uma conta</Link>
                </Stack>
            </Flex>
        </Flex>
    );
}

export default Login;