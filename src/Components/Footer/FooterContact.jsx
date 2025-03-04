import { Link } from "react-router-dom";

export default function FooterContact() {
  return (
    <>
      <div className="col-md-6 col-lg-3">
        <div className="footer-widget-box list">
          <h4 className="footer-widget-title">Get In Touch</h4>
          <ul className="footer-contact">
            <li>
              <Link to="tel:+919988337802">
                <i className="far fa-phone"></i>+919988337802
              </Link>
            </li>
            <li>
              <i className="far fa-map-marker-alt"></i>Gorakhpur
            </li>
            <li>
              <Link to="mailto:eventinfo@gorakhpurbookfair.com">
                <i className="far fa-envelope"></i>
                <span
                  className="__cf_email__"
                  data-cfemail="e78e898188a7829f868a978b82c984888a"
                >
                  info@gorakhpurbookfair.com
                </span>
              </Link>
            </li>
          </ul>
          <div className="footer-request">
            <p>Register Your Ticket</p>
            <Link to="/" className="theme-btn">
              Registration<i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
