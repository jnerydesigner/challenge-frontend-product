import { Box, GridItem, Heading } from '@chakra-ui/react'
import { FormProducts } from '../components/FormProducts'
import { MenuEsquerdo } from '../components/MenuEsquerdo'

export function CadastroDeProduto() {
  return (
    <>
      <MenuEsquerdo />
      <GridItem
        colSpan={4}
        bg="burgundy.700"
        padding="2"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Heading mr="4">Cadastro de Produtos</Heading>
        <Box
          w="50%"
          border="2px solid burgundy.400"
          padding="5"
          borderRadius="4"
          bg="burgundy.200"
        >
          <FormProducts />
        </Box>
      </GridItem>
    </>

  )
}
