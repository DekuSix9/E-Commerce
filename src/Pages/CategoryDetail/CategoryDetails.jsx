import { useLoaderData, useParams } from "react-router-dom";
import cartLogo from '../../assets/Feature/cart.svg'
import { useState } from "react";
import ProductDetails from "../ProductDetail/ProductDetails";


const CategoryDetails = () => {
    const {category}=useParams();
    const categoryData=useLoaderData();
    const categoryDetails=categoryData.filter((item)=>item.category.toLowerCase()===category.toLowerCase());
    const [modal,setModal]=useState(null);

    const openModal=(id)=>{
      setModal(id);
       document.getElementById('my_modal_3').showModal();
    }



    return (
        <div className=" max-w-11/12 mx-auto font-manrope py-10">
            <div className=" flex flex-col items-center gap-1">
                <h1 className=" capitalize  text-2xl md:text-3xl font-bold mb-2">{category}</h1>
             <button className=" border border-[#737373] px-8 py-1 rounded-lg font-medium">{categoryDetails.length} Products</button>
            </div>
             
               {/* products Details */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {
               categoryDetails.map((p) => (
                 <div key={p.id} className=" py-12">
                   <div className="bg-[#F8F8F8] rounded-2xl">
                     {/* badge and cart logo */}
                     <div className="flex justify-between pt-3 px-3">
                       <button className="bg-[#E27A1E] rounded-lg px-3 text-md font-bold text-white">
                         {p.badge}
                       </button>
                       <img src={cartLogo} alt="cart" />
                     </div>
           
                     {/* product image */}
                     <div onClick={()=>openModal(p.id)} className="flex items-center justify-center pb-14 pt-6 cursor-pointer">
                       <img className="h-48 w-52 " src={p.image} alt={p.title} />
                     </div>
                   </div>
           
                   {/* prices and title */}
                   <div onClick={()=>openModal(p.id)} className="flex flex-col items-start mt-4 cursor-pointer">
                     <h1 className="text-lg md:text-2xl font-medium mb-1">{p.title}</h1>
           
                     <span className="relative text-[#BDBDBD] text-lg">
                       {p.oldPrice}
                       <span className="absolute left-0 top-1/2 w-full h-px bg-[#737373]"></span>
                     </span>
           
                     <span className="text-[#E27A1E] font-medium text-lg">
                       {p.price}
                     </span>
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