import React, { useEffect, useState } from "react";
import { useLoaderData } from 'react-router-dom'
import Banner from "../../components/Banner/Banner";
import Products from "../../components/Products/Products";
import { IProduct } from "../../redux/productSlice";

export interface IProductsData {
    data: IProduct[],
}


const Home:React.FC = () => {
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