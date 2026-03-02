import { useContext, useEffect } from "react";
import { CartProvider } from "../../Layout/CartContext/CartContext";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem } = useContext(CartProvider);
  const location = useLocation();

  // Close drawer when route changes
  useEffect(() => {
    const drawer = document.getElementById("my-drawer-5");
    if (drawer) drawer.checked = false;
  }, [location.pathname]);

  return (
    <div className="drawer drawer-end z-50 font-open">
      <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side">
        <label htmlFor="my-drawer-5" className="drawer-overlay" />

        {/*drawer panel */}
        <div className="bg-base-200 min-h-full w-[90vw] sm:w-[420px] md:w-[450px] p-5 relative flex flex-col">

          {/*close button */}
          <label
            htmlFor="my-drawer-5"
            className="absolute top-3 right-3 cursor-pointer text-base-content/70 hover:text-base-content transition" >
            <MdOutlineCancel className="h-6 w-6" />
          </label>

          {/*title */}
          <h2 className="text-xl md:text-2xl font-bold mb-4 mt-6 text-base-content">
            Shopping Cart
          </h2>

          {/*cart items */}
          <div className="flex-1 overflow-y-auto pr-2 pb-4 space-y-3">
            {cart.length === 0 ? (
              <p className="text-base-content/60 text-center mt-10">
                Cart is empty
              </p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-base-300 pb-3 my-2 flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-sm md:text-base text-base-content">
                      {item.title}
                    </p>
                    <p className="mt-2 text-base-content/60">
                      ${item.price}
                    </p>
                  </div>

                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-20 w-20 object-cover rounded-lg" />

                    <button
                      onClick={() => removeItem(item.id)}
                      className="absolute -top-2 -right-2 btn btn-xs btn-error" >
                      <AiOutlineDelete className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* bottom buttons */}
          <div className="space-y-3 pt-4">
            <Link to="/cart"  className="btn btn-outline w-full" >
              VIEW CART
            </Link>

            <Link to="/checkout"
              className="btn btn-primary w-full">
              CHECKOUT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;