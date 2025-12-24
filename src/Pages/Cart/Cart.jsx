
import { useContext } from "react";
import { CartProvider } from "../../Layout/CartContext/CartContext";
import { AiOutlineDelete } from "react-icons/ai";

const Cart = () => {
  const { cart, removeItem } = useContext(CartProvider);

  return (
    <div className="drawer drawer-end z-50 font-open">
      <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side">
        <label htmlFor="my-drawer-5" className="drawer-overlay"></label>

        <div className="bg-base-200 min-h-full w-96 p-5 relative">

          {/* close button */}
          <label
            htmlFor="my-drawer-5"
            className="absolute top-3 right-3 cursor-pointer text-gray-600 hover:text-gray-900"
          >
            ✕
          </label>

          <h2 className="text-xl font-bold mb-4 mt-6">Shopping Cart</h2>

          {/* cart items */}
          <div className="overflow-y-auto max-h-[65vh] pr-2">
            {cart.length === 0 ? (
              <p className="text-gray-500">Cart is empty</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-gray-300 py-3 flex justify-between items-center"
                >
                  <div>
                    <p className="font-semibold">{item.title}</p>
                  </div>

                  {/* delete icon */}
                  <div className="relative h-20 w-20">
                    <img
                      src={item.image}
                      className="h-20 w-20 object-cover rounded"/>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="absolute -top-2 -right-2 shadow-md 
                      rounded-full p-1 bg-black/50 cursor-pointer" >
                      <AiOutlineDelete className="text-white h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))
               )}
                </div>

          {/* subtotal & buttons */}
          <div className="absolute bottom-3 left-5 right-5">

            <div className="flex mb-4 font-bold">
              <span>SUBTOTAL:</span>
              <span>123$</span> 
            </div>

            <button className="w-full border border-gray-400 bg-gray-200 hover:bg-gray-300 py-3
             rounded-md font-semibold mb-3 cursor-pointer">
              VIEW CART
            </button>

            <button className="w-full bg-black hover:bg-gray-950 text-white py-3 
            rounded-md font-semibold cursor-pointer">
              CHECKOUT
            </button>

          </div>

        </div>
      </div>
        </div>
   );
  };

export default Cart;
