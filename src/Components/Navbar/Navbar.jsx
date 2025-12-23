
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo/Logo.svg'
import { BsCart } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';



const Navbar = () => {
  const [menuOpen,setMenuOpen]=useState(false);
    return (
      <div className=' sticky top-0 bg-white z-50 '>
          <div className=" max-w-11/12 mx-auto py-6">
            <nav className=" flex justify-between items-center">
               {/* logo */}
               <div className=' flex items-center'>
                 <img className=' w-20 md:w-40' src={logo}></img>
               </div>
              
                   {/* right side contents */}
               <div className=' flex items-center gap-4 md:hidden'>
                <BsCart className=' w-5 h-5'></BsCart>
                <MdOutlineAccountCircle className=' w-5 h-5'></MdOutlineAccountCircle>

               </div>
               {/* mobile menu button */}
                  <button onClick={()=>setMenuOpen(!menuOpen)}
                    className=' md:hidden  text-3xl text-gray-700'>
                      {
                        menuOpen?<IoClose></IoClose>:<RxHamburgerMenu></RxHamburgerMenu>
                      }
                      </button>

                           {/* desktop menu items */}
               <div className=' hidden md:flex items-center gap-6'>
                 <NavLink>Home</NavLink>
                 <NavLink>All Products</NavLink>
                 <NavLink>About us</NavLink>
                 <NavLink>Shop</NavLink>
                 <NavLink>Contact us</NavLink>
               </div>

                {/* desktp icons  */}
          <div className="hidden md:flex items-center gap-4">
            
                <BsCart className="w-6 h-6" />
        
          
          <MdOutlineAccountCircle className="w-6 h-6" />
            </div>

            </nav>
                  

                  

                  {/* mobile menu items */}

                  {menuOpen && (
                   
              

           <div className="md:hidden bg-white mt-4 p-4 rounded-lg shadow-lg space-y-4">
          <NavLink className="block">Home</NavLink>
          <NavLink className="block">All Products</NavLink>
          <NavLink className="block">About us</NavLink>
          <NavLink className="block">Shop</NavLink>
          <NavLink className="block">Contact us</NavLink>

          
        </div>
            
       
      )}
                 




          </div>
      </div>
       
    );
};

export default Navbar;