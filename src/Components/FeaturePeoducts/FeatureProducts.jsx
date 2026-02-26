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
        <div >
            <div className=" max-w-11/12 mx-auto  ">
             <h1 className="text-center pt-8 text-2xl md:text-3xl font-bold">Featured products</h1>
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
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 py-6 md:py-12">

  {featuredProducts.slice(0, visible).map((p) => (
    <div key={p.id}>

      {/* CARD */}
      <div className=" rounded-2xl relative p-4 border border-gray-200">

        {/* Badge */}
        {p.badge && (
          <span className="absolute top-4 left-4 bg-[#E27A1E] rounded-lg px-3 py-2 text-sm md:text-md font-bold text-white">
            {p.badge}
          </span>
        )}

        {/* Icons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button
            onClick={() => addToCartHandler(p)}
            className="bg-white w-9 h-9 rounded-full shadow flex items-center justify-center hover:scale-105 transition">
            <img className="w-6 md:w-10 cursor-pointer" src={cartLogo} alt="cart" />
          </button>
        </div>

        {/* Product Image */}
        <div
          onClick={() => openModal(p.id)}
          className="flex items-center justify-center pt-10 pb-6 cursor-pointer"
        >
          <img
            className="h-44 md:h-48 object-contain"
            src={p.image}
            alt={p.title}
          />
        </div>
      </div>

      {/* TITLE & PRICE */}
      <div
        onClick={() => openModal(p.id)}
        className="mt-3 cursor-pointer"
      >
        <h1 className="text-sm md:text-base font-medium mb-1">
          {p.title}
        </h1>

        {/* Old Price */}
        <span className="relative text-[#BDBDBD] text-xs md:text-sm">
          Tk.{p.oldPrice}
          <span className="absolute left-0 top-1/2 w-full h-px bg-[#737373]"></span>
        </span>

        {/* New Price */}
        <p className="text-[#E27A1E] font-semibold text-base md:text-lg">
          Tk.{p.price}
        </p>
      </div>

    </div>
  ))}

</div>

               {/* see more button */}
               {
                visible<featuredProducts.length &&(
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

export default FeatureProducts;