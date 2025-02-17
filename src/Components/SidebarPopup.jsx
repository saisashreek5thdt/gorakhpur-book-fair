import { Link } from "react-router-dom";
import sidebarLogo from "../assets/img/logo/gorakhpur-logo.png";

export default function SidebarPopup() {
  return (
    <>
      <div className="sidebar-popup">
        <div className="sidebar-wrapper">
          <div className="sidebar-content">
            <button type="button" className="close-sidebar-popup">
              <i className="fa fa-solid fa-xmark"></i>
            </button>
            <div className="sidebar-logo">
              <img src={sidebarLogo} alt="" />
            </div>
            <div className="sidebar-about">
              <h4>About Us</h4>
              <p>
                There are many variations of passages available sure there
                majority have suffered alteration in some form by inject humour
                or randomised words which dont look even slightly believable.
              </p>
            </div>
            <div className="sidebar-contact">
              <h4>Contact Info</h4>
              <ul>
                <li>
                  <h6>Email</h6>
                  <Link to="mailto:info@gorakhpurbookfair.com">
                    <i className="far fa-envelopes"></i>
                    <span
                      className="__cf_email__"
                      data-cfemail="771e19111837120f161a071b125914181a"
                    >
                      info@gorakhpurbookfair.com
                    </span>
                  </Link>
                </li>
                <li>
                  <h6>Phone</h6>
                  <Link to="tel:+919988337802">
                    <i className="far fa-phone-volume"></i>+919988337802
                  </Link>
                </li>
                <li>
                  <h6>Address</h6>
                  <Link to="/">
                    <i className="far fa-location-dot"></i>Venue
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sidebar-social">
              <h4>Follow Us</h4>
              <Link
                to="https://www.facebook.com/nationalbooktrustindia"
                target="_blank"
              >
                <i className="fab fa-facebook"></i>
              </Link>
              <Link
                to="https://x.com/nbt_india?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                target="_blank"
              >
                <i className="fab fa-x-twitter"></i>
              </Link>
              <Link
                to="https://www.instagram.com/nbtindia/?hl=en"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="https://www.youtube.com/user/NBTIndia" target="_blank">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link
                to="https://in.linkedin.com/company/nationalbooktrustindia"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
