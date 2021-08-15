import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Select
} from "@chakra-ui/react"
import { api } from '../services/api';
import { useToast } from '../hooks/ToastContext';

interface ICategory {
  id: number;
  name: string;
  slug: string;
}

type Inputs = {
  name: string,
  manufacturingDate: string,
  expirationDate: string,
  perishableProduct: string,
  price: string,
  categoryId: number,
};

const schema = yup.object().shape({
  name: yup.string().required("Nome do Produto é obrigatório"),
  manufacturingDate: yup.string().required("Data de Fabricação do Produto é obrigatório"),
  expirationDate: yup.string().required("Data de Validade do Produto é obrigatório"),
  price: yup.string().required("Preço do Produto é obrigatório")
});

export function FormProducts() {
  const { addToast } = useToast();
  const [category, setCategory] = useState<ICategory[]>([]);

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });
  const onSubmit: SubmitHandler<Inputs> = data => {
    const product = {
      ...data,
      manufacturingDate: new Date(data.manufacturingDate).toISOString(),
      expirationDate: new Date(data.expirationDate).toISOString(),
      perishableProduct: false
    }
    api.post('/products', product).then(response => {
      addToast({
        type: 'success',
        title: "Produto Inserido",
        description: "Você inseriu os produtos com sucesso."
      })
    });
  };

  useEffect(() => {
    async function fecthMenu() {
      const { data } = await api.get('/categories');
      setCategory(data)
    }

    fecthMenu();
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl id="email">
          <FormLabel color="burgundy.900">Nome do Produto</FormLabel>
          <Input defaultValue="" type="text" bg="gray.50" placeholder="Preencha o nome do produto" mb="2" {...register("name")} />
          <p>{errors.name?.message}</p>
          <FormLabel color="burgundy.900">Data de Fabricação</FormLabel>
          <Input defaultValue="" type="date" bg="gray.50" placeholder="00/00/0000" mb="2" {...register("manufacturingDate")} />
          <p>{errors.manufacturingDate?.message}</p>
          <FormLabel color="burgundy.900">Data de Validade</FormLabel>
          <Input defaultValue="" type="date" bg="gray.50" placeholder="00/00/0000" mb="2" {...register("expirationDate")} />
          <p>{errors.expirationDate?.message}</p>
          <FormLabel color="burgundy.900">Preço</FormLabel>
          <Input defaultValue="" type="number" bg="gray.50" placeholder="00,00" mb="2" {...register("price")} />
          <p>{errors.price?.message}</p>
        </FormControl>


        <Select defaultValue="" placeholder="Selecione uma categoria" bg="gray.50" {...register("categoryId")} >
          {category.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
        </Select>

        <Button type="submit" colorScheme="burgundy" my="4" w="100%">Cadastrar Produto</Button>
      </form>
    </>
  )
}
