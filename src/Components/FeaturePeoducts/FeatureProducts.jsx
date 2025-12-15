import { useEffect, useState } from "react";
import cartLogo from '../../assets/Feature/cart.svg'


const FeatureProducts = () => {
    const [products,setProducts]=useState([]);
    const [visible,setVisible]=useState(4)

    useEffect(()=>{
        fetch('/products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    const featuredProducts=products.filter(product=>product.badge==="Best Seller");

     const handleSeeMore = () => {
       setVisible(prev => prev + 4);
          };





    return (
        <div className=" bg-[#F8F8F8]">
            <div className=" max-w-11/12 mx-auto  ">
             <h1 className=" text-center pt-8 text-2xl md:text-3xl font-bold">Featured products</h1>
            <div className=" grid grid-cols-4 gap-8 py-16 ">
               
                {
                featuredProducts.slice(0,visible).map((p)=>
                <div key={p.id} >
                    <div className=" bg-white  rounded-2xl ">
                        {/* badge and cart logo */}
                       <div className=" flex justify-between pt-3 px-3">
                        <button className=" bg-[#E27A1E] rounded-lg px-3 text-md font-bold
                         text-white">{p.badge}</button>
                          <img  src={cartLogo}></img>
                    </div>
                    {/* product image */}
                   <div className=" flex items-center justify-center pb-14 pt-6">
                       <img className=" h-48 w-52" src={p.image}></img>
                   </div>
                     
                    </div>
                    
                    {/* prices and title */}
                    <div className="flex flex-col items-start mt-4">
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

            


        </div>
        
    );
};

export default FeatureProducts;