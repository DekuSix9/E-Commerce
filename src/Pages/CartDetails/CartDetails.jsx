import { useContext } from "react";
import { CartProvider } from "../../Layout/CartContext/CartContext";
import { Link } from "react-router-dom";

const CartDetails = () => {
  const { cart,removeItem,total } = useContext(CartProvider);

  

  return (
    <div className="max-w-6xl mx-auto my-12 font-open">
     

      <div className="overflow-x-auto  rounded-xl">
        <table className="table text-center">
          <thead >
            <tr className=" text-black text-lg md:text-2xl text-center">
           
              <th >Product</th>
              <th className="hidden md:table-cell"  >Category</th>
              <th >Price</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {cart.length > 0 ? (
              cart.map((item) => (
                <tr key={item.id} className="hover">
                  

                  {/* Product column */}
                  <td>
                    <div className="flex items-center gap-3">
                      <div >
                        <div className="w-12 h-12 shrink-0">
                          <img className="w-12 h-12 object-cover" src={item.image}  />
                        </div>
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-sm md:text-base">{item.title}</p>
                        <p className="text-xs md:text-sm opacity-70">{item.brand}</p>
                      </div>
                    </div>
                  </td>

                  <td className="capitalize hidden md:table-cell">{item.category}</td>
                  <td className="font-semibold">{item.price}</td>
                  <td>
                    <button onClick={()=>removeItem(item.id)} className=" bg-amber-200 px-3 py-1 rounded-lg
                     text-sm md:text-base">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-10 text-lg">
                  Your cart is empty 
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* subtotal */}
      <div className=" mt-6 flex justify-center text-lg  font-bold">
              <span className=" mr-2">TOTAL:</span>
              <span className=" font-medium ">TK.{total}</span> 
            </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-10">

  {/* Coupon section */}
  <div className="w-full md:w-1/2 flex items-center gap-3">
    <input
      type="text"
      placeholder="Coupon code"
      className="w-full md:w-2/3 border border-gray-400 rounded-lg px-3 py-2 ml-2" />

    <button className="bg-black hover:bg-gray-900 text-white px-3 md:px-5 py-2 rounded-lg font-semibold">
      Apply 
    </button>
  </div>

  {/* Checkout button */}
  <Link
    to="/checkout"
    className="bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-lg 
    font-semibold text-center mr-8" >
    CHECKOUT
  </Link>

</div>

    </div>
  );
};

export default CartDetails;
