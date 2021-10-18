/* eslint-disable no-undef */

import requests from 'services/httpService';

class ProductsService{

  getProducts():Promise<any>{
   return requests.get('/allProducts')
  }

  addProduct(body:{}):Promise<any>{
    return requests.post('/addProduct', body)
  }

  getProductsById(id:string):Promise<any>{
    return requests.get(`/product/${id}`)
  }
}

export default new ProductsService;