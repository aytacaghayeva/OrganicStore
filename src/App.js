import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Shop from './Shop';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';

function App() {
  const [cart, setCart] = useState({});

  const toggleCartItem = (productName) => {
    setCart(prevCart => {
      const currentQuantity = prevCart[productName] || 0;
      const newQuantity = currentQuantity === 0 ? 1 : 0;
      return { ...prevCart, [productName]: newQuantity };
    });
  };

  const itemCount = Object.values(cart).reduce((acc, quantity) => acc + quantity, 0);

  return (
    <BrowserRouter>
      <div className="App">
        <Header itemCount={itemCount} />
        <Routes>
          <Route path="/" element={<Home toggleCartItem={toggleCartItem} cart={cart} />} />
          <Route path="/shop" element={<Shop toggleCartItem={toggleCartItem} cart={cart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
