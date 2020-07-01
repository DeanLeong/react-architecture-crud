![](https://git.generalassemb.ly/bruno/assets/blob/master/products-localStorage.gif)

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) SOFTWARE ENGINEERING IMMERSIVE

## Getting Started

1. Fork
2. Clone

## Learning Objectives

By the end of this, developers should be able to:

- understand what CRUD is
- build CRUD in react

## React - CRUD

CRUD stands for (C)reate, (R)ead, (U)pdate, and (D)elete. 

### CRUD is a concept!

Most modern web applications now adays have some resource or thing that we want to perform "CRUD" operations on. In our product app, we have the ability to (c)reate new products, (u)pdate or edit a specific product, (r)ead or see all products or an individual product, and the ability to (d)elete a product. CRUD is a core **concept** that is built into most applications we build so it is essential as developers to learn how to implement it on a programmatic level.

## (C)reate

In our app we implement the ability to (C)reate new products in the `ProductCreate` component which uses the `createProduct()` service.

![](https://git.generalassemb.ly/bruno/assets/blob/master/ProductCreate.gif)

The `ProductCreate` component is a react form that user's can fill out. We then take that data and call `createProduct()` which is an axios post request to the API. The API responds with the newly created product.


src/services/products.js
```js
export const createProduct = async product => {
  try {
    const response = await axios.post(`${apiUrl}/products`, product)
    return response.data
  } catch (error) {
    throw error
  }
}
```

## (R)ead

The Products component shows all the products. This is the (R)ead in CRUD.

![](https://git.generalassemb.ly/bruno/assets/blob/master/Products.gif)

When we show all the products on the products screen via the Products component (Products.jsx) we call the `getProducts()` service which is an axios request to the API. The response from the API is an array with all the products.

src/services/products.js
```js
export const getProducts = async () => {
  try {
    const response = await axios(`${apiUrl}/products`)
    const products = response.data
    return products
  } catch (error) {
    throw error
  }
}
```

When we click on a specific product we see that specific product (ProductDetail.jsx). The `ProductDetail` component makes a call to the `getProduct()` service passing in the id of the specific product it wants to see. The `getProduct()` service makes an axios call to the API with the specific id of the product it wants back. The API responds with the specific product.

src/services/products.js
```js
export const getProduct = async id => {
  try {
    const response = await axios(`${apiUrl}/products/${id}`)
    const product = response.data
    return product
  } catch (error) {
    throw error
  }
}
```

## Conclusion

Don't get to caught up with the concept of CRUD (it will come with time), at the end of the day we're just teaching you how to build the following in react:

- the ability to create a new product
- the ability to read a product or products (this one was already covered in a previous lesson)
- the ability to edit a product
- the ability to delete a product
