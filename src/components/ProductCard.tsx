import React from 'react'
import { Box, Heading, Image, Text } from '@chakra-ui/react'
import NoImage from '../assets/no-image.png';
import { Link } from 'react-router-dom'
import { NumberFormat } from '../helper/numberFormat'
import { FcCamera } from 'react-icons/fc';


interface IProductProps {
  id?: number;
  productName: string;
  imageProduct: string;
  price: number;
}

export function ProductCard({ productName, imageProduct, price, id }: IProductProps) {
  return (
    <Box
      w="100%"
      bg="burgundy.500"
      borderRadius="3"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Link to={"/image-product/" + id}>

        {imageProduct === null ? (
          <Image
            boxSize="100%"
            h="180px"
            objectFit="cover"
            src={NoImage}
            alt="Segun Adebayo"
          />
        ) : (
          <Image
            boxSize="100%"
            h="180px"
            objectFit="cover"
            src={imageProduct}
            alt="Segun Adebayo"
          />
        )}

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="0"
          right="0"
        >
          <FcCamera size={24} />
        </Box>

      </Link>

      <Box
        w="100%"
        height="100px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >

        <Heading color="burgundy.800" as="h4" size="md" textAlign="center">
          {productName}
        </Heading>
        <Text fontSize="xs" color="burgundy.800">{NumberFormat(price)}</Text>
      </Box>

    </Box>
  )
}
