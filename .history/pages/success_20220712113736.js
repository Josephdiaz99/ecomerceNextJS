import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import {bsBagCheckFill} from 'react-icons/bs'
import {useRouter} from 'next/router'
import { useStateContext } from '../context/StateContext'

const Success = () => {

    const {setCartItems,setTotalPrice,setTotalQuantities}=useStateContext();
    const [order, setOrder] = useState(null)

  return (
    <div className='success-wrapper' >
        <div  className='success' >
            <p className='icon'>
                 <bsBagCheckFill/>
            </p>
            <h2>Gracias por tu Orden!</h2>
        </div>
    </div>
  )
}

export default Success