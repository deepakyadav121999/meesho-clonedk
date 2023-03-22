import React from 'react'
import '../styles/PaymentPage.css'
import {Link} from 'react-router-dom'
import { useContext } from "react";
import {DataAppContext} from './Context'
import Login from './Login'
function PaymentPage() {
  const cart = useContext(DataAppContext)
  const {cartData,setCartData,loginStaus, setLoginStatus} =cart
  return (
    <>
{loginStaus?<div className='ptmpage'>
      <p>Your order has been Successfully Placed</p>
      <Link to={'/'}><p>Click here to go main page</p></Link>
      </div>:<Login/>}
    
      </>
  )
}

export default PaymentPage