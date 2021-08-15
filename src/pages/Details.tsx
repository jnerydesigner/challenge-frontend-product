import { GridItem } from '@chakra-ui/react'
import { MenuEsquerdo } from '../components/MenuEsquerdo'
import { Products } from '../components/Products'

export function Details() {
  return (
    <>
      <MenuEsquerdo />
      <GridItem
        colSpan={4}
        bg="burgundy.700"
        padding="2"
      >
        <Products />
      </GridItem>
    </>

  )
}
