import './index.css';
import React from 'react'
import Header from "./components/Header/Header"
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from "./components/Cart/Cart"
import CartContext from './context/CartContext/CartContext';
import Checkout from './components/Checkout/Checkout';

const App = () => {
  return (

    <div>
<BrowserRouter>
<CartContext>
<Header/>
<NavBar/>
<Routes>
<Route path="/" element = {<ItemListContainer greeting= "Bienvenidos a Kalaka"/>}/>
<Route path="/category/:categoryId" element = {<ItemListContainer greeting= "Bienvenidos a Kalaka"/>}/>
<Route path="/detail/:id" element={<ItemDetailContainer/>} />
<Route path="/carrito" element={<Cart/>} />
<Route path='/checkout' element={<Checkout/>}/>
</Routes>
</CartContext>
</BrowserRouter>
    </div>
  )
}

export default App