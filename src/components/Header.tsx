import Logo from '../assets/dynamox-logo.svg';
import { Link } from 'react-router-dom';
import {
  Box,
  Image,
  Button,
  List,
  ListItem,

} from '@chakra-ui/react';

import { FcViewDetails, FcHome, FcManager, FcAddDatabase } from 'react-icons/fc';


export function Header() {
  return (
    <Box
      w="100%"
      h="60px"
      mb="2"
    >
      <Box
        mx="auto"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        h="60px"
        bg="burgundy.400"
        p="4"
      >

        <Image
          boxSize="100px"
          objectFit="contain"
          src={Logo}
          alt={Logo}
        />

        <List display="flex" flexDirection="row">

          <ListItem mr="2">
            <Link to="/">
              <Button rightIcon={<FcHome />}>
                Home
              </Button>
            </Link>
          </ListItem>

          <ListItem mr="2">
            <Link to="/cad-product">
              <Button rightIcon={<FcAddDatabase />}>
                Cadastrar Produto
              </Button>
            </Link>
          </ListItem>

          <ListItem mr="2">
            <Link to="/details">
              <Button alignItems="center" rightIcon={<FcViewDetails />}>
                Details
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link to="/login">
              <Button alignItems="center" rightIcon={<FcManager />}>
                Login
              </Button>
            </Link>
          </ListItem>

        </List>
      </Box>


    </Box>
  )
}
