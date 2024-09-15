import "./About.css";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AboutPicture from "./images/about-picture.png";
import Eddie from "./images/eddie.jpg";
import Mary from "./images/mary.jpg";
import Charles from "./images/charles.jpg";
import Patricia from "./images/patricia.jpg";
import React, { useState, useEffect } from 'react';

function About() {
    const [products, setProducts] = useState(0);
    const [customers, setCustomers] = useState(0);
    const [reviews, setReviews] = useState(0);

    const targetProducts = 4000;
    const targetCustomers = 8000;
    const targetReviews = 35;

    const duration = 2000;
    const intervalTime = 50;

    useEffect(() => {
        let startTime = Date.now();
        let interval = setInterval(() => {
            let elapsed = Date.now() - startTime;
            let progress = Math.min(elapsed / duration, 1);

            setProducts(Math.round(targetProducts * progress));
            setCustomers(Math.round(targetCustomers * progress));
            setReviews(Math.round(targetReviews * progress));

            if (progress === 1) clearInterval(interval);
        }, intervalTime);

        return () => clearInterval(interval);
    }, [targetProducts, targetCustomers, targetReviews]);

    return (
        <div className="about-div">
            <div className="aboutUs">
                <h2> About Us</h2>
            </div>
            <div className="about-Pic">
                <div>
                    <img src={AboutPicture} alt="" style={{ width: '400px', height: "500px" }}></img>
                </div>
                <div className="aboutTXT">
                    <h2 className="aboutTitle">What We Stand For</h2>
                    <p className="aboutParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <p className="aboutParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales, urna quis blandit bibendum, dolor arcu rhoncus diam, ac rutrum sem ligula sed enim. In hac habitasse platea dictumst. Vivamus ac vestibulum sapien. In placerat at nisl in tincidunt. </p>
                    <button className="orange">Know More</button>
                </div>
            </div>
            <div className="stats-section">
                <div>
                    <h2 className="number-stats">Numbers Speak For Themselves!</h2>
                </div>
                <div className="stats">
                    <div className="stat">
                        <h3 className="statTitle">{products}+</h3>
                        <p className="statP">Curated Products</p>
                    </div>
                    <div className="stat">
                        <h3 className="statTitle">{reviews}+</h3>
                        <p className="statP">Product Categories</p>
                    </div>
                    <div className="stat">
                        <h3 className="statTitle">{customers}+</h3>
                        <p className="statP">Customers</p>
                    </div>

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