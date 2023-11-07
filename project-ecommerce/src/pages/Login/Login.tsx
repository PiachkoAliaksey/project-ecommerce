import React, { useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";



const Login = () => {
    return (
        <section className="w-full flex flex-col items-center justify-center gap-10 py-10">
            <div className="w-full flex items-center justify-center gap-10">
                <div className="w-60 h-12 text-base tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
                    <AiFillGithub className='text-2xl' />
                    <span className="text-sm text-gray-900">Sign in</span>
                </div>
                <button className="bg-black text-white py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">Sign Out</button>
            </div>
            <div className="w-full flex items-center justify-center gap-10">
                <div className="w-60 h-12 text-base tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
                    <FcGoogle className='text-2xl' />
                    <span className="text-sm text-gray-900">Sign in</span>
                </div>
                <button className="bg-black text-white py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">Sign Out</button>

            </div>


        </section>
    )
}

export default Login;