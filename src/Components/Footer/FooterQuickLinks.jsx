import { Link } from "react-router-dom";

export default function FooterQuicLinks() {
  return (
    <>
      <div className="col-md-6 col-lg-2">
        <div className="footer-widget-box list">
          <h4 className="footer-widget-title">Quick Links</h4>
          <ul className="footer-list">
            <li>
              <Link to="/">
                <i className="fas fa-caret-right"></i> About Us
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fas fa-caret-right"></i> Event Schedules
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fas fa-caret-right"></i> Speakers
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fas fa-caret-right"></i> Members
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fas fa-caret-right"></i> Register
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fas fa-caret-right"></i> FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
