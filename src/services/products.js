import productsJSON from '../data/products.json'
import { v4 as uuidv4 } from 'uuid'

export const getProducts = async () => {
  const products = productsJSON
  return products
}

export const getProduct = async id => {
  const products = productsJSON
  const product = products.filter(product => product._id === id)[0]
  return product
}

export const createProduct = async product => {
  const products = productsJSON
  product._id = uuidv4()
  products.push(product)
  return products
}

export const updateProduct = async (id, product) => {
  const products = productsJSON
  const productIndex = products.findIndex(product => product._id === id)
  products[productIndex] = product
  return products
}

export const deleteProduct = async id => {
  const products = productsJSON
  const productIndex = products.findIndex(product => product._id === id)
  products.splice(productIndex, 1)
  return products
}