import footerShape from "../../assets/img/shape/01.png";
import footerLogo from "../../assets/img/logo/logo-light.png";
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
                    We are many variations of passages available majority have
                    suffered in some injected content of a page when looking at
                    its layout humour words believable.
                  </p>
                  <div className="footer-newsletter">
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
                  </div>
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
                  <Link to="/"> Eventu </Link> All Rights Reserved.
                </p>
              </div>
              <div className="col-md-6 align-self-center">
                <ul className="footer-menu">
                  <li>
                    <Link to="/">Support</Link>
                  </li>
                  <li>
                    <Link to="/">Terms Of Services</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
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
