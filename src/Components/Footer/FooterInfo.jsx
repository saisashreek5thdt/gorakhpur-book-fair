import footerShape from "../../assets/img/shape/01.png";
import footerLogo from "../../assets/img/logo/gorakhpur-logo-white.png";
import { Link } from "react-router-dom";
import FooterQuicLinks from "./FooterQuickLinks";
import FooterSocialLinks from "./FooterSocialLinks";
import FooterContact from "./FooterContact";

export default function FooterInfo() {
  return (
    <>
      <footer className="footer-area">
        <div className="footer-shape">
          <img src={footerShape} alt="" />
        </div>
        <div className="footer-widget">
          <div className="container">
            <div className="row footer-widget-wrapper pt-100 pb-70">
              <div className="col-md-6 col-lg-5">
                <div className="footer-widget-box about-us">
                  <Link to="/" className="footer-logo">
                    <img src={footerLogo} alt="" />
                  </Link>
                  <p className="mb-3">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113996.60078799856!2d83.4039116!3d26.76371515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991446a0c332489%3A0x1ff3f97fdcc6bfa2!2sGorakhpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1739290642139!5m2!1sen!2sin"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </p>
                  {/* <div className="footer-newsletter">
                    <p>Subscribe Our Newsletter</p>
                    <div className="subscribe-form">
                      <form action="#">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Your Email"
                          />
                          <button className="theme-btn" type="submit">
                            <span className="far fa-paper-plane"></span>{" "}
                            Subscribe
                          </button>
                        </div>
                      </form>
                    </div>
                  </div> */}
                </div>
              </div>
              <FooterQuicLinks />
              <FooterSocialLinks />
              <FooterContact />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <p className="copyright-text">
                  &copy; Copyright <span id="date"></span>
                  <Link to="/"> &nbsp; 5TH Dimension Technologies </Link> All
                  Rights Reserved.
                </p>
              </div>
              <div className="col-md-6 align-self-center">
                <ul className="footer-menu">
                  <li>
                    <Link to="/">Events</Link>
                  </li>
                  <li>
                    <Link to="/">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/">Registration</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
