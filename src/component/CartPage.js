import React, { useState } from 'react'
import { useContext,useEffect } from "react";
import {DataAppContext} from './Context'
import Cart from './Cart';
import Login from './Login';
import '../styles/Cartpage.css'
import {Link} from 'react-router-dom'

function CartPage() {
    const cart = useContext(DataAppContext)
const {cartData,setCartData,loginStaus,total,settotal,setlth} =cart
 const[beta,setbeta] =useState(false)


useEffect(()=>{
  let b=  JSON.parse( localStorage.getItem('products'))
  b &&  setCartData(b)
},[beta])

const alft =()=>{
  if(total>0){
    localStorage.removeItem('products')
    setCartData('')
    settotal(0)
    setlth(0)
  }
  else{
    alert('you dont have any product to by')
  }
}

  return (
    <>
{loginStaus ?<div className='cartpage_main'>
    <div>
      { cartData ? cartData.map((item,index)=>{
      return <div className="cartpage_left">
   <Cart img={item.image} name={item.title} price={item.price} id={index} setbeta={setbeta} beta={beta}/>
  </div>
      }):<div></div>
      }
    </div>

        
            
           
       
    <div className='cartpage_right'>
          
           <p className='crtpagettl'>Total Price: ₹{total &&(parseInt(total, 10))}</p>
           <p className='crtpagettl'>Total Discount: ₹100 
           </p>
           <p>Total you have to pay <span className='spncrtpagettl'>₹{total &&(parseInt(total, 10))}</span> <span>₹{total && (parseInt(total, 10))-10}</span></p>
           <Link to={'/paymentpage'} style={{textDecoration: 'none'}} >
            <p className='ttlbtnprice' onClick={alft}> Proceed To Checkout</p>
           </Link>
           </div>
     </div>:<Login/> 
}
    
</>
  )
}
export default CartPage