import { useContext } from "react";
import { CartProvider } from "../../Layout/CartContext/CartContext";


const Cart = () => {
    const{cart}=useContext(CartProvider)
    return (
        <div>
         <div className="drawer drawer-end">
  <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-5" className="drawer-button btn btn-primary">Open drawer</label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 min-h-full w-80 p-4">
      {/* Sidebar content here */}
      {
        cart.map((item)=>
        <div>
         <p>{item.title}</p>
        </div>)
      }
    </ul>
  </div>
</div>
            
        </div>
    );
};

export default Cart;