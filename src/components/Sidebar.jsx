import React from 'react';
import { useContext } from 'react';
import {FaXmark, FaTrash} from 'react-icons/fa6'
import {SidebarContext} from '../contexts/SidebarContext'
import { CartContext } from '../contexts/CartContext';
import CartItem from './CartItem';

const Sidebar = () => {
  const {isOpen, handleClose} = useContext(SidebarContext)
  const {cart, clearCart} = useContext(CartContext)
 

  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      
      <div className='flex items-center justify-between py-6 border-b'>
        <div><h1 className='text-lg'>Shopping Bag (0)</h1></div>
        <div onClick={handleClose}>
          <FaXmark className='text-3xl cursor-pointer'/>
        </div>
      </div>

      <div>
        {cart.map((item) => (
          <CartItem item={item} key={item.id}/>
        ))}
      </div>

        <div className=' flex w-full justify-between items-center'>
          <div className='uppercase font-semibold text-sm'>
            <span className='mr-2'>Total</span> $ 1000
          </div>
          <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'>
            <FaTrash/>
          </div>
        </div>

  </div>
  )
};

export default Sidebar;
