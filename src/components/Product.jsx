import React, {useContext} from 'react';
import {BsPlus,BsEyeFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const Product = ({product}) => {
  const {id, image, category, title, price} = product
  const {addToCart} = useContext(CartContext)

  return (
   <div className='mt-10'>
    <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='w-[200px] mx-auto flex justify-center items-center'>
          <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt="" />
        </div>
        <div className='absolute top-6 right-6 group-hover:right-2 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button onClick={() => addToCart(product, id)}>
            <div className='flex justify-center items-center text-white w-8 h-8 bg-red-500'>
            <BsPlus className='text-3xl'/>
            </div>
          </button>
          <Link to={`/product/${id}`} className='w-8 h-8 bg-white flex justify-center items-center text-primary drop-shadow-xl' ><BsEyeFill/></Link>
        </div>
      </div>
    
   </div>

    <div>
      <div>{category}</div>
      <Link to={`/product/${id}`}>
        <h2 className='font-semibold mb-1'>{title}</h2>
      </Link>
      <div>{price}</div>
    </div>

   </div>
  )
};

export default Product;
