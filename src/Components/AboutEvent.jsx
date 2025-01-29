import { Link } from "react-router-dom";
import aboutImg1 from "../assets/img/about/01.jpg";
import aboutImg2 from "../assets/img/about/02.jpg";
import aboutImg3 from "../assets/img/about/03.jpg";

export default function AboutEvent() {
  return (
    <>
      <div className="about-area py-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-left wow fadeInRight" data-wow-delay=".25s">
                <div className="about-img">
                  <img className="img-1" src={aboutImg1} alt="" />
                  <img className="img-2" src={aboutImg2} alt="" />
                  <img className="img-3" src={aboutImg3} alt="" />
                </div>
                <div className="about-experience">
                  <span>30</span>
                  <h5>
                    Years Of <br />
                    Experience
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-right wow fadeInLeft" data-wow-delay=".25s">
                <div className="site-heading mb-3">
                  <span className="site-title-tagline">About Us</span>
                  <h2 className="site-title">
                    Learn And Connect <span>With New</span> People
                  </h2>
                  <div
                    className="site-shadow-text wow fadeInRight"
                    data-wow-delay=".35s"
                  >
                    About Us
                  </div>
                </div>
                <p className="about-text">
                  There are many variations of passages the majority have
                  suffered alteration in some form slightly believable. If you
                  are going to use a passage of need to be sure. All the
                  generators on the Internet tend to repeat predefined chunks.
                </p>
                <div className="about-list-wrap">
                  <ul className="about-list list-unstyled">
                    <li>
                      <div className="about-item">
                        <h4>
                          <span>01.</span> Best Event Experience.
                        </h4>
                      </div>
                    </li>
                    <li>
                      <div className="about-item">
                        <h4>
                          <span>02.</span> Big Conference and workshop.
                        </h4>
                      </div>
                    </li>
                    <li>
                      <div className="about-item">
                        <h4>
                          <span>03.</span> Our Experience Team.
                        </h4>
                      </div>
                    </li>
                  </ul>
                </div>
                <Link to="/" className="theme-btn">
                  Discover More<i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
