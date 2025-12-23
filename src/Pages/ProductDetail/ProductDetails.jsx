import { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";


const ProductDetails = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('/productDetails.json')
      .then(res => res.json())
      .then(data => {
        const productDetail = data.find(item => item.id === productId);
        setProduct(productDetail);
      });
  }, [productId]);

   if (!product) {
    return <p className="text-center">Loading product...</p>;
  }

  

  return (
    <div className=" font-open">
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box max-w-4xl w-full">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div className=" grid grid-cols-2 gap-8">
            {/* left side */}
            <div>
               <img className=" h-96 w-full" src={product.image}></img>
               <div className=" grid grid-cols-3 gap-1">
                  <div className=" bg-[#F8F8F8] border border-gray-400">
                    <img  src={product.image}></img>
                  </div>
                  <div className=" bg-[#F8F8F8] border border-gray-400" >
                     <img src={product.image}></img>
                  </div>
                  <div className=" bg-[#F8F8F8] border border-gray-400 ">
                   <img src={product.image}></img>
                  </div>
                  </div>
            </div>

              {/* right side */}
            <div className=" mt-16">
              {/* title and rating */}
              <div className=" mb-4">
                  <h1 className="text-lg md:text-2xl font-bold mb-2">{product.title}</h1>
               <div className=" flex items-center gap-1">
                <span>{product.rating}</span>
                <MdOutlineStar></MdOutlineStar>
               </div>
              </div>
              {/* price */}
              <div>
                <h2 className=" font-semibold">{product.price}</h2>
                 <span className="relative text-[#BDBDBD] text-lg">
            {product.oldPrice}
            <span className="absolute left-0 top-1/2 w-full h-px bg-[#737373]"></span>
          </span>
              </div>
              {/* description */}
              <div className=" mt-4 space-y-1">
                <p className=" text-gray-500">{product.description}</p>
                <p className=" font-medium text-lg text-gray-700">{product.stock} left</p>
              </div>
              {/* button */}
              <div className=" mt-6">
                <button className="bg-[#E27A1E] rounded-lg px-6 py-2 text-md font-bold text-white hover:bg-gray-500">ADD TO CART</button>
              </div>
              {/* social icons */}
              <div className=' flex gap-2 text-black mt-4 '>
                    <CiFacebook className=' w-6 h-6'></CiFacebook>
                     <CiInstagram className=' w-6 h-6'></CiInstagram>
                      <CiYoutube className=' w-6 h-6'></CiYoutube>
                    <CiTwitter className=' w-6 h-6'></CiTwitter>
              
               </div>
               
               
            </div>




          </div>
          
        </div>
      </dialog>
    </div>
  );
};

export default ProductDetails;
