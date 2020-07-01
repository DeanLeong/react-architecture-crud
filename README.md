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

**CRUD is a concept.**

Most modern web applications now adays have some resource or thing that we want to perform "CRUD" operations on. In our product app, we have the ability to (c)reate new products, (u)pdate or edit a specific product, (r)ead or see all products or an individual product, and the ability to (d)elete a product. CRUD is a core **concept** that is built into most applications we build so it is essential as developers to learn how to implement it on a programmatic level.

## (C)reate

In our app implement the ability to (C)reate new products in the `ProductCreate` component which uses the `createProduct()` service.

The `ProductCreate` component is a react form that user's can fill out. We then take that data and call `createProduct()` which is an axios post request to the API. The API responds with the newly created product.


src/services/products.js
```
export const createProduct = async product => {
  try {
    const response = await axios.post(`${apiUrl}/products`, product)
    return response.data
  } catch (error) {
    throw error
  }
}
```
