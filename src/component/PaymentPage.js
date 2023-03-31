import React from 'react'
import '../styles/PaymentPage.css'
import {Link} from 'react-router-dom'
import { useContext,useState } from "react";
import {DataAppContext} from './Context'
import Login from './Login'
function PaymentPage() {
  const [stttus,setstttus] =useState(true)
  const cart = useContext(DataAppContext)
  const {loginStaus} =cart
  return (
    <>
   {loginStaus? <div>
   {stttus? <div className='ptmpage'>
      <p>Choose payment Method</p>
      <label for='case'>Case on Delevery</label>
       <input type ='radio' id='ppp' value='case' name="modeofpayment" />
       <label for='upi'>upi</label>
       <input type ='radio' id='ppp' value='upi' name='modeofpayment'/>
       <button onClick={()=>setstttus(false)}>Confirm Order</button>

    
      </div>:<div>
        <h2>Your Order has successfully placed</h2>
      <Link to={'/'}><p>Click here to go main page</p></Link>
        </div>}
    </div>:<Login/>}

    
      </>
  )
}

export default PaymentPage