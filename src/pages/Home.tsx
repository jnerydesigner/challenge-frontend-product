import { Box, Grid } from '@chakra-ui/react'
import React from 'react'

export function Home() {
  return (
    <Box
      mx="auto"
      width="90%"
      h="100%"
      bg="burgundy.300"
    >
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
      </Grid>
    </Box>
  )
}
