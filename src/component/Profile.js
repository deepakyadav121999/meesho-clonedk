import React from 'react'
import Login from './Login';
import { useContext } from "react";
import {DataAppContext} from './Context'
import '../styles/Panjiyan.css'
function Profile() {
    const cart = useContext(DataAppContext)
    const {loginStaus,setLoginStatus} =cart
    let uz =JSON.parse(localStorage.getItem('users'));
    console.log(uz[0].name)
  return (
    <div >
    { loginStaus ? <div className='profilepanjiyan'>
        <h1>Welcome {uz[0].name}</h1>
        <h1>Email address: {uz[0].email}</h1>
        <h1>Mobile: {uz[0].mobile}</h1>
        <button onClick={()=>{
           setLoginStatus(false)
        }}>Sign-out</button>
    </div>:<Login/>

    }
    </div>
  )
}

export default Profile