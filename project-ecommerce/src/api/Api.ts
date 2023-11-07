import axios from "axios";

const instance = axios.create({
    baseURL: 'https://fakestoreapi.com'
  });

export async function productsData() {
    const products = await instance.get('/products');
    return products
}