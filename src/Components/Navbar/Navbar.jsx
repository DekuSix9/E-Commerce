import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo/Logo.svg'
import { BsCart } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useContext, useState } from 'react';
import Cart from '../../Pages/Cart/Cart';
import { AuthContext } from "../../Provider/AuthProvider/AuthProvide";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => logOut();

  return (
    <div className='sticky top-0 bg-white z-50 shadow-sm'>
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
        <nav className="flex items-center justify-between">

          {/* Logo */}
          <div className="shrink-0">
            <Link to='/'> <img className="w-24 md:w-40" src={logo} alt="Logo" /></Link>  
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center gap-6 lg:gap-10">
            <NavLink className="hover:text-[#E27A1E]">Home</NavLink>
            <NavLink to='/allproduct' className="hover:text-[#E27A1E]">All Products</NavLink>
            <NavLink className="hover:text-[#E27A1E]">About Us</NavLink>
            <NavLink className="hover:text-[#E27A1E]">Shop</NavLink>
            <NavLink className="hover:text-[#E27A1E]">Contact Us</NavLink>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-4">
            <label htmlFor="my-drawer-5" className="cursor-pointer">
              <BsCart className="w-6 h-6" />
            </label>

            {user ? (
              <button
                onClick={handleLogOut}
                className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-full shadow-md transition duration-200"
              >
                Log Out
              </button>
            ) : (
              <Link to='/login'>
                <MdOutlineAccountCircle className="w-6 h-6" />
              </Link>
            )}
          </div>

          {/* Mobile Icons */}
          <div className="flex md:hidden items-center gap-3">
            <label htmlFor="my-drawer-5" className="cursor-pointer">
              <BsCart className="w-6 h-6" />
            </label>

            {user ? (
              <button
                onClick={handleLogOut}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-full text-sm"
              >
                Log Out
              </button>
            ) : (
              <Link to='/login'>
                <MdOutlineAccountCircle className="w-6 h-6" />
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className='text-3xl text-gray-700'
            >
              {menuOpen ? <IoClose /> : <RxHamburgerMenu />}
            </button>
          </div>

        </nav>

        {/* Mobile Menu Items */}
        {menuOpen && (
          <div className="md:hidden mt-4 p-4 rounded-lg shadow-lg bg-white space-y-4">
            <NavLink className="block">Home</NavLink>
            <NavLink to='/allproduct'  className="block">All Products</NavLink>
            <NavLink className="block">About Us</NavLink>
            <NavLink className="block">Shop</NavLink>
            <NavLink className="block">Contact Us</NavLink>
          </div>
        )}
      </div>

      <Cart />
    </div>
  )
}

export default Navbar;
