import { Link } from "react-router-dom";
import icon1 from "../assets/img/icon/speaker.svg";
import icon2 from "../assets/img/icon/learn.svg";
import icon3 from "../assets/img/icon/meet.svg";
import icon4 from "../assets/img/icon/question.svg";

export default function EventFeatures() {
  return (
    <>
      <div className="feature-area fa-negative">
        <div className="container">
          <div className="feature-wrapper">
            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div
                  className="feature-item wow fadeInUp"
                  data-wow-delay=".25s"
                >
                  <span className="count">01</span>
                  <div className="feature-icon">
                    <img src={icon1} alt="" />
                  </div>
                  <h4 className="feature-title">Vendor</h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted.
                  </p>
                  <Link to="/" className="theme-btn mt-20">
                    Register<i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div
                  className="feature-item wow fadeInDown"
                  data-wow-delay=".25s"
                >
                  <span className="count">02</span>
                  <div className="feature-icon">
                    <img src={icon2} alt="" />
                  </div>
                  <h4 className="feature-title">Volunteer</h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted.
                  </p>
                  <Link to="/" className="theme-btn mt-20">
                    Register<i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div
                  className="feature-item wow fadeInUp"
                  data-wow-delay=".25s"
                >
                  <span className="count">03</span>
                  <div className="feature-icon">
                    <img src={icon3} alt="" />
                  </div>
                  <h4 className="feature-title">Exhibitor</h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted.
                  </p>
                  <Link to="/" className="theme-btn mt-20">
                    Register<i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div
                  className="feature-item wow fadeInDown"
                  data-wow-delay=".25s"
                >
                  <span className="count">04</span>
                  <div className="feature-icon">
                    <img src={icon4} alt="" />
                  </div>
                  <h4 className="feature-title">Visitor</h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted.
                  </p>
                  <Link to="/" className="theme-btn mt-20">
                    Register<i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div
                  className="feature-item wow fadeInUp"
                  data-wow-delay=".25s"
                >
                  <span className="count">05</span>
                  <div className="feature-icon">
                    <img src={icon1} alt="" />
                  </div>
                  <h4 className="feature-title">Speaker</h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted.
                  </p>
                  <Link to="/" className="theme-btn mt-20">
                    Register<i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div
                  className="feature-item wow fadeInUp"
                  data-wow-delay=".25s"
                >
                  <span className="count">06</span>
                  <div className="feature-icon">
                    <img src={icon3} alt="" />
                  </div>
                  <h4 className="feature-title">Author</h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted.
                  </p>
                  <Link to="/" className="theme-btn mt-20">
                    Register<i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div
                  className="feature-item wow fadeInUp"
                  data-wow-delay=".25s"
                >
                  <span className="count">07</span>
                  <div className="feature-icon">
                    <img src={icon2} alt="" />
                  </div>
                  <h4 className="feature-title">Sponsor</h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted.
                  </p>
                  <Link to="/" className="theme-btn mt-20">
                    Register<i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
