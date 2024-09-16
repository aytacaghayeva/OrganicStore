import "./Home.css";
import Vegetables from "./images/vegetables.png";
import Natural from "./images/natural.png";
import Vegetable from "./images/vegetables2.jpg";
import Fruits from "./images/fruits.jpg";
import Cereal from "./images/cereal.jpg";
import Spices from "./images/spices.jpg";
import Coffee from "./images/coffee.jpg";
import CoffeePowder from "./images/coffeePowder.png";
import GreenGram from "./images/greenGram.png";
import BrownRice from "./images/brownRice.png";
import Clove from "./images/clove-300x300.png";
import Capsicum from "./images/capsicum.png";
import FamilyHealthy from "./images/ops-healthy.png";
import AlwaysFresh from "./images/ops-fresh.png";
import FoodSafety from "./images/ops-safety.png";
import Organic from "./images/eggplant.png";
import TestimonialCarousel from "./Testimonal";
import MainOrganic from "./images/ops-welcome-to-organic.png";
import Turmeric from "./images/turmeric.jpg";
import BasketOrganic from "./images/basketorganic.jpg";
import GreenTea from "./images/green-tea.jpg";
import { Link } from 'react-router-dom';


function Home({ toggleCartItem, cart }) {
  const products = [
    { id: 1, name: "Coffee Powder", price: 44.85, salePrice: 39.49, image: CoffeePowder },
    { id: 2, name: "Green Gram", price: 84.85, salePrice: 75.49, image: GreenGram },
    { id: 3, name: "Brown Rice", price: 58.52, salePrice: 46.49, image: BrownRice },
    { id: 4, name: "Clove", price: 35.85, salePrice: 24.49, image: Clove },
    { id: 5, name: "Capsicum", price: 24.53, salePrice: 19.26, image: Capsicum },
  ];
  return (
    <div className="home">
      <div className="rich-flavour">
        <div className="nature">
          <img src={Natural} alt="natural" className="natural"></img>
          <h2 className="rich">Rich Flavours Fresh From The Farm</h2>
          <p className="home-p">We supply high-quality organic food</p>
          <Link to="/shop" className="orange">Shop now</Link>
        </div>
        <div>
          <img src={Vegetables} alt="vegetables" className="vegetable"></img>
        </div>
      </div>
      <div className="categories">
        <div>
          <h2 className="category-title">Shop By Categories</h2>
        </div>
        <div className="category-images">
          <div>
            <img src={Vegetable} alt="" className="category"></img>
            <p className="category-text">Vegetables</p>
          </div>
          <div>
            <img src={Fruits} alt="" className="category"></img>
            <p className="category-text">Fruits</p>
          </div>
          <div>
            <img src={Cereal} alt="" className="category"></img>
            <p className="category-text">Cereals and Grains</p>
          </div>
          <div>
            <img src={Spices} alt="" className="category"></img>
            <p className="category-text">Herbs and Spices</p>
          </div>
          <div>
            <img src={Coffee} alt="" className="category"></img>
            <p className="category-text">Coffee</p>
          </div>
        </div>
      </div>
      <div className="best-selling">
        <h2 className="category-title">Best Selling Products</h2>
        <div className="best-pictures">
          {products.map(product => (
            <div className="best-card" key={product.id}>
              <div><p className="sale">Sale!</p></div>
              <div className="best-product">
                <img src={product.image} alt={product.name} style={{ width: '200px' }} />
                <h3>{product.name}</h3>
                <h3 className="prices"><span className="price">${product.price}</span> ${product.salePrice}</h3>
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
        <Link to="/shop" className="orange">Explore More</Link>
      </div>
      <div className="home-add">
        <div className="add-texts">
          <p className="addText weekend">Weekend Sale</p>
          <h1 className="getUp">Get Up to 15% Off Vegetables</h1>
          <p className="addText supply">We supply high-quality organic food</p>
          <Link to="/shop" className="orange">Shop Now</Link>
        </div>
      </div>
      <div className="features-container">
        <div>
          <h1 className="category-title">Welcome To Organic Store</h1>
        </div>
        <div className="features">
          <div className="featureFirst">
            <div className="feature first">
              <img src={FamilyHealthy} alt="Family Healthy" className="feature-img" />
              <h3 className="feature-title">Family Healthy</h3>
              <p className="feature-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="feature">
              <img src={AlwaysFresh} alt="Always Fresh" className="feature-img" />
              <h3 className="feature-title">Always Fresh</h3>
              <p className="feature-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="featureSecond">
            <div className="feature" >
              <img src={FoodSafety} alt="Food Safety" className="feature-img" />
              <h3 className="feature-title">Food Safety</h3>
              <p className="feature-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="feature first">
              <img src={Organic} alt="100% Organic" className="feature-img" />
              <h3 className="feature-title">100% Organic</h3>
              <p className="feature-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

        </div>
        <div className="image-container">
          <img src={MainOrganic} alt="" className="main-image" />
        </div>
      </div>
      <div className="newsletter-container">
        <div className="newsletter-box">
          <div className="subscribe-section">
            <div className="subscribe-text">
              <h2 className="subscribeTitle">Subscribe To Our Newsletter <br></br>And Get Daily Offers</h2>
              <form className="email-box">
                <input type="email" placeholder="Enter your email" className="emailInput" required />
                <button className="orange">Send</button>
              </form>
            </div>
          </div>
          <div className="cta-section">
            <h2 className="cta-title">Choose The Healthier Way Of Life</h2>
            <p>Return To Purity</p>
          </div>
        </div>
      </div>
      <TestimonialCarousel />
      <div className="ourBlog">
        <h2 className="category-title" style={{ "textAlign": "center" }}>From Our Blog</h2>
        <div className="centerBlog">
          <div className="blogCard">
            <img src={Turmeric} alt="turmeric" className="blogImg"></img>
            <div className="blogTxt">
              <h3 className="blogTitle">Benefits of Organic Turmeric Powder </h3>
              <p>December 8, 2021</p>
            </div>
          </div>
          <div className="blogCard">
            <img src={BasketOrganic} alt="turmeric" className="blogImg"></img>
            <div className="blogTxt">
              <h3 className="blogTitle">Organic is Healthy: Just a Fad?</h3>
              <p>December 8, 2021</p>
            </div>
          </div>
          <div className="blogCard">
            <img src={GreenTea} alt="turmeric" className="blogImg"></img>
            <div className="blogTxt">
              <h3 className="blogTitle">Benefits of Organic Green Tea</h3>
              <p>December 8, 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;