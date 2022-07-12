
import React,{useRef} from 'react'
import Link from 'next/link'
import {AiOutlineMinus,AiOutlinePlus,AiOutlineLeft,AiOutlineShopping}from 'react-icons/ai'
import {TiDeleteOutline} from 'react-icons/ti'
import toast from 'react-hot-toast'
import { useStateContext } from '../context/StateContext'
import { urlFor } from '../lib/client'

const Cart = () => {

  const cartRef=useRef();
  const {totalPrice,totalQuantities,cartItems,setShowCart}=useStateContext()

  return (
    <div className='cart-wrapper' ref={cartRef} >
      <div className='cart-container' > 
        <button
        type='button'
        className='cart-heading'
        onClick={()=>setShowCart(false)}
        >
          <AiOutlineLeft/>
          <span className='heading' >Tu Carrito</span>
          <span className='cart-num-items' >({totalQuantities}items)</span>
        </button>
      </div>
    </div>
  )
}

export default Cart