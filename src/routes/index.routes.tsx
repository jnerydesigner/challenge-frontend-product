

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { CadastroDeProduto } from '../pages/CadastroDeProduto'
import { Details } from '../pages/Details'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { UploadImageProduct } from '../pages/UploadImageProduct'

export function Routes() {
  return (
    <Switch>
      <Route path="/details">
        <Details />
      </Route>
      <Route path="/cad-product">
        <CadastroDeProduto />
      </Route>
      <Route path="/image-product/:id">
        <UploadImageProduct />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )
}
