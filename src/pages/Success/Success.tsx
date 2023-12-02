import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { resetCart } from "../../redux/productSlice";

const Success: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetCart());
    }, [])


    return (
        <section className="w-full flex flex-col items-center justify-center gap-16 py-20">
            <h2 className="text-3xl">
                Payment was successful!
                Thank's for choose us.
            </h2>
            <Link to='/'>
                <button className="flex items-center gap-1 text-gray-400 hover:text-black duration-300">Back to shopping</button>
            </Link>
        </section>
    )
}

export default Success;