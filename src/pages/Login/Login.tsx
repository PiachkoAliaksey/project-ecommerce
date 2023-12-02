import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../redux/store";
import { removeUser, addUser } from "../../redux/productSlice";
import { FcGoogle } from "react-icons/fc";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";



const Login: React.FC = () => {
    const userInfo = useSelector((state: RootState) => state.products.userInfo);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const handlerGoogleAuth = (e: React.SyntheticEvent) => {
        e.preventDefault();
        signInWithPopup(auth, provider)
            .then((result) => {
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential && credential.accessToken;
                const user = result.user;
                dispatch(addUser({
                    _id: user.uid,
                    name: user.displayName,
                    email: user.email,
                    image: user.photoURL
                }))
                setTimeout(() => {
                    navigate('/')
                }, 1500)
            }).catch((error) => {
                const errorCode = error.code;
                console.log(errorCode)
                // const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }
    const handlerSignOut = (e: React.SyntheticEvent) => {
        e.preventDefault();
        signOut(auth)
            .then(() => {
                toast.success('log out successfully');
                dispatch(removeUser())
            }).catch((error) => {
                const errorCode = error.code;
                console.log(errorCode)
            });
    }

    return (
        <section className="w-full flex flex-col items-center justify-center gap-16 my-5 py-20">
            {/* <div className="w-full flex items-center justify-center gap-10">
                <div className="w-60 h-12 text-base tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
                    <AiFillGithub className='text-2xl' />
                    <span className="text-sm text-gray-900">Sign in</span>
                </div>
                <button className="bg-black flex text-white py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300"><AiFillGithub className='text-2xl' />Sign Out</button>
            </div> */}
            <div className="w-full flex items-center justify-center gap-10">

                {userInfo ? (<button onClick={(e) => handlerSignOut(e)} className="bg-black flex text-white py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300"><FcGoogle className='text-2xl' /> Sign Out</button>) : (<div onClick={(e) => handlerGoogleAuth(e)} className="w-60 h-12 text-base tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
                    <FcGoogle className='text-2xl' />
                    <span className="text-sm text-gray-900">Sign in</span>
                </div>)}



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
        </section>
    )
}

export default Login;