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
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/add-product" component={ProductCreate} />
        <Route exact path="/products/:id/edit" component={ProductEdit} />
        <Route exact path="/products/:id" component={ProductDetail} />
      </Switch>
    </div>
  )
}

export default App