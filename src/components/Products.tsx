import React, { useState, useEffect } from 'react'
import { Grid } from '@chakra-ui/react'
import { ProductCard } from './ProductCard'
import { api } from '../services/api';
import { useToast } from '../hooks/ToastContext'

interface Iproduct {
  id: number,
  categoryId: number,
  name: string,
  manufacturingDate: string,
  perishableProduct: boolean,
  expirationDate: string,
  imageProduct: string,
  price: number,
}

export function Products() {
  const [product, setProduct] = useState<Iproduct[]>([]);
  const { addToast } = useToast();

  useEffect(() => {
    async function fecthProduct() {
      const { data } = await api.get('/products');
      setProduct(data.products)
    }

    fecthProduct();
  }, [addToast])
  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap={2}>
        {product.map(pro => {
          return (
            <ProductCard key={pro.id} id={pro.id} productName={pro.name} imageProduct={pro.imageProduct} price={pro.price} />
          )
        })}
      </Grid>
    </>
  )
}
