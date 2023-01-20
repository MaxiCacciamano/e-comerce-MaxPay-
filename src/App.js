import NavBar from './Components/NavBar/NavBar.jsx'
import {Route, Routes } from 'react-router-dom';
import './App.css';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './Components/CartWidget/CartWidget.jsx';
import  {Cart}  from './Components/Cart/Cart.jsx';
import { Checkout } from './Components/Checkout/Checkout.jsx';

function App() {
  return (     
    <div className="App">
         <NavBar/>
         <Routes>
         <Route path="/" element={<ItemListContainer />}/>
         <Route path="/category/:CategoryId" element={<ItemListContainer />}/>
         <Route path="/Item/:idProd" element={<ItemDetailContainer/>}/>
         <Route path="/cart" element={<Cart/>}/>
         <Route path="/checkout" element={<Checkout/>}/>
         </Routes>
    </div>
  );
}

export default App;
