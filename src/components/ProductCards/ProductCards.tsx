import React from "react";
import { IProduct } from "../../../src/redux/productSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../src/redux/productSlice';
import { ToastContainer, toast } from 'react-toastify';

interface IProd {
    product: IProduct,
}

const ProductCards: React.FC<IProd> = ({ product }) => {
    const dispatch = useDispatch();

    const navigate = useNavigate()
    const _id = product.title;

    const idString = (_id: string) => {
        return String(_id).toLocaleLowerCase().split(' ').join('')
    }
    const rootId = idString(_id);

    const handleFullDetails = () => {
        navigate(`/product/${rootId}`, {
            state: {
                item: product
            }
        })

    }

    const handleDispatchProduct = () => {
        product && dispatch(addToCart({
            id: product.id,
            title: product.title,
            image: product.image,
            price: product.price,
            quantity: 1,
            description: product.description,
            category:product.category,
            rating:{
                rate:product.rating.rate,
                count:product.rating.count
            }
        }))
        toast.success(`${product.title.substring(0, 15)} is added`)
    }
    return (
        <li className="group">
            <div onClick={handleFullDetails} className="w-full h-96 cursor-pointer overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 duration-500" src={product.image} alt='prodImg' />

            </div>
            <div className="w-full border-[1px] px-2 py-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="font-bold text-base">{product.title.substring(0, 15)}</h3>
                    </div>
                    <div className="flex gap-2 relative overflow-hidden">
                        <div className="text-sm w-24 flex justify-end group-hover:translate-x-24 transition-transform  duration-500">
                            <span>${product.price}</span>
                        </div>
                        <p onClick={() => handleDispatchProduct()} className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500">add to cart</p>
                    </div>

                </div>

                <div>
                    <p>{product.category}</p>
                </div>
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
        </li>
    )
}

export default ProductCards;