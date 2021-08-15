import React from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react"

export function Form() {
  return (
    <>
      <FormControl id="email">
        <FormLabel color="burgundy.700">Email</FormLabel>
        <Input type="email" bg="gray.50" />
        <FormLabel color="burgundy.700">Password</FormLabel>
        <Input type="password" bg="gray.50" />
      </FormControl>
      <Button colorScheme="burgundy" my="4" w="100%">Acessar Sistema</Button>
    </>
  )
}
