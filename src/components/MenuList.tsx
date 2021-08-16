import React, { useEffect, useState } from 'react'
import { List, ListItem } from "@chakra-ui/react";

import { Link } from 'react-router-dom';
import { api } from '../services/api';
// import { FcViewDetails, FcHome, FcManager } from 'react-icons/fc';


interface ICategory {
  name: string;
  slug: string;
}

export function MenuList() {
  const [category, setCategory] = useState<ICategory[]>([]);

  useEffect(() => {
    async function fecthMenu() {
      const { data } = await api.get('/categories');
      setCategory(data)
    }

    fecthMenu();
  }, [])
  return (
    <List
      mt="2"
      spacing={3}
      display="flex"
      h="80%"
      w="100%"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      px="2"
    >
      <ListItem >
        <Link
          to="/"
        >Todas</Link>
      </ListItem>
      {category.map(cat => {
        return (
          <ListItem key={cat.slug}>
            <Link
              to={'/'}
            >{cat.name}</Link>
          </ListItem>
        )
      })}
    </List>
  )
}
