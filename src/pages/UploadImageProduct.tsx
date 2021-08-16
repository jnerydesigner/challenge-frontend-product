import { Box, GridItem } from '@chakra-ui/react'
import { FormUploadProduct } from '../components/FormUploadProduct'
import { MenuEsquerdo } from '../components/MenuEsquerdo'

export function UploadImageProduct() {
  return (
    <>
      <MenuEsquerdo />
      <GridItem
        colSpan={4}
        bg="burgundy.700"
        padding="2"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          w="50%"
          border="2px solid burgundy.400"
          padding="5"
          borderRadius="4"
          bg="burgundy.200"
        >

          <FormUploadProduct />
        </Box>
      </GridItem>
    </>

  )
}
