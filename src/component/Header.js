import React, { useEffect, useState } from 'react'
import '../styles/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import InstallMobileIcon from '@mui/icons-material/InstallMobile';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import {DataAppContext} from './Context'

function Header() {
  const cart = useContext(DataAppContext)
  const {cartData,setCartData,lth} =cart




  return (
    <>
  <div className="header">
          <div className="header_left">
          <Link to={'/'} style={{textDecoration: 'none'}}>  <p className='meesho'>meesho</p></Link>
                <div className="input">
                    <SearchIcon className='icon'/>
                <input type="text" placeholder='Try Saree,Kurti or Search by Product Code'/>
                </div>
               
          </div>
          <div className="header_right">
              <div className="dnd">
                 <InstallMobileIcon className='icon'/>
                <p>Download App</p>
              </div>
              <p>Become a Supplier</p>
              <div className="profile">
                <PermIdentityIcon className='icon move clr'/>
                <Link to={'/login'} style={{textDecoration: 'none'}} ><p className='pprofile'>Profile</p></Link>  
              </div>
              <div className="cart">
               
                <Link to={'/cart'} style={{textDecoration: 'none'}}>
                 <ShoppingCartIcon className='icon move'/> 
                  <p className='cartlink move'>Cart <p className='movement_head'> {lth}</p></p></Link>
              </div>
          </div>
  </div>
     <div className="header2">
      <p className='hov'>Women Ethnic</p>
      <p  className='hov'>Women Western</p>
      <p  className='hov'>Men</p>
      <p  className='hov'>Kids</p>
      <p  className='hov'>Home & Kitchen</p>
      <p  className='hov'>Beauty & Health</p>
      <p  className='hov'>Jwellery & Accessories</p>
      <p  className='hov'>Bags & Footwear</p>
      <p  className='hov'>Electronics</p>
     </div>


  </>
  )
}

export default Header