import logo from '../../assets/logo/Frame 70.svg'
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { Link } from 'react-router-dom';
import playStore from '../../assets/Footer/image 33.svg'
import appleStore from '../../assets/Footer/image 34.svg'



const Footer = () => {
    return (
        <div className=" bg-[#121212] mt-12">
            <div className=" max-w-11/12 mx-auto py-16">
            <div className=" grid grid-cols-4 gap-12">
                {/* 1st col */}
                <div >
                   <img className=' w-20 md:w-40' src={logo}></img>
                   <p className=' text-[#DADADA] mt-8 font-medium'>Discover premium lifestyle and tech products, all in one place. 
                    Shop smart with ShopEase.</p>
                    <div className=' flex gap-4 text-[#DADADA] mt-8'>
                        <CiFacebook className=' w-8 h-8'></CiFacebook>
                        <CiInstagram className=' w-8 h-8'></CiInstagram>
                        <CiYoutube className=' w-8 h-8'></CiYoutube>
                        <CiTwitter className=' w-8 h-8'></CiTwitter>

                    </div>
                </div>
                {/* 2nd col */}
                <div className='ml-12'>
                   <h1 className=' font-medium text-xl md:text-2xl text-[#DADADA]'>Categories</h1>
                   <div className=' flex flex-col gap-2 text-[#DADADA] mt-4'>
                    <Link>Mobile Devices</Link>
                    <Link>Smart Watches</Link>
                    <Link>Headphones</Link>
                    <Link>PC & Laptops</Link>
                   </div>
                </div>
                {/* 3rd col */}
                <div>
                  <h1 className=' font-medium text-xl md:text-2xl text-white'>Customer Service</h1>
                      <div className=' flex flex-col gap-2 text-[#DADADA] mt-4'>
                    <Link>FAQs</Link>
                    <Link>Shipping & Returns</Link>
                    <Link>Contact Us</Link>
                   </div>
                </div>
                {/* 4th col */}
                <div>
                    <h1 className=' font-medium text-xl md:text-2xl text-white'>Policy</h1>
                        <div className=' flex flex-col gap-2 text-[#DADADA] mt-4'>
                    <Link>Privacy & Policy</Link>
                    <Link>Terms & Conditions</Link>
                    <Link>Others</Link>
                   </div>
                </div>

            </div>
                {/* divider */}
              <div class="w-full h-px bg-[#383838] my-6"></div>


              {/* 2nd grid */}
                   <div className=" grid grid-cols-3 ">
                {/* 1st col */}
                <div >
                    <h1 className=' font-medium text-xl md:text-2xl text-white'>Download Our App</h1>
                   
                    <div className=' flex flex-col gap-4 text-[#DADADA] mt-8 '>
                        <img src={playStore} className=' h-20 w-64'/>
                         <img src={appleStore} className=' h-20 w-64'/>

                    </div>
                </div>
                {/* 2nd col */}
                <div >
                   <h1 className=' font-medium text-xl md:text-2xl text-[#DADADA]'>Our Shops</h1>
                   <div className=' flex flex-col  text-[#DADADA] mt-4'>
                    <p>ShopEase Dhaka Outlet</p>
                    <p>Bashundhara City Shopping Complex, Level 3</p>
                    <p className="mt-8">📞 +880 1711-123456</p>
                   </div>
                </div>
                {/* 3rd col */}
                <div>
                  <h1 className=' font-medium text-xl md:text-2xl text-white'>Outlet</h1>
                     <div className=' flex flex-col  text-[#DADADA] mt-4'>
                    <p>ShopEase Dhaka Outlet</p>
                    <p>Bashundhara City Shopping Complex, Level 3</p>
                    <p className="mt-8">📞 +880 1711-123456</p>
                   </div>
                </div>
               

            </div>
                     

               {/* divider */}
              <div class="w-full h-px bg-[#383838] my-6"></div>

              <p className=' text-[#DADADA] text-center font-medium'>© 2025 ShopEase. All rights reserved.</p>
            




            </div>
             </div>
    );
};

export default Footer;