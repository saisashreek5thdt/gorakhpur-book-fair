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
                <i className="fas fa-phone"></i>+919988337802
              </Link>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>25/B Milford Road, New
              York
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
            <p>Book Your Ticket</p>
            <Link to="/" className="theme-btn">
              Buy Ticket<i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
