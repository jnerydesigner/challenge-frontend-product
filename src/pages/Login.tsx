import { Box, GridItem, Image } from '@chakra-ui/react'
import { MenuEsquerdo } from '../components/MenuEsquerdo'
import { useRouteMatch } from 'react-router-dom'
import { Form } from '../components/Form';
import Logo from '../assets/dynamox-logo.svg';

export function Login() {
  const { path } = useRouteMatch();
  return (
    <>
      {path === '/login' ? '' : <MenuEsquerdo />}

      <GridItem
        colSpan={5}
        rowSpan={2}
        h="86vh"
        w="100%"
        bg="burgundy.700"
        display="flex"
        justifyContent="center"
        alignItems="center"

      >
        <Box
          w="40%"
          bg="burgundy.200"
          borderRadius="8px"
          p="4"
        >
          <Image
            mx="auto"
            boxSize="130px"
            objectFit="contain"
            src={Logo}
            alt="Logo Dynamox"
          />
          <Form />
        </Box>
      </GridItem>
    </>

  )
}
