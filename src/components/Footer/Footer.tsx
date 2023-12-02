
import { FaFacebookF, FaInstagram, FaYoutube, FaHome } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { MdLocationOn } from "react-icons/md";
import { BsFillPersonFill, BsPaypal } from "react-icons/bs";


const Footer = () => {
    const data = [
        'https://util.silverscreen.by:8448/meadiaStorage/imgsite/svg/visa2.svg',
        'https://util.silverscreen.by:8448/meadiaStorage/imgsite/svg/visa1.svg',
        'https://util.silverscreen.by:8448/meadiaStorage/imgsite/svg/mastercard1.svg',
        'https://util.silverscreen.by:8448/meadiaStorage/imgsite/svg/mastercard2.svg',
        'https://util.silverscreen.by:8448/meadiaStorage/imgsite/svg/unionpay.svg',
        'https://util.silverscreen.by:8448/meadiaStorage/imgsite/svg/belcard1.svg',
        'https://util.silverscreen.by:8448/meadiaStorage/imgsite/svg/belcard2.svg',
        'https://util.silverscreen.by:8448/meadiaStorage/imgsite/svg/CRz.svg'
    ]
    const dataLocation = ['15 Parv. de la Défense, 92092 Puteaux, France', '+33 1 47 73 54 44', 'e-commerce.com'];
    const dataProfile = [[BsFillPersonFill, 'my account'], [BsPaypal, 'checkout'], [FaHome, 'order tracking'], [MdLocationOn, 'help support']]

    return (
        <section className="bg-black text-gray-400 py-20 ">
            <div className="max-w-screen-xl mx-auto grid grid-cols-4 ">
                <article className="flex flex-col gap-7">
                    <h2 className="font-eczar font-bold text-4xl text-white">E-Commerce</h2>
                    <p className="text-sm tracking-wide">Created by Piachko Aliaksei</p>
                    <ul className="flex items-center gap-1">
                        {data.map((item, index) => <li className="w-10 h-auto" key={index}><img src={item} /></li>)}
                    </ul>
                    <div className="flex items-center gap-7">
                        <a href="https://github.com/PiachkoAliaksey"><ImGithub className='text-2xl hover:text-white duration-500' /></a>
                        <a href="https://www.facebook.com/"><FaFacebookF className='text-2xl hover:text-white duration-500 ' /></a>
                        <a href="https://www.instagram.com/"><FaInstagram className='text-2xl hover:text-white duration-500' /></a>
                        <a href="https://www.youtube.com/"><FaYoutube className='text-2xl hover:text-white duration-500' /></a>
                    </div>

                </article>

                <article className="mx-10">
                    <h2 className="text-2xl font-semibold text-white mb-4">locate us</h2>
                    <ul className="flex flex-col gap-7 text-base">
                        {dataLocation.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </article>
                <article className="mx-10">
                    <h2 className="text-2xl font-semibold text-white mb-4">profile</h2>
                    <ul className="flex flex-col gap-5 text-base">
                        {dataProfile.map((item, index) => {
                            const Icon = item[0];
                            return (<li className="flex items-center gap-1 hover:text-white duration-300 cursor-pointer" key={index}>
                                <Icon />
                                {item[1]}
                            </li>)
                        })}
                    </ul>
                </article>
                <article className="flex flex-col justify-center">
                    <input className="bg-transparent border px-4 py-2 text-sm" type='text' placeholder="e-mail"/>
                    <button className="text-sm border text-white  border-t-0 hover:bg-gray-900 active:bg-white active:text-black">Subscribe</button>
                </article>

            </div>
        </section>
    )
}

export default Footer;