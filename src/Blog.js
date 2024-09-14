import "./Blog.css";
import Turmeric from "./images/turmeric.jpg";
import BasketOrganic from "./images/basketorganic.jpg";
import GreenTea from "./images/green-tea.jpg";
import Rice from "./images/rice.jpg";
import Organic from "./images/why-go-organic.jpg";
import Pulse from "./images/organic-pulses.jpg";


function Blog() {
    return (
        <div className="blog-Div">
            <div className="aboutUs">
                <h2>Blog</h2>
            </div>
            <div className="aboutCards">
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
                <div className="blogCard">
                    <img src={Rice} alt="turmeric" className="blogImg"></img>
                    <div className="blogTxt">
                        <h3 className="blogTitle">The Rice for a Healthier Summer</h3>
                        <p>December 8, 2021</p>
                    </div>
                </div>
                <div className="blogCard">
                    <img src={Organic} alt="turmeric" className="blogImg"></img>
                    <div className="blogTxt">
                        <h3 className="blogTitle">Why Go Organic?</h3>
                        <p>December 13, 2021</p>
                    </div>
                </div>
                <div className="blogCard">
                    <img src={Pulse} alt="turmeric" className="blogImg"></img>
                    <div className="blogTxt">
                        <h3 className="blogTitle">10 Benefits of Organic Pulses</h3>
                        <p>December 13, 2021</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Blog;