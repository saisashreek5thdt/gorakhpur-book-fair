import { Link } from "react-router-dom";
import socialImg1 from "../assets/img/instagram/01.jpg";
import socialImg2 from "../assets/img/instagram/02.jpg";
import socialImg3 from "../assets/img/instagram/03.jpg";
import socialImg4 from "../assets/img/instagram/04.jpg";
import socialImg5 from "../assets/img/instagram/05.jpg";
import socialImg6 from "../assets/img/instagram/06.jpg";

export default function SocialImages() {
  return (
    <>
      <div className="instagram-area mb-120 wow fadeInUp" data-wow-delay=".25s">
        <div className="container">
          <Link to="/" className="theme-btn mt-3">
            <span className="fab fa-instagram"></span> Follow Us
          </Link>
          <div className="row g-4">
            <div className="col-6 col-lg-2">
              <div className="instagram-img">
                <img src={socialImg1} alt="" />
              </div>
            </div>
            <div className="col-6 col-lg-2">
              <div className="instagram-img">
                <img src={socialImg2} alt="" />
              </div>
            </div>
            <div className="col-6 col-lg-2">
              <div className="instagram-img">
                <img src={socialImg3} alt="" />
              </div>
            </div>
            <div className="col-6 col-lg-2">
              <div className="instagram-img">
                <img src={socialImg4} alt="" />
              </div>
            </div>
            <div className="col-6 col-lg-2">
              <div className="instagram-img">
                <img src={socialImg5} alt="" />
              </div>
            </div>
            <div className="col-6 col-lg-2">
              <div className="instagram-img">
                <img src={socialImg6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
