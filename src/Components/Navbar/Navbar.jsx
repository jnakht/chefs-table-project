import '../../index.css';
import { IoIosSearch } from "react-icons/io";
import { IoMdContact } from "react-icons/io";

const Navbar = () => {
    return (
        <div>
                    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[#150B2B] text-base font-normal">
        <li><a>Home</a></li>
      <li><a>Recipes</a></li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
      </ul>
    </div>
    <a className=" text-[#150B2B]  text-xs lg:text-3xl font-normal lg:font-bold ">Recipe Calories</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[#150B2B] text-base font-normal">
    <li><a>Home</a></li>
      <li><a>Recipes</a></li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
    </ul>
  </div>
  <div className="navbar-end flex gap-4 flex-1">
    <div className='flex  w-full lg:w-[260px] bg-[#150B2B] bg-opacity-5 h-[40px]  justify-between items-center gap-3 rounded-[50px] pt-3 pb-3 pl-5 pr-5'>
    <IoIosSearch className='text-4xl' />
    <input type="text"  placeholder="search" className=" w-full max-w-xs border-none outline-none bg-[#150B2B] bg-opacity-0" />
    
    </div>
    <div className='w-[40px] h-[40px] rounded-full flex justify-center items-center bg-[#0BE58A]'>
        <IoMdContact className='text-[35px]' />
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;