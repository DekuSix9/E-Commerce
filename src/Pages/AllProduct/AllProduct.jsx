import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvide";
import { CartProvider } from "../../Layout/CartContext/CartContext";
import ProductDetails from "../../Pages/ProductDetail/ProductDetails";
import cartLogo from '../../assets/Feature/cart.svg'


const AllProduct = () => {
     const [products,setProducts]=useState([]);
        const [visible,setVisible]=useState(8);
        const[modal,setModal]=useState(null);
         const [search, setSearch] = useState("");
        const{addToCart}=useContext(CartProvider);
        const{user}=useContext(AuthContext);
         const [success, setSuccess] = useState(false);

         useEffect(()=>{
                 fetch('/products.json')
                 .then(res=>res.json())
                 .then(data=>setProducts(data))
             },[]);

             //  see more
             const handleSeeMore = () => {
       setVisible(prev => prev + 4);
          };

      //  add to cart
        const addToCartHandler=(product)=>{
            if(!user){
                alert("please login")
            }
            addToCart(product);
            setSuccess(true);

   
       setTimeout(() => setSuccess(false), 3000);
        }
        
        // filter for search
       const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()) );
   
      //  openModal
   const openModal=(id)=>{
    setModal(id);
    document.getElementById("my_modal_3").showModal();
   }


    return (
         <div className="">
            <div className=" max-w-11/12 mx-auto  ">
            <div className=" flex items-center justify-center">
              <input type="text"  value={search}  placeholder="Search products..."
               className="border p-2 w-full md:w-[25%] rounded-lg mt-6" 
               onChange={(e) => {
              setSearch(e.target.value);
              setVisible(8); 
            }}>
            </input>
            </div>
             
             {success && (
          <div className="fixed top-4 right-3 sm:top-6 sm:right-6 z-50">
            <div role="alert" className="alert alert-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"  >
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
            <div className=" grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 md:gap-8 py-6 md:py-10 ">
               
                {
                filteredProducts.slice(0,visible).map((p)=>
                <div key={p.id} >
                    <div className=" pt-1 md:pt-4 border border-gray-200 relative  rounded-2xl ">
                       {/* cart Icon */}
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
                    {/* product image */}
                   <div onClick={()=>openModal(p.id)} className=" flex items-center justify-center pt-10 pb-6 cursor-pointer">
                       <img className="h-32 md:h-36 object-contain" src={p.image}></img>
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
                
            )
            }
            </div>
               {/* see more button */}
                 {
                visible<filteredProducts.length &&(
                     <div className=" flex items-center justify-center pb-6 md:pb-8">
            <button onClick={handleSeeMore} className=" bg-black text-white rounded-xl px-5 py-2 md:px-6 md:py-3 ">Show More</button>
               </div>

                )
               }
              
           
        </div>

            
    <ProductDetails productId={modal}></ProductDetails>

        </div>
        
    );
};

export default AllProduct;