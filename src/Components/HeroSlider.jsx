import { Link } from "react-router-dom";
import slider1 from "../assets/img/hero/slider-1.jpg";
import slider2 from "../assets/img/hero/slider-2.jpg";
import slider3 from "../assets/img/hero/slider-3.jpg";

export default function HeroSlider() {
  const sliderBG1 = {
    backgroundImage: `url(${slider1})`,
    backgroundSize: "cover",
  };

  const sliderBG2 = {
    backgroundImage: `url(${slider2})`,
    backgroundSize: "cover",
  };

  const sliderBG3 = {
    backgroundImage: `url(${slider3})`,
    backgroundSize: "cover",
  };

  return (
    <>
      <div className="hero-section">
        <div className="hero-scroll-box">
          <div className="hero-scroll">
            <div className="scroller"></div>
          </div>
        </div>
        <div className="hero-slider owl-carousel owl-theme">
          <div className="hero-single" style={sliderBG1}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="hero-content">
                    <div
                      className="hero-date"
                      data-animation="fadeInDown"
                      data-delay=".25s"
                    >
                      <h1>25</h1>
                      <div className="date-content">
                        <span>May 2025</span>
                        <p>Gorakhpur, Uttar Pradesh, India</p>
                      </div>
                    </div>
                    <h1
                      className="hero-title"
                      data-animation="fadeInRight"
                      data-delay=".50s"
                    >
                      Celebrating The <span>Power</span> of <span>Words</span>
                    </h1>
                    <p data-animation="fadeInLeft" data-delay=".75s">
                      The Gorakhpur Book Festival, organized by the National Book
                      Trust, India (under the Ministry of Education, Government
                      of India)
                    </p>
                    <div
                      className="hero-btn"
                      data-animation="fadeInUp"
                      data-delay="1s"
                    >
                      <Link to="/" className="theme-btn">
                        Registration<i className="fas fa-arrow-right"></i>
                      </Link>
                      {/* <Link to="/" className="theme-btn theme-btn2">
                        Learn More<i className="fas fa-arrow-right"></i>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-single" style={sliderBG2}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="hero-content">
                    <div
                      className="hero-date"
                      data-animation="fadeInDown"
                      data-delay=".25s"
                    >
                      <h1>26</h1>
                      <div className="date-content">
                        <span>May 2025</span>
                        <p>Gorakhpur, Uttar Pradesh, India</p>
                      </div>
                    </div>
                    <h1
                      className="hero-title"
                      data-animation="fadeInRight"
                      data-delay=".50s"
                    >
                      Celebrating The <span>Power</span> of <span>Words</span>
                    </h1>
                    <p data-animation="fadeInLeft" data-delay=".75s">
                      The Gorakhpur Book Festival, organized by the National Book
                      Trust, India (under the Ministry of Education, Government
                      of India)
                    </p>
                    <div
                      className="hero-btn"
                      data-animation="fadeInUp"
                      data-delay="1s"
                    >
                      <Link to="/" className="theme-btn">
                        Registration<i className="fas fa-arrow-right"></i>
                      </Link>
                      {/* <Link to="/" className="theme-btn theme-btn2">
                        Learn More<i className="fas fa-arrow-right"></i>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-single" style={sliderBG3}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="hero-content">
                    <div
                      className="hero-date"
                      data-animation="fadeInDown"
                      data-delay=".25s"
                    >
                      <h1>27</h1>
                      <div className="date-content">
                        <span>May 2025</span>
                        <p>Gorakhpur, Uttar Pradesh, India</p>
                      </div>
                    </div>
                    <h1
                      className="hero-title"
                      data-animation="fadeInRight"
                      data-delay=".50s"
                    >
                      Celebrating The <span>Power</span> of <span>Words</span>
                    </h1>
                    <p data-animation="fadeInLeft" data-delay=".75s">
                      The Gorakhpur Book Festival, organized by the National Book
                      Trust, India (under the Ministry of Education, Government
                      of India)
                    </p>
                    <div
                      className="hero-btn"
                      data-animation="fadeInUp"
                      data-delay="1s"
                    >
                      <Link to="/" className="theme-btn">
                        Registration<i className="fas fa-arrow-right"></i>
                      </Link>
                      {/* <Link to="/" className="theme-btn theme-btn2">
                        Learn More<i className="fas fa-arrow-right"></i>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
