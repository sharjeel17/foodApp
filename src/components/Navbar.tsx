import React from 'react'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiFillTag } from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaWallet, FaUserFriends } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'
type Props = {}

const Navbar = (props: Props) => {
  const [nav, setNav] = useState(false);

  return (
    //Parent container for navigation
    <div className="max-w-[1640px] mx-auto p-4 flex justify-between items-center">

      {/* LEFT SIDE TOP*/}
      <div className="flex items-center">
        {/* Bring side navbar out on click */}
        <div onClick={() => setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 self-center">
          Best<span className="font-bold">Eats</span> 
        </h1>
        {/* Container taking up only needed space and has flex children */}
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">PickUp</p>
        </div>
      </div>

      {/* SEARCH BAR TOP MIDDLE*/}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px]
      sm:w-[300px] md:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20}/>
        <input className="bg-transparent w-full p-1 focus:outline-none" type="text" placeholder="Search foods"/>
      </div>

      {/* Cart TOP RIGHT*/}
      <div>
        <button className="bg-black text-white hidden md:flex items-center 
        py-1 rounded-full">
          <BsFillCartFill size={20} className="mr-2"/> Cart
        </button>
      </div>

      {/* MOBILE MENU */}

      {/* Black Overlay only shown when nav set to true otherwise empty */}
      {nav ? <div className="bg-black/80 fixed w-full h-full z-10 top-0 left-0">
      </div> : <></>}

      {/* Left Side Popup*/}
      {/* Fixed position for side navbar and bring out navbar only when nav is true
      duration will decide how long it takes to get from -100 to 100 and from 100 to -100 */}
      <div className={ nav ? "bg-white z-10 fixed top-0 left-0 w-[300px] h-full duration-300" 
      : "bg-white z-10 fixed top-0 left-[-100%] w-[300px] h-full duration-300" } >
        <AiOutlineClose onClick={() => setNav(!nav)} size={25} className="cursor-pointer absolute top-5 right-4"/>
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        {/* navbar elements below Name and Close*/}
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex"> <TbTruckDelivery size={25} className="mr-4"/> Orders </li>
            <li className="text-xl py-4 flex"> <MdFavorite size={25} className="mr-4"/> Favorites </li>
            <li className="text-xl py-4 flex"> <FaWallet size={25} className="mr-4"/> Wallet </li>
            <li className="text-xl py-4 flex"> <MdHelp size={25} className="mr-4"/> Help </li>
            <li className="text-xl py-4 flex"> <AiFillTag size={25} className="mr-4"/> Promotions </li>
            <li className="text-xl py-4 flex"> <BsFillSaveFill size={25} className="mr-4"/> Best Ones </li>
            <li className="text-xl py-4 flex"> <FaUserFriends size={25} className="mr-4"/> Invite Friends </li>
          </ul>
        </nav>
      </div>

    </div>
  )
}

export default Navbar