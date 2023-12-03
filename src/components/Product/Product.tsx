import React, { useEffect, useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import { useLocation } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { addToCart } from "../../../src/redux/productSlice";
import { ToastContainer, toast } from 'react-toastify';
import { IProduct } from "../../../src/redux/productSlice";



const Product: React.FC = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const [fullDetailsCard, setFullDetailsCard] = useState<IProduct | null>(null);
    const [quantityProduct, setQuantityProduct] = useState(1);
    

    const handleIncreaseQuantity = () => {
        setQuantityProduct(prev => prev + 1)
    }

    const handleDecreaseQuantity = () => {
        setQuantityProduct(prev => prev === 1 ? 1 : prev - 1)
    }

    const handleDispatchQuantity = (item: IProduct | null) => {
        item && dispatch(addToCart({
            id: item.id,
            title: item.title,
            image: item.image,
            price: item.price,
            quantity: quantityProduct,
            description: item.description,
            category: item.description,
            rating: {
                rate: item.rating.rate,
                count: item.rating.count
            }
        }))
        toast.success(`${fullDetailsCard!.title.substring(0, 15)} is added (${quantityProduct} pcs)`)
    }

    useEffect(() => {
        setFullDetailsCard(location.state.item);
    }, [])

    return (
        <section className="max-w-screen-xl mx-auto my-10 flex gap-10">
            {fullDetailsCard && <>
                <div className="w-2/5">
                    <div >

                        <img className="h-[350px] object-cover" src={fullDetailsCard.image} />
                    </div>

                </div>


                <div className="w-3/5 flex flex-col justify-center gap-12">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-4xl font-semibold">{fullDetailsCard.title}</h2>
                        <p className="text-2xl font-medium text-grey-900">${fullDetailsCard.price}</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="flex gap-1 text-semibold">
                            {[...new Array(5)].map((_, index) => {
                                if (index <= Math.floor(+fullDetailsCard.rating.rate)) {
                                    return <AiFillStar key={uuidv4()} style={{ color: 'yellow' }} />
                                }
                                return <AiFillStar style={{ color: 'darkgrey' }} />
                            })}
                        </div>
                        <p>({fullDetailsCard.rating.count} customer review)</p>
                    </div>
                    <p className="text-base text-gray-500 -mt-3">{fullDetailsCard.description}</p>
                    <div className="flex items-center gap-2">
                        <div className="w-52 flex items-center justify-between gap-4 text-gray-500 border p-3">
                            <p className="text-sm">Quantity</p>
                            <div className="flex items-center gap-4 text-sm font-semibold">
                                <button onClick={() => handleDecreaseQuantity()} className="border h-5 font-normal text-lg flex items-center  justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-500 active:bg-black">-</button>
                                <span>{quantityProduct}</span>
                                <button onClick={() => handleIncreaseQuantity()} className="border h-5 font-normal text-lg flex items-center  justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-500 active:bg-black">+</button>
                            </div>
                        </div>
                        <button onClick={() => handleDispatchQuantity(fullDetailsCard)} className="bg-black text-white py-3 px-6 active:bg-gray-800">Add to cart</button>
                    </div>
                    <p className="text-base text-gray-500">Category: <span className="font-medium capitalize">{fullDetailsCard!.category}</span></p>

                </div>
                <ToastContainer
                    position="top-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </>}
        </section>
    )
}

export default Product;