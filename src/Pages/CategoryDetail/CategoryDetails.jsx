import { useLoaderData, useParams } from "react-router-dom";
import cartLogo from '../../assets/Feature/cart.svg'
import { useContext, useState } from "react";
import ProductDetails from "../ProductDetail/ProductDetails";
import { CartProvider } from "../../Layout/CartContext/CartContext";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvide";


const CategoryDetails = () => {
    const {category}=useParams();
    const categoryData=useLoaderData();
    const [modal,setModal]=useState(null);
    const {addToCart}=useContext(CartProvider);
    const {user}=useContext(AuthContext);
    const [success, setSuccess] = useState(false);

   const categoryDetails=categoryData.filter((item)=>item.category.toLowerCase()===category.toLowerCase());
      const addToCartHandler=(product)=>{
            if(!user){
                alert("please login")
            }
            addToCart(product);
            setSuccess(true);
         setTimeout(() => setSuccess(false), 3000);
        }

    const openModal=(id)=>{
      setModal(id);
       document.getElementById('my_modal_3').showModal();
    }



    return (
        <div className=" max-w-11/12 mx-auto font-manrope py-4">
            <div className=" flex flex-col items-center gap-1">
                <h1 className=" capitalize  text-2xl md:text-3xl font-bold mb-2">{category}</h1>
             <button className=" border border-[#737373] px-8 py-1 rounded-lg font-medium">{categoryDetails.length} Products</button>
            </div>
            {/* success alert */}
             {success && (
        <div className="fixed top-4 right-3 sm:top-6 sm:right-6 z-50">
          <div role="alert" className="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24" >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 
                  0 9 9 0 0118 0z" />
            </svg>
            <span>Product added to cart successfully!</span>
          </div>
        </div>
      )}
             
               {/* products Details */}
                    <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 md:gap-8 py-6 md:py-10">
                   {
               categoryDetails.map((p) => (
                 <div key={p.id} >
                   <div className="pt-1 md:pt-4 border border-gray-200 relative  rounded-2xl ">
                        {/* cart Icon */}
                       <div className="absolute top-2 md:top-4 right-2 md:right-4">
                            <button  onClick={() => addToCartHandler(p)} className="   hover:scale-105 transition">
                                  <img src={cartLogo} className="w-6 md:w-10"/>
                                 </button>
                            </div>
           
                     {/* product image */}
                     <div onClick={()=>openModal(p.id)} className="flex items-center justify-center pt-10 pb-6 cursor-pointer">
                       <img className="h-32 md:h-36 object-contain " src={p.image} alt={p.title} />
                     </div>
                   </div>
           
                     {/* prices and title */}
              <div onClick={() => openModal(p.id)} className="mt-0 md:mt-3 cursor-pointer">
              <h1 className="text-sm md:text-base font-medium mt-0.5 md:mt-1">
                 {p.title}
                   </h1>

             {/*old Price */}
            <span className="relative text-gray-900 text-sm">
                   Tk.{p.oldPrice}
                <span className="absolute left-0 top-1/2 w-full h-px bg-[#737373]"></span>
                 </span>

                {/*new Price */}
               <p className="text-[#E27A1E] font-semibold text-base md:text-lg">
                 Tk.{p.price}
                    </p>
                  </div> 
               </div>
                   ))
                    }
                  </div>
                  <ProductDetails productId={modal} ></ProductDetails>
        </div>
    );
};

export default CategoryDetails;