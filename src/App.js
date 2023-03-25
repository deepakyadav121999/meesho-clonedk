
import './App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from './component/Header';
import ItemList from './component/ItemList';
import ItemDescription from './component/ItemDescription'
import Context from './component/Context';
import CartPage from './component/CartPage';
import Signup from './component/Signup';
import Login from './component/Login';
import PaymentPage from './component/PaymentPage'
import WomanEthinic from './component/WomanEthinic';
import WomenWestern from './WomenWestern';
import Men from './component/Men';
import Jwellary from './component/Jwellary';
import Bags from './component/Bags';
import Electronics from './component/Electronics';
import Profile from './component/Profile';
import Search from './component/Search';
function App() {

  return (
    <div className="App">
        
            <BrowserRouter>
              <Context>
            <div className="navbar">
            <Header/>
          </div>
         
    
             <Routes>
               <Route path='/paymentpage' element={<PaymentPage/>}/>
             <Route path='/' element={<ItemList/>}/>
             <Route path='/product/:id' element={<ItemDescription/>}/>
             <Route path='/cart' element={<CartPage/>}/>
             <Route path='/login' element={<Login/>}/>
             <Route path='/signup' element={<Signup/>}/>

            <Route path='/womenethinic' element={<WomanEthinic/>}/>
            <Route path='/western' element={<WomenWestern/>}/>
            <Route path='/men' element={<Men/>}/>
            <Route path='/kids' element={<WomenWestern/>}/>
            <Route path='/health' element={<WomenWestern/>}/>
            <Route path='/kitchen' element={<WomenWestern/>}/>
            <Route path='/Jwellery' element={<Jwellary/>}/>
            <Route path='/bags' element={<Bags/>}/>
            <Route path='/Electronics' element={<Electronics/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/search' element={<Search/>}/>
            </Routes>
            </Context>
            </BrowserRouter>
          
    </div>
  );
}

export default App;
