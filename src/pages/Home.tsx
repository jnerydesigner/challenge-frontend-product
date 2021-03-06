import { GridItem } from '@chakra-ui/react'
import { MenuEsquerdo } from '../components/MenuEsquerdo'
import { Products } from '../components/Products'

export function Home() {
  return (
    <>
      <MenuEsquerdo />
      <GridItem
        colSpan={4}
        rowSpan={2}
        bg="burgundy.400"
        padding="2"
      >
        <Products />
      </GridItem>
    </>

  )
}
