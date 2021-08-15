import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useToast } from '../hooks/ToastContext'
import { FcCamera } from 'react-icons/fc';


import {
  FormLabel,
  Input,
  Button,
  Image,
  Heading
} from "@chakra-ui/react"
import { api } from '../services/api';

interface IProduct {
  id: number;
  name: string;
  manufacturingDate: string;
  expirationDate: string;
  perishableProduct: string;
  price: string;
  categoryId: number;
  imageProduct: string;
}

interface ParamTypes {
  id: string | undefined;
}
export function FormUploadProduct() {
  const { id } = useParams<ParamTypes>();

  const [product, setProduct] = useState<IProduct>({} as IProduct);

  const { addToast } = useToast();


  useEffect(() => {
    async function fecthProduct() {
      const { data } = await api.get(`/products/${id}`);
      setProduct(data)
      console.log(data)
    }

    fecthProduct();
  }, [id])

  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        console.log(e.target.files[0])
        const data = new FormData();

        data.append('productImage', e.target.files[0]);

        api.patch(`products/image/${product.id}`, data).then(response => {
          setProduct(response.data);

          addToast({
            type: 'success',
            title: 'Produto atualizado!',
            description: "Image Atualizada com sucesso"
          });
        });
      }
    },
    [addToast, product.id],
  );

  return (
    <>
      <Heading mb="4" color="burgundy.400" textAlign="center">{product.name}</Heading>

      <Image
        src={product.imageProduct}
        alt="Guaraná"
        w="300px"
        mx="auto"
        objectFit="contain"
      />
      <form>

        <FormLabel
          htmlFor="imageProductFile"
          w="70px"
          h="70px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mx="auto"
          mt="10px"
          cursor="pointer"
        >
          <FcCamera size={26} />
          <Input
            display="none"
            id="imageProductFile"
            type="file"
            onChange={handleAvatarChange}
          />
        </FormLabel>
      </form>
    </>
  )
}
