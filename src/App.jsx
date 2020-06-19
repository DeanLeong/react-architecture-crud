import React from 'react'
import './App.css'
import Home from './components/Home/Home'
import Products from './screens/Products/Products'
import ProductCreate from './components/ProductCreate/ProductCreate'
import ProductEdit from './components/ProductEdit/ProductEdit'
import ProductDetail from './screens/ProductDetail/ProductDetail'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" render={props => <Home />} />
        <Route exact path="/products" render={props => <Products />} />
        <Route exact path="/add-product" render={props => <ProductCreate />} />
        <Route exact path="/products/:id/edit" component={ProductEdit} />
        <Route exact path="/products/:id" component={ProductDetail} />
      </Switch>
    </div>
  )
}

export default App