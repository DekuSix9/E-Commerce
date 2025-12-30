import { useContext, useEffect, useState } from "react";
import cartLogo from '../../assets/Feature/cart.svg'
import ProductDetails from "../../Pages/ProductDetail/ProductDetails";
import { CartProvider } from "../../Layout/CartContext/CartContext";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvide";


const FeatureProducts = () => {
    const [products,setProducts]=useState([]);
    const [visible,setVisible]=useState(4);
    const[modal,setModal]=useState(null);
    const{addToCart}=useContext(CartProvider);
    const{user}=useContext(AuthContext);
     const [success, setSuccess] = useState(false);
   

    useEffect(()=>{
        fetch('/products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    const featuredProducts=products.filter(product=>product.badge==="Best Seller");

     const handleSeeMore = () => {
       setVisible(prev => prev + 4);
          };

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
    document.getElementById("my_modal_3").showModal();
   }



    return (
        <div className=" bg-[#F8F8F8]">
            <div className=" max-w-11/12 mx-auto  ">
             <h1 className=" text-center pt-8 text-2xl md:text-3xl font-bold">Featured products</h1>
             {success && (
          <div className="fixed top-6 right-6 z-50">
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
            <div className=" grid grid-cols-4 gap-8 py-16 ">
               
                {
                featuredProducts.slice(0,visible).map((p)=>
                <div key={p.id} >
                    <div className=" bg-[#F8F8F8] rounded-2xl ">
                        {/* badge and cart logo */}
                       <div className=" flex justify-between pt-3 px-3">
                        <button className=" bg-[#E27A1E] rounded-lg px-3 text-md font-bold
                         text-white">{p.badge}</button>
                          <img onClick={()=>addToCartHandler(p)} className=" cursor-pointer"  src={cartLogo}></img>
                    </div>
                    {/* product image */}
                   <div onClick={()=>openModal(p.id)} className=" flex items-center justify-center pb-14 pt-6 cursor-pointer">
                       <img className=" h-48 w-52 " src={p.image}></img>
                   </div>
                     
                    </div>
                    
                    {/* prices and title */}
                    <div onClick={()=>openModal(p.id)} className="flex flex-col items-start mt-4 cursor-pointer">
                        <h1 className=" text-lg md:text-2xl font-medium mb-1">{p.title}</h1>
             <span className="relative text-[#BDBDBD] text-lg">
             {p.oldPrice}
            <span className="absolute left-0 top-1/2 w-full h-px bg-[#737373]"></span>
               </span>

              <span className="text-[#E27A1E] font-medium text-lg">
                     {p.price}
                 </span>
                  </div>

                         
                </div>
                
            )
            }
            </div>
               {/* see more button */}
               {
                visible<featuredProducts.length &&(
                      <div className=" flex items-center justify-center mb-8">
            <button onClick={handleSeeMore} className=" bg-black text-white rounded-xl px-4 py-2 ">Show More</button>
               </div>
                )
               }
              
           
        </div>

            
    <ProductDetails productId={modal}></ProductDetails>

        </div>
        
    );
};

export default FeatureProducts;