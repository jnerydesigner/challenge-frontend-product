import { Box, Image } from '@chakra-ui/react';
import Logo from '../assets/dynamox-logo.svg';
import React from 'react'

export function Header() {
  return (
    <Box
      w="100%"
      h="60px"
    >
      <Box
        mx="auto"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        w="80%"
        h="60px"
      >
        <Box boxSize="sm">
          <Image src={Logo} alt={Logo} />
        </Box>

      </Box>


    </Box>
  )
}
