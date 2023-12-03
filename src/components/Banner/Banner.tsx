import  { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Banner = () => {
    let data = ['https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1602810319428-019690571b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1569388330292-79cc1ec67270?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
        'https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'];

    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? (data.length - 1) : ((prev) => prev - 1));
    }

    const handleNextSlide = () => {
        setCurrentSlide(currentSlide===data.length-1?(0):((prev)=>prev+1))
    }

    
    return (
        <section className="w-full h-auto overflow-x-hidden">
            <div className="w-scree h-[650px] relative">
                <ul style={{ transform: `translateX(-${currentSlide * 100}vw)` }} className="flex h-full w-[800vw] transition-transform duration-1000">
                    {data.map((item, index) => {
                        return (<li key={index} className="w-screen h-full"><img className="object-cover w-full h-full" src={item} alt={`photo-${index}`} /></li>)
                    })}
                </ul>
                <div className="absolute w-fit left-0 right-0 mx-auto flex items-center gap-8 bottom-10">
                    <button onClick={handlePrevSlide} className="p-4 rounded-full  bg-stone-100 border-b-[1px]  hover:bg-stone-400  hover:text-white duration-300 " ><SlArrowLeft /></button>
                    <button onClick={handleNextSlide} className="p-4 rounded-full  bg-stone-100 border-b-[1px]  hover:bg-stone-400  hover:text-white duration-300 "><SlArrowRight /></button>
                </div>
            </div>

        </section>
    )
}

export default Banner