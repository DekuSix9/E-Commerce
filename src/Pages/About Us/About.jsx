import bgImage from '../../assets/About/about.png'
import { FaCarRear } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { FiHeadphones } from "react-icons/fi";
import manager from '../../assets/About/manager.jpg'
import support from '../../assets/About/head-support.jpg'



const About = () => {
    return (
        <div className="  font-open ">
            
                {/* company & bg photo  */}
                <div style={{backgroundImage: `url(${bgImage})`}}
                className=' w-full h-[220px] md:h-[280px] lg:h-[350px] bg-center
                 bg-cover bg-no-repeat flex flex-col justify-center  pl-36  ' >
                    <div>
                        <h1 className=' font-bold text-xl md:text-2xl '>ABOUT US</h1>
                        <h1 className=' font-bold text-3xl md:text-4xl'>ShopEase</h1>
                        <button className=' bg-black text-white px-6 py-2.5 mt-4 md:mt-6 rounded'>CONTACT</button>
                    </div>

                </div>

                <div className=' max-w-11/12 mx-auto'>
                     {/* our story */}
                 <div className=' mt-12'>
                    <h1 className=' mb-4 font-bold text-xl md:text-2xl'>OUR STORY</h1>
                    <p className=' mb-4 font-medium'>Technology is evolving faster than ever — and we
                   believe everyone should enjoy the benefits of smart living.</p>
                   <p className=' text-gray-500 '>SmartWave Store began as a small idea among tech enthusiasts who 
                    wanted to create a reliable, honest, and customer-focused shopping destination. 
                    Instead of overwhelming customers with complicated choices, we focus on curated 
                    products, real value, and exceptional service.</p>
                    
                </div>
                 {/* why choose us */}
                <div className=' mt-16'>
                    <h1 className=' mb-4 font-bold text-xl md:text-2xl'>WHY CHOOSE US</h1>
                    <div className=' grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8'>
                        <div className=' bg-[#F8F8F8] py-8 px-8'>
                          <FaCarRear className=' h-10 w-10 text-blue-400 mb-4' />
                          <h1 className=' mb-4 font-bold text-xl'>Free Shipping</h1>
                          <p className='text-gray-500'>Enjoy fast & reliable delivery right to your doorstep on eligible orders. 
                            We make sure your gadgets reach you safe and on time.</p>

                        </div>
                        <div className=' bg-[#F8F8F8] py-8 px-8'>
                            <GrMoney className=' h-10 w-10 text-blue-400 mb-4' />
                            <h1 className=' mb-4 font-bold text-xl'>100% Money-Back Guarantee</h1>
                            <p className='text-gray-500'>Shop with confidence. If your product arrives damaged or isn't 
                                as described, we'll make it right — or refund you.</p>

                        </div>
                        <div className=' bg-[#F8F8F8] py-8 px-8'>
                            <FiHeadphones className=' h-10 w-10 text-blue-400 mb-4' />
                            <h1 className=' mb-4 font-bold text-xl'>Online Support 24/7</h1>
                            <p className='text-gray-500'>Have a question? Our support team is always ready to help with orders, 
                                product info, and after-sales assistance.</p>


                        </div>

                    </div>

                </div>
                 {/* our team */}
                   <div className='mt-20'>
                    <h1 className=' mb-10 font-bold text-xl md:text-2xl text-center'>OUR TEAM</h1>
                       <div className=' grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16  '>
                    {/* left side */}
                    <div>
                        <div className=' flex gap-4'>
                            <img src={manager} alt="Manager" className=' w-14 h-14 rounded-full  ' />
                            <div>
                                <h1 className=' font-bold text-xl'>John Smith</h1>
                                <p className=' text-gray-600 font-medium'>Senior Product Manager</p>
                            </div>
                        </div>
                        <p className=' text-gray-500 ml-22 mt-2 '>Working here has been an incredible experience. We focus on quality, 
                            honesty, and always putting our customers first.</p>

                    </div>
                    {/* right side */}
                     
                     <div>
                        <div className=' flex gap-4'>
                            <img src={support} alt="Support" className=' w-14 h-14 rounded-full ' />
                            <div>
                                <h1 className=' font-bold text-xl'>Bob Smith</h1>
                                <p className=' text-gray-600 font-medium'>Head of Customer Support</p>
                            </div>

                        </div>

                        <p className=' text-gray-500 ml-22 mt-2'>Our goal is to make tech shopping simple and enjoyable for everyone.
                            We stand behind every product we sell.</p>
                    </div>



                </div>
                   </div>
              


                </div>
                  
             
  {/* our growth   */}
               <div className=' bg-[#F8F8F8] mt-20'>
                <div className=' max-w-11/12 mx-auto '>
                <div className=' grid grid-cols-2 md:grid-cols-4 py-12  gap-8'>
                    {/* 1st grid */}
                    <div>
                        <h1 className=' text-blue-500 text-4xl font-black'>200+</h1>
                        <p className=' font-medium text-gray-500 '>Happy Customers</p>
                    </div>
                    {/* 2nd grid */}
                    <div>
                      <h1 className=' text-blue-500 text-4xl font-black'>1800+</h1>
                        <p className=' font-medium text-gray-500 '>Products Delivered</p>  
                    </div>
                    {/* 3rd grid */}
                    <div>
                       <h1 className=' text-blue-500 text-4xl font-black'>24/7</h1>
                        <p className=' font-medium text-gray-500 '>Support Availability</p> 
                    </div>
                    {/* 4th grid */}
                    <div>
                       <h1 className=' text-blue-500 text-4xl font-black'>99%</h1>
                        <p className=' font-medium text-gray-500 '>Customer Satisfaction Rate</p> 
                    </div>

                </div>

               </div>
               </div>
            </div>
            
       
    );
};

export default About;