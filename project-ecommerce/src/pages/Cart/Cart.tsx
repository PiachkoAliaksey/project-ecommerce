import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../redux/store';
import CartItem from "../../components/CartItem/CartItem";
import { resetCart } from "../../redux/ProductSlice";
import { Link } from "react-router-dom";

const Cart = () => {
    const productData = useSelector((state: RootState) => state.products.productData);
    const dispatch = useDispatch();

    const handleResetCart = () => {
        dispatch(resetCart());
    }

    return (
        <section>
            {productData.length > 0 ? (<><img className="w-full h-60 object-cover" src='https://images.unsplash.com/15/leaf.JPG?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='photo' />
                <article className="max-w-screen-xl mx-auto py-20 flex items-center">
                    <ul className="w-2/3 p-10">
                        {productData.map((item) => <li className="flex gap-4 items-center justify-between mt-6" key={item.id}><CartItem item={item} /></li>)}

                        {productData.length > 0 && <button onClick={() => handleResetCart()} className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300">Reset Cart</button>}
                        <Link to='/'>
                            <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">Back to shopping</button>
                        </Link>
                    </ul>
                    <div className="w-1/3 bg-slate-200 py-6 px-4">
                        <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
                            <h2 className="text-2xl font-medium capitalize">cart totals</h2>
                            <p className="flex items-center gap-4 text-base">
                                Subtotal{""}
                                <span className="font-bold text-lg">${productData.length > 0 ? productData.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0) : 0}</span>
                            </p>
                            <p className="flex items-center gap-4 text-base">
                                Shipping{""}
                                <span className="">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                            </p>
                        </div>
                        <p className="font-semibold  flex justify-between mt-6">
                            Total
                            <span className="text-xl  font-bold">${productData.length > 0 ? productData.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0) : 0}</span>
                        </p>
                        <button className="text-base text-white bg-black  w-full py-3 mt-6 hover:bg-gray-800 duration-500 active:bg-orange-500">proceed to checkout</button>
                    </div>

                </article></>) : (<article className="flex flex-initial flex-col items-center justify-center">

                    <img className="w-full h-60 object-cover" src='https://images.unsplash.com/15/leaf.JPG?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='photo' />
                    <div className="m-10 flex flex-col items-center justify-center">
                        <h2 className=" text-red-700">Your cart is empty. Please go back to shopping</h2>
                        <Link to='/'>
                            <button className="flex items-center gap-1 text-gray-400 hover:text-black duration-300">Back to shopping</button>
                        </Link>
                    </div>
                </article>)}



        </section>
    )
}

export default Cart;