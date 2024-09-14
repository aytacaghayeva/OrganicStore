import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';


function Contact() {
    return (
        <div className="contact-div">
            <div className="aboutUs">
                <h2>Contact Us</h2>
            </div>
            <div className="contact-center">
                <div className="contactTxt">
                    <h2 className="contact-title">We'd Love To Hear From You</h2>
                    <p className="contact-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales, urna quis blandit bibendum,
                        dolor arcu rhoncus diam, ac rutrum sem ligula sed enim. In hac habitasse platea dictumst. Vivamus ac vestibulum sapien.
                    </p>
                    <div className="location">
                        <div className="streets">
                            <div className="town">
                                <div>
                                    <h3 className="anytown">Anytown ST 1</h3>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#347758', fontSize: "22px", marginRight: '7px' }} />
                                    <h3 className="town-title">123, Main street,<br></br>Anytown ST 12345.</h3>
                                </div>
                            </div>
                            <div className="town">
                                <div>
                                    <h3 className="anytown">Contact Information</h3>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <FontAwesomeIcon icon={faEnvelope} style={{ color: '#347758', fontSize: "22px", marginRight: '7px' }} />
                                    <h3 className="town-title">hello@example.com<br></br>mail@example.com</h3>
                                </div>
                            </div>
                        </div>
                        <div className="streets">
                            <div className="town">
                                <div>
                                    <h3 className="anytown">Anytown ST 1</h3>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#347758', fontSize: "22px", marginRight: '7px' }} />
                                    <h3 className="town-title">456, Main street,<br></br>Anytown ST 12345.</h3>
                                </div>
                            </div>
                            <div className="town">
                                <div>
                                    <h3 className="anytown">Our Business Hours</h3>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <FontAwesomeIcon icon={faClock} style={{ color: '#347758', fontSize: "22px", marginRight: '7px' }} />
                                    <h3 className="town-title">Monday - Friday: 8am - 4pm<br></br>Saturday - Sunday: 9am - 5pm</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="sendMessage">
                    <h2 className="contact-title" style={{ paddingBottom: '40px' }}>Leave Us A Message</h2>
                    <form className="contact-form">
                        <input type="text" placeholder="Name" required className="contactInput"></input>
                        <input type="email" placeholder="Email" required className="contactInput"></input>
                        <input type="text" placeholder="Subject" required className="contactInput"></input>
                        <textarea placeholder="Message" style={{ resize: 'none', height: '114px' }} className="contactInput"></textarea>
                        <button className="submitMessage">Submit</button>
                    </form>
                </div>
            </div>
            <div style={{ width: '100%', height: '450px' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d96778.51111329655!2d-74.002549!3d40.710785!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York!5e0!3m2!1str!2sus!4v1726244155616!5m2!1str!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                ></iframe>
            </div>
        </div>
    )
}

export default Contact;