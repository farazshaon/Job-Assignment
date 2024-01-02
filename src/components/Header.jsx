import React, { useContext } from 'react';
import Sidebar from './Sidebar';
import { SidebarContext } from '../contexts/SidebarContext';
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {

  const {isOpen, setIsOpen} = useContext(SidebarContext)

  return (
    <header className='bg-pink-200 flex justify-between items-center px-5 py-3'>
      <div>
        <h3 className='text-4xl font-bold text-darkGrayishBlue'>Shop</h3>
      </div>
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer text-3xl'>
        <FaCartShopping/>
        <Sidebar/>
      </div>
      

    </header>
  )

};

export default Header;
