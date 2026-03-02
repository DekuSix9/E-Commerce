import { useContext, useEffect, useState } from "react";
import cartLogo from '../../assets/Feature/cart.svg'

import ProductDetails from "../../Pages/ProductDetail/ProductDetails";
import { CartProvider } from "../../Layout/CartContext/CartContext";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvide";


const ProductsSection = () => {
    const [products,setProducts]=useState([]);
    const [selected,setSelected]=useState('All');
    const [visible,setVisible]=useState(8);
    const [modal,setModal]=useState(null);
    const {addToCart}=useContext(CartProvider);
    const {user}=useContext(AuthContext);
    const[success,setSuccess]=useState(false);

    useEffect(()=>{
        fetch('/products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
      },[]);

      const uniqueCategory=["All",...new Set(products.map(item=>item.category))];
      const filteredProduct=selected==="All"?products:products.filter((p)=>p.category===selected);

      const handleSeeMore=()=>{
        setVisible(prev=>prev+4)
      };

      const addToCartHandler=(product)=>{
        if(!user){
          alert("Please Log in")
        }
        addToCart(product);
        setSuccess(true);
        setTimeout(()=>setSuccess(false),3000)
      }

      const openModal=(id)=>{
        setModal(id);
        document.getElementById('my_modal_3').showModal();
      }

    return (
        <div className=" max-w-11/12 mx-auto mt-4 ">
           {/* success alert */}
      {success && (
        <div className="fixed top-4 right-3 sm:top-6 sm:right-6 z-50">
          <div role="alert" className="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 
                  0 9 9 0 0118 0z"
              />
            </svg>
            <span>Product added to cart successfully!</span>
          </div>
        </div>
      )}
        
            <h1 className="  text-center pt-2 md:pt-4 text-2xl md:text-3xl font-bold mb-6">Our products</h1>
                {/* buttons */}
            <div className=" flex justify-center items-center gap-2 md:gap-4 flex-wrap">
                 
                {
                uniqueCategory.map(cate=>
                <div key={cate} >
                       
              <button onClick={()=>setSelected(cate)} className={`capitalize px-4 py-1 rounded-lg transition-colors duration-300 ease-in-out ${
              selected === cate
                ? "bg-[#F8F8F8] text-[#E27A1E]"
                : "bg-[#E27A1E] text-white hover:bg-[#F8F8F8] hover:text-[#E27A1E]"
            }`}>{cate}</button>
                

               </div>
                
            )
            }
            </div>

            {/* products Details */}
         <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 md:gap-8 py-6 md:py-8">
  {
    filteredProduct.slice(0,visible).map((p) => (
     <div key={p.id}>
  {/* Card */}
  <div className="rounded-2xl relative pt-1 md:pt-4 border border-gray-200">

    {/* Cart Icon */}
    <div className="absolute top-2 md:top-4 right-2 md:right-4">
      <button
        onClick={() => addToCartHandler(p)}
        className="   hover:scale-105 transition">
        <img
          src={cartLogo}
          alt="cart"
          className="w-6 md:w-10"/>
      </button>
    </div>

    {/* Product Image */}
    <div
      onClick={() => openModal(p.id)}
      className="flex items-center justify-center pt-10 pb-6 cursor-pointer">
      <img
        className="h-32 md:h-36 object-contain"
        src={p.image}
        alt={p.title}  />
    </div>
  </div>

  {/* Title & Prices */}
  <div
    onClick={() => openModal(p.id)}
    className="mt-0 md:mt-3 cursor-pointer">
    <h1 className="text-sm md:text-base font-medium mt-0.5 md:mt-1">
      {p.title}
    </h1>

    {/* Old Price */}
    <span className="relative text-gray-900 text-sm">
      Tk.{p.oldPrice}
      <span className="absolute left-0 top-1/2 w-full h-px bg-[#737373]"></span>
    </span>

    {/* New Price */}
    <p className="text-[#E27A1E] font-semibold text-base md:text-lg">
      Tk.{p.price}
    </p>
      </div>
      </div>
        ))
         }
       </div>
               {
                visible<filteredProduct.length &&(
                     <div className=" flex items-center justify-center pb-6 md:pb-8">
            <button onClick={handleSeeMore} className=" bg-black text-white rounded-xl px-5 py-2 md:px-6 md:py-3 ">Show More</button>
               </div>

                )
               }
               
             <ProductDetails productId={modal}/>
           
        </div>
    );
};

export default ProductsSection;