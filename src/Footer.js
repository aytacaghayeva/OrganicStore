import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./images/organicLogo.png"
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faPinterestP } from "@fortawesome/free-brands-svg-icons";


function Footer() {
  return (
    <div className="footer">
      <div>
        <img src={Logo} alt="Logo" className="footLogo"></img>
        <div className="street">
          <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: 'orange' }} />
          <span className="white">123, Main street, Anytown ST 12345.</span>
        </div>
        <div className="number">
          <FontAwesomeIcon icon={faPhone} style={{ color: 'orange' }} />
          <span className="white">+123 456 7890</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} style={{ color: 'orange' }} />
          <span className="white">hello@example.com</span>
        </div>
        <div className="media">
          <FontAwesomeIcon icon={faFacebookF} style={{ color: 'orange' }} className="socialMedia" />
          <FontAwesomeIcon icon={faInstagram} style={{ color: 'orange' }} className="socialMedia" />
          <FontAwesomeIcon icon={faTwitter} style={{ color: 'orange' }} className="socialMedia" />
          <FontAwesomeIcon icon={faPinterestP} style={{ color: 'orange' }} className="socialMedia" />
        </div>
      </div>
      <div className="footerHeader">
        <h3 className="footHeader">Information</h3>
        <div className="footList">
          <p className="headList">About Us</p>
          <p className="headList">Store Location</p>
          <p className="headList">Contact Us</p>
          <p className="headList">Shipping&Delivery</p>
          <p className="headList">Latest News</p>
          <p className="headList">Our Sitemap</p>
        </div>
      </div>
      <div className="footerHeader">
        <h3 className="footHeader">Services</h3>
        <div className="footList">
          <p className="headList">Privacy Policy</p>
          <p className="headList">Terms of Sale</p>
          <p className="headList">Customer Service</p>
          <p className="headList">Delivery Information</p>
          <p className="headList">Payments</p>
          <p className="headList">Saved Cards</p>
        </div>
      </div>
      <div className="footerHeader">
        <h3 className="footHeader">Newsletter</h3>
        <p className="subscribe">Subscribe to our mailing list to get the new updates!</p>
        <form>
          <input placeholder="Enter your email" className="email" required></input>
          <button className="sendBtn">Send</button>
        </form>

      </div>
    </div>
  )
}

export default Footer;