
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
            </Routes>
            </Context>
            </BrowserRouter>
          
    </div>
  );
}

export default App;
