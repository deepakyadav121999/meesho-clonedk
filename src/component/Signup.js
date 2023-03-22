import React, { useState } from 'react'
import '../styles/Signup.css'
import{Link } from 'react-router-dom'
import { useContext } from "react";
import {DataAppContext} from './Context'
import Login from './Login'
function Signup() 
{
  const cart = useContext(DataAppContext)
const {cartData,setCartData,loginStaus, setLoginStatus} =cart
  const initialValue ={
    name:'',
    email:'',
    mobile:'',
    password: '',
    cpassword:''
  }
  const[disp,setdisp] =useState('')
    const[signupValue, setSignupValue]= useState(initialValue)
    const[status,setStatus] =useState(false)
  
    const signupSubmit =()=>{
    if(signupValue.password === signupValue.cpassword && signupValue.password!==''){
        setStatus(true)
        let d = JSON.parse(localStorage.getItem('users')) || []
        localStorage.setItem('users', JSON.stringify([...d,signupValue]))
          setSignupValue(initialValue)
          setdisp('SuccessFully Ragistered')
     }
     else{
      setStatus(true)
      setdisp('All the fields are mandotary')
     }
    }
      
    
 

  return (
    <>
    
      <div className='signup_container'>
      <div className="signup_name ">
          <p>Name:</p>
          <input type="text" className='signupipmove ipcont' onChange={(e)=>setSignupValue({...signupValue,
           name:e.target.value})} value={signupValue.name}/>
       </div>
      

       <div className="signup_email">
           <p>Email:</p>
           <input type="text"  className='signupipmove ipcont'onChange={(e)=>setSignupValue({...signupValue,
         email:e.target.value})} value={signupValue.email}/>
       </div>
     

       <div className="signup_mobile">
           <p>Mobile:</p>
           <input type="text" className='signupipmove ipcont'onChange={(e)=>setSignupValue({...signupValue,
         mobile:e.target.value})} value={signupValue.mobile}/>
       
       </div>
     
       <div className="signup_password">
           <p>Password</p>
           <input type="password" className='signuppwd ipcont'onChange={(e)=>setSignupValue({...signupValue,
         password:e.target.value})} value={signupValue.password}/>
       </div>
       

       <div className="signup_confirmpassword">
           <p>Confirm Password</p>
           <input type="text" className='ipcont' onChange={(e)=>setSignupValue({...signupValue,
         cpassword:e.target.value})} value={signupValue.cpassword}/>
       </div>
      


       <div className="signup_buttons">
           <button className='signup_btn1' onClick={signupSubmit} >Sign Up</button>

          <Link to={'/login'}> <button className='signup_btn2'>Already Have an account</button></Link>
       </div>
       {status && <div> <h2>{disp}</h2></div>}

</div>
    
    
    </>
  )
}


export default Signup