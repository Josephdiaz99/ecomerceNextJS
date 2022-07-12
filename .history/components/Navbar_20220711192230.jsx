import React from 'react'
import Link from 'next/link'
import {AiOutlineShopping} from 'react-icons'

const Navbar = () => {
  return (
    <div className='navbar-container' >
      <p className='logo' >
        <Link href='/' >
          Audifonos JEDB
        </Link>
      </p>
      <button type='button' className='cart-icon' onClick=''>
        <AiOutlineShopping/>
      </button>
    </div>
  )
}

export default Navbar