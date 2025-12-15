import { useEffect, useState } from "react";
import cartLogo from '../../assets/Feature/cart.svg'


const ProductsSection = () => {
    const [products,setProducts]=useState([]);
    const [selected,setSelected]=useState('All');
    const [visible,setVisible]=useState(8);

    useEffect(()=>{
        fetch('/products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
      },[]);

      const uniqueCategory=["All",...new Set(products.map(item=>item.category))];
      const filteredProduct=selected==="All"?products:products.filter((p)=>p.category===selected);

      const handleSeeMore=()=>{
        setVisible(prev=>prev+4)
      }

    return (
        <div className=" max-w-11/12 mx-auto py-4">
            <h1 className="  text-center pt-8 text-2xl md:text-3xl font-bold mb-6">Our products</h1>
                 {/* buttons */}
            <div className=" flex justify-center items-center gap-4 flex-wrap">
                 
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
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
  {
    filteredProduct.slice(0,visible).map((p) => (
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
          <div className="flex items-center justify-center pb-14 pt-6">
            <img className="h-48 w-52" src={p.image} alt={p.title} />
          </div>
        </div>

        {/* prices and title */}
        <div className="flex flex-col items-start mt-4">
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
               {
                visible<filteredProduct.length &&(
                     <div className=" flex items-center justify-center mb-8">
            <button onClick={handleSeeMore} className=" bg-black text-white rounded-xl px-4 py-2 ">Show More</button>
               </div>

                )
               }
               

           
        </div>
    );
};

export default ProductsSection;