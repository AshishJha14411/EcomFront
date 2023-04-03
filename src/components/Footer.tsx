import React from 'react'
import logo from '../assets/logo.png'
const Footer = () => {
    return (
        <div className='bg-[#252525] text-[#ffffff] text-center'>
            <div className="">
                <div className="">
                    <div className="footer_logo"><a href="index.html"><img src={logo} className='w-[10rem] mx-auto pt-[5rem] pb-7' /></a></div>
                    <div className="flex flex-row justify-between m-4">
                        <input type="text" className="bg-[#252525] text-[#ffffff] font-semibold" placeholder="Your Email" name="Your Email" />
                        <span className="font-bold text-[#e35a38] hover:text-[#ffffff]" id="basic-addon2"><a href="#">SUBSCRIBE</a></span>
                    </div>
                    <div className="footer_menu  border-t-2 border-b-2 p-5">
                        <ul className='flex flex-col content'>
                            <li className='p-2 hover:text-[#e35a38]'><a href="#">Best Sellers</a></li>
                            <li className='p-2  hover:text-[#e35a38]'><a href="#">Gift Ideas</a></li>
                            <li className='p-2  hover:text-[#e35a38]'><a href="#">New Releases</a></li>
                            <li className='p-2 hover:text-[#e35a38]'><a href="#">Today's Deals</a></li>
                            <li className='p-2 hover:text-[#e35a38]'><a href="#">Customer Service</a></li>
                        </ul>
                    <div className="location_main">Help Line  Number : <a href="#" className='text-[#e35a38]'>+99 3256 8547 6595 2541</a></div>
                    </div>
                </div>
            </div>
            <div className="copyright_section">
                <div className="container">
                    <p className="copyright_text">© 2023 All Rights Reserved. Developed by <a href="https://html.design">Ashish Kr Jha</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer