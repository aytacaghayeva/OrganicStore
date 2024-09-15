// import { useState } from "react";
// import "./Shop.css";
// import Apple from "./images/apple.png";
// import Brocoli from "./images/broccoli--300x300.png";
// import BrownRice from "./images/brownRice.png";
// import Cabbage from "./images/cabbage-300x300.png";
// import Capsicum from "./images/capsicum.png";
// import Cardamom from "./images/cardamom-300x300.png";
// import Chickpea from "./images/chickpea-300x300.png";
// import Clove from "./images/clove-300x300.png";
// import CoffeBean from "./images/coffee-bean-300x300.png";
// import CoffeePowder from "./images/coffeePowder.png";
// import Garlic from "./images/garlic-300x300.png";
// import Grapes from "./images/grapes-300x300.png";
// import GreenGram from "./images/greenGram.png";
// import Onion from "./images/onion-300x300.png";
// import Kiwi from "./images/kiwi-300x300.png";
// import Orange from "./images/orange-300x300.png";


// function Shop({ toggleCartItem, cart }) {
//     const [sortOption, setSortOption] = useState("menu_order");

//     let products = [
//         { id: 1, name: "Apple", price: 45.21, salePrice: 21.85, image: Apple },
//         { id: 2, name: "Broccoli", price: 44.85, salePrice: 39.49, image: Brocoli },
//         { id: 3, name: "Brown Rice", price: 58.99, salePrice: 46.99, image: BrownRice },
//         { id: 4, name: "Cabbage", price: 32.21, salePrice: 16.44, image: Cabbage },
//         { id: 5, name: "Capsicum", price: 24.85, salePrice: 19.49, image: Capsicum },
//         { id: 6, name: "Cardamom", price: 54.25, salePrice: 35.74, image: Cardamom },
//         { id: 7, name: "Chickpea", price: 56.85, salePrice: 46.58, image: Chickpea },
//         { id: 8, name: "Clove", price: 35.85, salePrice: 24.85, image: Clove },
//         { id: 9, name: "Coffee Beans", price: 44.25, salePrice: 25.12, image: CoffeBean },
//         { id: 10, name: "Coffee Powder", price: 44.85, salePrice: 39.49, image: CoffeePowder },
//         { id: 11, name: "Garlic", price: 29.99, salePrice: 19.99, image: Garlic },
//         { id: 12, name: "Grapes", price: 44.85, salePrice: 13.15, image: Grapes },
//         { id: 13, name: "Green Gram", price: 84.85, salePrice: 75.49, image: GreenGram },
//         { id: 14, name: "Kiwi", price: 56.85, salePrice: 19.49, image: Kiwi },
//         { id: 15, name: "Onion", price: 42.95, salePrice: 32.14, image: Onion },
//         { id: 16, name: "Orange", price: 39.14, salePrice: 19.25, image: Orange },
//     ];

//     const sortProducts = (products, option) => {
//         switch (option) {
//             case "popularity":
//                 return products.slice().sort((a, b) => b.popularity - a.popularity);
//             case "rating":
//                 return products.slice().sort((a, b) => b.rating - a.rating);
//             case "date":
//                 return products.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
//             case "price":
//                 return products.slice().sort((a, b) => a.salePrice - b.salePrice);
//             case "price-desc":
//                 return products.slice().sort((a, b) => b.salePrice - a.salePrice);
//             default:
//                 return products;
//         }
//     };

//     const handleSortChange = (event) => {
//         setSortOption(event.target.value);
//     };

//     const sortedProducts = sortProducts(products, sortOption);

//     return (
//         <div className="shop-div">
//             <div className="shop">
//                 <h3>Shop</h3>
//             </div>
//             <div className="sortingShop">
//                 <div>
//                     <p className="shop-paragraph">Showing all results</p>
//                 </div>
//                 <form>
//                     <select name="orderby" className="orderby" aria-label="Shop order" value={sortOption} onChange={handleSortChange}>
//                         <option value="menu_order">Default sorting</option>
//                         <option value="popularity">Sort by popularity</option>
//                         <option value="rating">Sort by average rating</option>
//                         <option value="date">Sort by latest</option>
//                         <option value="price">Sort by price: low to high</option>
//                         <option value="price-desc">Sort by price: high to low</option>
//                     </select>
//                 </form>
//             </div>
//             <div className="shop-card">
//                 {sortedProducts.map(product => (
//                     <div className="shopping-Products" key={product.id}>
//                         <div><p className="sale">Sale!</p></div>
//                         <div className="best-product">
//                             <img src={product.image} alt={product.name} style={{ width: '300px' }} />
//                             <h3>{product.name}</h3>
//                             <h3 className="prices">
//                                 <span className="price">${product.price.toFixed(2)}</span>
//                                 ${product.salePrice.toFixed(2)}
//                             </h3>
//                             <button
//                                 className="orange"
//                                 onClick={() => toggleCartItem(product.name)}
//                             >
//                                 {cart[product.name] ? 'Remove from Cart' : 'Add to Cart'}
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Shop;


import React, { useState } from 'react';
import './Shop.css';
import Apple from './images/apple.png';
import Brocoli from './images/broccoli--300x300.png';
import BrownRice from './images/brownRice.png';
import Cabbage from './images/cabbage-300x300.png';
import Capsicum from './images/capsicum.png';
import Cardamom from './images/cardamom-300x300.png';
import Chickpea from './images/chickpea-300x300.png';
import Clove from './images/clove-300x300.png';
import CoffeBean from './images/coffee-bean-300x300.png';
import CoffeePowder from './images/coffeePowder.png';
import Garlic from './images/garlic-300x300.png';
import Grapes from './images/grapes-300x300.png';
import GreenGram from './images/greenGram.png';
import Onion from './images/onion-300x300.png';
import Kiwi from './images/kiwi-300x300.png';
import Orange from './images/orange-300x300.png';

function Shop({ toggleCartItem, cart }) {
  const [sortOption, setSortOption] = useState('menu_order');

  const products = [
    { id: 1, name: 'Apple', price: 45.21, salePrice: 21.85, image: Apple },
    { id: 2, name: 'Broccoli', price: 44.85, salePrice: 39.49, image: Brocoli },
    { id: 3, name: 'Brown Rice', price: 58.99, salePrice: 46.99, image: BrownRice },
    { id: 4, name: 'Cabbage', price: 32.21, salePrice: 16.44, image: Cabbage },
    { id: 5, name: 'Capsicum', price: 24.85, salePrice: 19.49, image: Capsicum },
    { id: 6, name: 'Cardamom', price: 54.25, salePrice: 35.74, image: Cardamom },
    { id: 7, name: 'Chickpea', price: 56.85, salePrice: 46.58, image: Chickpea },
    { id: 8, name: 'Clove', price: 35.85, salePrice: 24.85, image: Clove },
    { id: 9, name: 'Coffee Beans', price: 44.25, salePrice: 25.12, image: CoffeBean },
    { id: 10, name: 'Coffee Powder', price: 44.85, salePrice: 39.49, image: CoffeePowder },
    { id: 11, name: 'Garlic', price: 29.99, salePrice: 19.99, image: Garlic },
    { id: 12, name: 'Grapes', price: 44.85, salePrice: 13.15, image: Grapes },
    { id: 13, name: 'Green Gram', price: 84.85, salePrice: 75.49, image: GreenGram },
    { id: 14, name: 'Kiwi', price: 56.85, salePrice: 19.49, image: Kiwi },
    { id: 15, name: 'Onion', price: 42.95, salePrice: 32.14, image: Onion },
    { id: 16, name: 'Orange', price: 39.14, salePrice: 19.25, image: Orange },
  ];

  const sortProducts = (products, option) => {
    switch (option) {
      case 'popularity':
        return products.slice().sort((a, b) => b.popularity - a.popularity);
      case 'rating':
        return products.slice().sort((a, b) => b.rating - a.rating);
      case 'date':
        return products.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
      case 'price':
        return products.slice().sort((a, b) => a.salePrice - b.salePrice);
      case 'price-desc':
        return products.slice().sort((a, b) => b.salePrice - a.salePrice);
      default:
        return products;
    }
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const sortedProducts = sortProducts(products, sortOption);

  return (
    <div className="shop-div">
      <div className="shop">
        <h3>Shop</h3>
      </div>
      <div className="sortingShop">
        <form>
          <select name="orderby" className="orderby" aria-label="Shop order" value={sortOption} onChange={handleSortChange}>
            <option value="menu_order">Default sorting</option>
            <option value="popularity">Sort by popularity</option>
            <option value="rating">Sort by average rating</option>
            <option value="date">Sort by latest</option>
            <option value="price">Sort by price: low to high</option>
            <option value="price-desc">Sort by price: high to low</option>
          </select>
        </form>
      </div>
      <div className="shop-card">
        {sortedProducts.map(product => (
          <div className="shopping-Products" key={product.id}>
            <div><p className="sale">Sale!</p></div>
            <div className="best-product">
              <img src={product.image} alt={product.name} style={{ width: '300px' }} />
              <h3>{product.name}</h3>
              <h3 className="prices">
                <span className="price">${product.price.toFixed(2)}</span>
                ${product.salePrice.toFixed(2)}
              </h3>
              <button
                className="orange"
                onClick={() => toggleCartItem(product.name)}
              >
                {cart[product.name] ? 'Remove from Cart' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
