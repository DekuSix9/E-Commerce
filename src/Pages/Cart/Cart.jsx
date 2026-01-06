import { useContext, useEffect } from "react";
import { CartProvider } from "../../Layout/CartContext/CartContext";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem } = useContext(CartProvider);
  const location = useLocation();

  useEffect(() => {
    const drawer = document.getElementById("my-drawer-5");
    if (drawer) drawer.checked = false;
  }, [location.pathname]);

  return (
    <div className="drawer drawer-end z-50 font-open">
      <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side">
        <label htmlFor="my-drawer-5" className="drawer-overlay" />

        {/* make the panel a flex column */}
        <div className="bg-base-200 min-h-full w-[90vw] sm:w-[420px] md:w-[450px] p-5 relative flex flex-col">

          {/* close button */}
          <label
            htmlFor="my-drawer-5"
            className="absolute top-3 right-3 cursor-pointer text-gray-600 hover:text-gray-900">
            <MdOutlineCancel className="h-5 w-5" />
          </label>

          <h2 className="text-xl md:text-2xl font-bold mb-4 mt-6">Shopping Cart</h2>

          {/* cart items */}
          <div className="flex-1 overflow-y-auto pr-2 pb-4">
            {cart.length === 0 ? (
              <p className="text-gray-500">Cart is empty</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-gray-300 py-3 flex justify-between items-center"
                >
                  <div>
                    <p className="font-semibold text-sm md:text-base">{item.title}</p>
                    <p className="mt-2 text-gray-500">{item.price}</p>
                  </div>

                  <div className="relative h-16 w-16 md:h-20 md:w-20">
                    <img
                      src={item.image}
                      className="h-20 w-20 object-cover rounded" />
                    <button
                      onClick={() => removeItem(item.id)}
                      className="absolute -top-2 -right-2 shadow-md rounded-full p-1 bg-black/50">
                      <AiOutlineDelete className="text-white h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Buttons — NO MORE ABSOLUTE POSITIONING */}
          <div className="space-y-3 pt-2">
            <Link
              to="/cart"
              className="w-full block border border-gray-400 bg-gray-200 hover:bg-gray-300 py-3 rounded-md text-center font-semibold"
            >
              VIEW CART
            </Link>

            <Link
              to="/checkout"
              className="w-full block bg-black hover:bg-gray-950 text-white py-3 rounded-md text-center font-semibold"
            >
              CHECKOUT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
