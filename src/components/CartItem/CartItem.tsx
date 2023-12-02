import React from "react";
import { IProduct, deleteItem } from "../../../src/redux/productSlice";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { incrementQuantity, decrementQuantity } from "../../../src/redux/productSlice";

interface ICartItem {
    item: IProduct
}

const CartItem: React.FC<ICartItem> = ({ item }) => {
    const dispatch = useDispatch();

    const handleRemoveItem = (id: string, title: string) => {
        dispatch(deleteItem({ id: id }))
        toast.error(`${title.substring(0, 15)} is deleted`)
    }

    const handleIncreaseQuantity = (item: IProduct) => {
        dispatch(incrementQuantity({
            id: item.id,
            title: item.title,
            image: item.image,
            price: item.price,
            quantity: 1,
            description: item.description
        }))
    }
    const handleDecreaseQuantity = (item: IProduct) => {
        dispatch(decrementQuantity({
            id: item.id,
            title: item.title,
            image: item.image,
            price: item.price,
            quantity: 1,
            description: item.description
        }))
    }

    return (
        <>
            <div className="flex items-center gap-2">
                <span onClick={() => handleRemoveItem(item.id, item.title)} className="cursor-pointer"><AiOutlineClose /></span>
                <img className="w-32 h-32 object-cover" src={item.image} alt='productImg' />

            </div>
            <h2 className="w-52">{item.title}</h2>
            <p className="w-10">${item.price}</p>

            <div className="w-52 flex items-center justify-between gap-4 text-gray-500 border p-3">
                <p className="text-sm">Quantity</p>
                <div className="flex items-center gap-4 text-sm font-semibold">
                    <button onClick={() => handleDecreaseQuantity(item)} className="border h-5 font-normal text-lg flex items-center  justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-500 active:bg-black">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncreaseQuantity(item)} className="border h-5 font-normal text-lg flex items-center  justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-500 active:bg-black">+</button>
                </div>
            </div>
            <p className="w-14">${item.price * item.quantity}</p>
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
        </>
    )
}

export default CartItem;