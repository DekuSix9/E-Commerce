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
            <div className=" grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 md:gap-8 py-6 md:py-10 ">
               
                {
                filteredProducts.slice(0,visible).map((p)=>
                <div key={p.id} >
                    <div className=" p-4 border border-gray-200  rounded-2xl ">
                        {/* badge and cart logo */}
                       <div className=" flex justify-between pt-3 px-3">
                        <button className=" bg-[#E27A1E] rounded-lg px-3 text-sm md:text-md font-bold text-white">{p.badge}</button>
                          <img onClick={()=>addToCartHandler(p)} className=" cursor-pointer w-6 md:w-10"  src={cartLogo}></img>
                    </div>
                    {/* product image */}
                   <div onClick={()=>openModal(p.id)} className=" flex items-center justify-center pb-10 pt-6 cursor-pointer">
                       <img className=" h-48 w-52 " src={p.image}></img>
                   </div>
                     
                    </div>
                    
                    {/* prices and title */}
                    <div onClick={()=>openModal(p.id)} className="flex flex-col items-start mt-3 cursor-pointer">
                        <h1 className=" text-lg md:text-xl font-medium mb-1">{p.title}</h1>
             <span className="relative text-[#BDBDBD] text-sm md:text-lg">
             TK.{p.oldPrice}
            <span className="absolute left-0 top-1/2 w-full h-px bg-[#737373]"></span>
               </span>

              <span className="text-[#E27A1E] font-medium text-lg md:text-xl">
                    Tk.{p.price}
                 </span>
                  </div>

                         
                </div>
                
            )
            }
            </div>
               {/* see more button */}
               {
                visible<filteredProducts.length &&(
                      <div className=" flex items-center justify-center pb-10">
            <button onClick={handleSeeMore} className=" bg-black text-white rounded-xl px-5 py-2 md:px-6 md:py-3">Show More</button>
               </div>
                )
               }
              
           
        </div>

            
    <ProductDetails productId={modal}></ProductDetails>

        </div>
        
    );
};

export default AllProduct;