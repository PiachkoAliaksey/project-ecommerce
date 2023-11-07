import React, { useEffect, useState } from "react";
import { useLoaderData } from 'react-router-dom'
import Banner from "../../components/Banner/Banner";
import Products from "../../components/Products/Products";

interface IProduct {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    rating: {},
    title: string
}
interface IProductsData {
    data: IProduct[],
}


const Home = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    const data = useLoaderData() as IProductsData;


    useEffect(() => {
        setProducts(data.data)

    }, [data])

    return (
        <div>
            <Banner />
            <Products products={products} />
        </div>
    )

}

export default Home;