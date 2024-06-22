import './App.css';
import Filters from './components/Filters';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import { useState } from 'react';
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if(existingItem){
        return prevItems.map((item) => 
          item.id === product.id ? {...item, quantity: item.quantity + 1} : item
        );
      } 
      return [...prevItems, {...product, quantity:1}]
    });
  };

  const updateCartItem = (productId, quantity) => {
    setCartItems((prevItems) => {
      prevItems.map((item) => 
        item.id === productId ? {...item, quantity: parseInt(quantity)} : item
      );
    })
  };

  const removeCartItem = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <BrowserRouter>
      <div className='app'>
        {/* <Link to ="/">TeeRex Store</Link> */}
        {/* <Link to ="/cart">({cartItems.length})</Link> */}

        <Routes>
          <Route exact path = "/" element={<HomePage addToCart={addToCart} cartItems={cartItems}/>}>
            
          </Route>
          <Route path = '/cart' element={<CartPage cartItems={cartItems} updateCartItem={updateCartItem} removeCartItem={removeCartItem} />}>
            
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
