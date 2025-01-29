import { Link } from "react-router-dom";
import sponsorsImg1 from "../assets/img/partner/01.png";
import sponsorsImg2 from "../assets/img/partner/02.png";
import sponsorsImg3 from "../assets/img/partner/03.png";
import sponsorsImg4 from "../assets/img/partner/04.png";
import sponsorsImg5 from "../assets/img/partner/05.png";
import sponsorsImg6 from "../assets/img/partner/06.png";
import sponsorsImg7 from "../assets/img/partner/07.png";
import sponsorsImg8 from "../assets/img/partner/08.png";
import sponsorsImg9 from "../assets/img/partner/09.png";
import sponsorsImg10 from "../assets/img/partner/10.png";

export default function Sponsors() {
  return (
    <>
      <div className="partner-area partner-bg py-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="site-heading text-center wow fadeInDown"
                data-wow-delay=".25s"
              >
                <span className="site-title-tagline">Sponsors</span>
                <h2 className="site-title">
                  Lets Check Our <span>Sponsors</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="partner-wrapper wow fadeInUp" data-wow-delay=".25s">
            <div className="row g-5 justify-content-center">
              <div className="col-6 col-md-2">
                <img src={sponsorsImg1} alt="thumb" />
              </div>
              <div className="col-6 col-md-2">
                <img src={sponsorsImg2} alt="thumb" />
              </div>
              <div className="col-6 col-md-2">
                <img src={sponsorsImg3} alt="thumb" />
              </div>
              <div className="col-6 col-md-2">
                <img src={sponsorsImg4} alt="thumb" />
              </div>
              <div className="col-6 col-md-2">
                <img src={sponsorsImg5} alt="thumb" />
              </div>
              <div className="col-6 col-md-2">
                <img src={sponsorsImg6} alt="thumb" />
              </div>
              <div className="col-6 col-md-2">
                <img src={sponsorsImg7} alt="thumb" />
              </div>
              <div className="col-6 col-md-2">
                <img src={sponsorsImg8} alt="thumb" />
              </div>
              <div className="col-6 col-md-2">
                <img src={sponsorsImg9} alt="thumb" />
              </div>
              <div className="col-6 col-md-2">
                <img src={sponsorsImg10} alt="thumb" />
              </div>
            </div>
          </div>
          <div className="text-center mt-40 wow fadeInUp" data-wow-delay=".25s">
            <Link to="/" className="theme-btn">
              <span className="fal fa-users"></span> Become Sponsors
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
