import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IProduct {
    id: string,
    title: string,
    image: string,
    price: number,
    quantity: number,
    description: string,
    category: string,
    rating:{
        rate:string,
        count:number
    }
}

interface IUser<T> {
    _id: T,
    name: T,
    email: T,
    image: T
}

export interface IProductsState {
    productData: IProduct[],
    userInfo: null|IUser<string>
}

const initialState: IProductsState = {
    productData: [],
    userInfo: null
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            const item = state.productData.find((item) => item.id === action.payload.id);

            if (item) {
                item.quantity += action.payload.quantity
            } else {
                state.productData.push(action.payload)
            }
        },
        deleteItem: (state, action) => {
            state.productData = state.productData.filter(item => item.id !== action.payload.id)
        },
        resetCart: (state) => {
            state.productData = []

        },
        incrementQuantity: (state, action) => {
            const item = state.productData.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity++
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.productData.find((item) => item.id === action.payload.id);
            if (item) {
                if (item.quantity === 1) {
                    item.quantity = 1
                } else item.quantity--

            }
        },
        addUser: (state, action) => {
            state.userInfo = action.payload
        },
        removeUser: (state) => {
            state.userInfo = null

        }
    },
})


export const { addToCart, deleteItem, resetCart, incrementQuantity, decrementQuantity, addUser, removeUser } = productsSlice.actions

export default productsSlice.reducer