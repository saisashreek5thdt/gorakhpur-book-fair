import { Link } from "react-router-dom";

export default function FooterSocialLinks() {
  return (
    <>
      <div className="col-md-6 col-lg-2">
        <div className="footer-widget-box list">
          <h4 className="footer-widget-title">Our Social</h4>
          <ul className="footer-list social">
            <li>
              <Link to="/">
                <i className="fab fa-facebook"></i> Facebook
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fab fa-x-twitter"></i> Twitter
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fab fa-instagram"></i> Instagram
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fab fa-youtube"></i> Youtube
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fab fa-whatsapp"></i> Whatsapp
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fab fa-linkedin-in"></i> Linkedin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
