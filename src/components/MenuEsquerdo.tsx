import { Box, Heading, GridItem } from '@chakra-ui/react';
import { MenuList } from './MenuList';

export function MenuEsquerdo() {
  return (
    <GridItem
      rowSpan={2}
      colSpan={1}
      bg="burgundy.400"
    >
      <Heading as="h4" size="md" mx="auto" width="100%" p="2">Menu de Categorias</Heading>
      <Box
        mx="auto"
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        w="100%"
        h="80vh"
        bg="burgundy.400"
        border="0"
        overflow="hidden"
      >

        <MenuList />
      </Box>


    </GridItem>
  )
}
