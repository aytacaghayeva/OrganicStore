import "./About.css";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AboutPicture from "./images/about-picture.png";
import Eddie from "./images/eddie.jpg";
import Mary from "./images/mary.jpg";
import Charles from "./images/charles.jpg";
import Patricia from "./images/patricia.jpg";


function About() {
    return (
        <div className="about-div">
            <div className="aboutUs">
                <h2> About Us</h2>
            </div>
            <div className="about-Pic">
                <div>
                    <img src={AboutPicture} alt="" style={{ width: '400px', height: "500px" }}></img>
                </div>
                <div>
                    <h2 className="aboutTitle">What We Stand For</h2>
                    <p className="aboutParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <p className="aboutParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales, urna quis blandit bibendum, dolor arcu rhoncus diam, ac rutrum sem ligula sed enim. In hac habitasse platea dictumst. Vivamus ac vestibulum sapien. In placerat at nisl in tincidunt. </p>
                    <button className="orange">Know More</button>
                </div>
            </div>
            <div className="farmers">
                <h2 className="aboutTitle">Our Farmers</h2>
                <div className="farmerTeam">
                    <div className="team-card">
                        <img src={Eddie} alt="" className="teamImg"></img>
                        <h3 className="farmerName">Eddie Johnson</h3>
                        <p className="farmerWork">Greenhouse</p>
                        <div className="media">
                            <FontAwesomeIcon icon={faFacebookF} style={{ color: 'orange' }} className="socialMedia" />
                            <FontAwesomeIcon icon={faInstagram} style={{ color: 'orange' }} className="socialMedia" />
                            <FontAwesomeIcon icon={faTwitter} style={{ color: 'orange' }} className="socialMedia" />
                        </div>
                    </div>
                    <div className="team-card">
                        <img src={Mary} alt="" className="teamImg"></img>
                        <h3 className="farmerName">Mary Wright</h3>
                        <p className="farmerWork">Nursery</p>
                        <div className="media">
                            <FontAwesomeIcon icon={faFacebookF} style={{ color: 'orange' }} className="socialMedia" />
                            <FontAwesomeIcon icon={faInstagram} style={{ color: 'orange' }} className="socialMedia" />
                            <FontAwesomeIcon icon={faTwitter} style={{ color: 'orange' }} className="socialMedia" />
                        </div>
                    </div>
                    <div className="team-card">
                        <img src={Charles} alt="" className="teamImg"></img>
                        <h3 className="farmerName">Charles Maple</h3>
                        <p className="farmerWork">Pulses</p>
                        <div className="media">
                            <FontAwesomeIcon icon={faFacebookF} style={{ color: 'orange' }} className="socialMedia" />
                            <FontAwesomeIcon icon={faInstagram} style={{ color: 'orange' }} className="socialMedia" />
                            <FontAwesomeIcon icon={faTwitter} style={{ color: 'orange' }} className="socialMedia" />
                        </div>
                    </div>
                    <div className="team-card">
                        <img src={Patricia} alt="" className="teamImg"></img>
                        <h3 className="farmerName">Patricia Naumann</h3>
                        <p className="farmerWork">Vegetables</p>
                        <div className="media">
                            <FontAwesomeIcon icon={faFacebookF} style={{ color: 'orange' }} className="socialMedia" />
                            <FontAwesomeIcon icon={faInstagram} style={{ color: 'orange' }} className="socialMedia" />
                            <FontAwesomeIcon icon={faTwitter} style={{ color: 'orange' }} className="socialMedia" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}



export default About;