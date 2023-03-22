import React from 'react'
 import download from '../images/download.jpg'
 import '../styles/DownloadPage.css'
import { useContext } from "react";
import {DataAppContext} from './Context'


function DownloadPAge() {
    const cart = useContext(DataAppContext)
    const {cartData,setCartData,loginStaus, setLoginStatus} =cart
  return (
    <>
    {loginStaus && <div className="page">
        <div className="page_left">
            <div className='heading'>
            <p className='a'>Lowest Prices</p>
            <p className='a'>Best Quality Shopping</p>
            </div>
            <div className="main">
            <div className='abc'>
                <p className='a'>Free</p>
                <p className='a'>Delivery</p>
            </div>
            <div className='abc'>
                <p className='a'>Cash on</p>
                <p className='a'>Delivery</p>
            </div>
            <div >
                <p className='a'>Easy</p>
                <p className='a'>Return</p>
            </div>
            </div>

            <button id='btn'>Download the Meesho App</button>
        </div>

        <div className="page_right">
            <img src={download} alt="" />
        </div>
    </div>}
   
    </>
  )
}

export default DownloadPAge