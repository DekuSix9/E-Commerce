import { SlLocationPin } from "react-icons/sl";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { SlCalender } from "react-icons/sl";




const Contact = () => {
    return (
        <div className=" max-w-11/12 mx-auto py-12 font-open">
            {/* address and info */}
            <div>
                <div className=" flex flex-col gap-2">
                    <h1 className=' font-bold text-xl md:text-2xl '>Contact Info</h1>
                <p className="text-gray-500">We're here to help you every step of the way. Whether you have
                     questions about products, orders, or support, feel free to reach out 
                     to us anytime. Our team is committed to providing fast, friendly, and reliable
                      assistance.</p>
                </div>
                {/* address and phone */}
                <div className=" grid grid-cols-2 md:grid-cols-4 py-16 gap-4">
                    <div className=" flex flex-col items-center gap-1">
                        <SlLocationPin className=" h-10 w-10 text-blue-400" />
                        <h2 className="font-bold text-xl ">Address</h2>
                        <p className="text-gray-500 ">Dhanmondi, Dhaka - 1209</p>
                    </div>
                     <div className=" flex flex-col items-center gap-1">
                        <IoPhonePortraitOutline className=" h-10 w-10 text-blue-400" />
                        <h2 className="font-bold text-xl ">Phone</h2>
                        <p className="text-gray-500 ">+880 17XX-XXXXXX</p>
                    </div>
                     <div className=" flex flex-col items-center gap-1">
                        <MdOutlineMail className=" h-10 w-10 text-blue-400" />
                        <h2 className="font-bold text-xl ">E-mail Address</h2>
                        <p className="text-gray-500">info@example.com</p>
                    </div>
                     <div className=" flex flex-col items-center gap-1">
                        <SlCalender className=" h-10 w-10 text-blue-400" />
                         <h2 className="font-bold text-xl ">Working Time</h2>
                        <p className="text-gray-500 ">Mon - Sun / 9:00AM - 8:00PM</p>
                    </div>

                </div>
                
            </div>
            {/* divider */}
            <div class="w-full h-px bg-gray-200 my-2"></div>


             {/* contact form and questions */}
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 md:mt-12">
                {/* contact form */}
                <div>
                    <h1 className=" font-bold text-xl md:text-2xl ">Send Us a Message</h1>
                <form className=" my-4 ">

              <div>
             <label className="block mb-2 text-sm font-medium text-gray-500"> Your Name <span className="text-red-500">*</span>
               </label>
             <input
        type="text"
        placeholder=""
        className="w-full border border-gray-200 mb-2 px-4 py-3 focus:outline-none focus:border-black" />
    </div>

    {/* Email */}
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-500">
        Your E-mail <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-black"/>
    </div>

    {/* Message */}
    <div>
      <label className="block mt-2 text-sm font-medium text-gray-500 ">
        Your Message <span className="text-red-500">*</span>
      </label>
      <textarea
        rows="5"
        className="w-full border mt-2 border-gray-200 px-4 py-3 resize-none focus:outline-none focus:border-black" >

        </textarea>
    </div>

    {/* Button */}
    <button
      type="submit"
      className="bg-black text-white px-10 py-4 mt-2 text-sm font-semibold 
      tracking-wide hover:bg-gray-800 transition ">
      SEND MESSAGE
    </button>
 </form>
                    
       </div>
                 {/* questions */}
                 <div>
             <h1 className=" font-bold text-xl md:text-2xl">Frequently Asked Questions</h1>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">How long does delivery usually take?</div>
       <div className="collapse-content text-sm">We usually deliver products within 2-5 business days depending on your location. You'll
         receive tracking details once your order is shipped.</div>
      </div>
     <div className="collapse collapse-arrow bg-base-100 border border-base-300">
      <input type="radio" name="my-accordion-2" />
       <div className="collapse-title font-semibold">Do you offer a return or refund policy?</div>
        <div className="collapse-content text-sm">Yes. If a product is damaged, defective, or not as described, you can
             request a return or refund within 7 days of delivery..</div>
    </div>
     <div className="collapse collapse-arrow bg-base-100 border border-base-300">
     <input type="radio" name="my-accordion-2" />
     <div className="collapse-title font-semibold">Are your products authentic?</div>
     <div className="collapse-content text-sm">Absolutely. All our products are 100% genuine and
         sourced from trusted suppliers and authorized distributors.</div>
   </div>
    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
     <input type="radio" name="my-accordion-2" />
     <div className="collapse-title font-semibold">What payment methods do you accept?</div>
     <div className="collapse-content text-sm">We accept Cash on Delivery, bKash, Nagad, Rocket, and Bank Transfer for your convenience.</div>
   </div>
    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
     <input type="radio" name="my-accordion-2" />
     <div className="collapse-title font-semibold">How can I contact customer support?</div>
     <div className="collapse-content text-sm">You can contact us via phone, email, or the contact form on this page. 
        Our support team is always ready to assist you.</div>
   </div>
                    
     </div>

     </div>


        </div>
    );
};

export default Contact;