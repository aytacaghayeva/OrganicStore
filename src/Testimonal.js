import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './Testimonal.css';  
import JohnDoe from "./images/JohnDoe.jpg";
import JaneDoe from "./images/JaneDoe.jpg";
import RealSmith from "./images/RealSmith.png";

function TestimonialSlider() {
    const testimonials = [
        {
            name: 'John Doe',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis auctor dapibus. Nulla vulputate libero vitae velit tempor dignissim. Aliquam dignissim risus elit, quis varius est condimentum et.',
            image: JohnDoe,
        },
        {
            name: 'Jane Doe',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis auctor dapibus. Nulla vulputate libero vitae velit tempor dignissim. Aliquam dignissim risus elit, quis varius est condimentum et.',
            image: JaneDoe,
        },
        {
            name: 'Real Smith',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis auctor dapibus. Nulla vulputate libero vitae velit tempor dignissim. Aliquam dignissim risus elit, quis varius est condimentum et.',
            image: RealSmith,
        },
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    return (
        <div className="testimonial-carousel">
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-slide">
                        <div>
                            <img className="profile-image" src={testimonial.image} alt={testimonial.name} />
                        </div>
                        <div className='test-text'>
                            <p className='testimonal-paragraph'>{testimonial.text}</p>
                            <h3 className='testimonal-title'>{testimonial.name}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default TestimonialSlider;