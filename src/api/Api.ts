import axios from "axios";

const instance = axios.create({
  baseURL: 'https://fakestoreapi.com'
});

export async function productsData() {
  const products = await instance.get('/products', { headers: { 'Access-Control-Allow-Origin': '*' } });
  return products
}

const instancePay = axios.create({
  baseURL: 'https://server-e-commerce-5m8o.onrender.com'
});

export async function payForProductsData(data: { id: string, quantity: number, price: number, name: string }[]) {
  await instancePay.post('/create-checkout-session', { items: data })
    .then(res => {
      if (res.data) return res;
      return res.data.then((err: unknown) => Promise.reject(err))
    }).then((res) => {
      window.location = res.data.url
    }).catch(err => {
      console.error(err.error)
    })

}