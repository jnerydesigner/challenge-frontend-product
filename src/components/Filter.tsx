import Logo from '../assets/dynamox-logo.svg';
import { Box, Heading, Image, GridItem } from '@chakra-ui/react';

export function Filter() {
  return (
    <GridItem
      colSpan={4}
    >
      <Box
        mx="auto"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        h="60px"
        bg="burgundy.200"
        p="4"
      >

        <Image
          boxSize="100px"
          objectFit="contain"
          src={Logo}
          alt={Logo}
        />

        <Heading>Logo aqui</Heading>
      </Box>


    </GridItem>
  )
}
