import React from "react";
import shoppingBag from '../../assets/shopping-bag.png';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';


const Header: React.FC = () => {
    const productData = useSelector((state: RootState) => state.products.productData);
    const userInfo = useSelector((state: RootState) => state.products.userInfo);
    console.log(productData)
    return (
        <section className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 flex items-center sticky top-0 z-50  ">
            <div className="max-w-screen-x1 h-full mx-auto flex items-center justify-between">
                <Link to='/'>
                    <h1 className="font-eczar font-bold text-5xl hover:text-stone-400 cursor-pointer duration-300">E-Commerce</h1>
                </Link>
            </div>


            <div className="max-w-screen-x1 h-full mx-auto flex items-center">
                <ul className="flex items-center justify-between gap-8 mr-5">
                    {['Home'].map((item, index) => {
                        return <li className="text-base text-black font-bold hover:text-stone-400 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300" key={index}>{item}</li>
                    })}
                </ul>
                <Link to='/cart'>
                    <div className="relative mr-5">
                        <img className="block w-11 " src={shoppingBag} alt='Shopping-bag' />
                        <span className="absolute w-5 top-6 left-6 border-b-[1px] rounded-full bg-yellow-300 text-sm flex items-center justify-center font-semibold" >{productData.reduce((acc, curr) => acc + curr.quantity, 0)}</span>
                    </div>
                </Link>
                <Link to='/login'>
                    {userInfo?(<h3 className="text-bold text-black font-bold hover:text-stone-400 cursor-pointer duration-300">Log Out</h3>):(<h3 className="text-bold text-black font-bold hover:text-stone-400 cursor-pointer duration-300">Login</h3>)}
                    
                </Link>
                {
                    userInfo&&<p className='text-base font-semibold underline-offset-2 ml-5' >Welcome, {userInfo.name}!</p>
                }

            </div>

        </section>)

}

export default Header;