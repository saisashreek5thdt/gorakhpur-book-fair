import { Link } from "react-router-dom";
import logo from "../assets/img/logo/gorakhpur-logo.png";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header-top">
          <div className="container">
            <div className="header-top-wrap">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="header-top-left">
                    <div className="header-top-contact">
                      <ul>
                        <li>
                          <Link to="#">
                            <i className="far fa-location-dot"></i>{" "}
                            Address
                          </Link>
                        </li>
                        <li>
                          <Link to="mailto:info@gorakhpurbookfair.com">
                            <i className="far fa-envelopes"></i>
                            &nbsp;info@gorakhpurbookfair.com
                          </Link>
                        </li>
                        <li>
                          <Link to="tel:+919988337802">
                            <i className="far fa-phone-volume"></i>{" "}
                            +919988337802
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="header-top-right">
                    <div className="header-top-lang">
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="top-lang dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <i className="fal fa-globe"></i> Language
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <Link className="dropdown-item" to="/">
                              English
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/">
                              Hindi
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/">
                              Marathi
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/">
                              Bhojpuri
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/">
                              Urdu
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="header-top-social">
                      <span>Follow Us:</span>
                      <Link to="/">
                        <i className="fab fa-facebook"></i>
                      </Link>
                      <Link to="/">
                        <i className="fab fa-x-twitter"></i>
                      </Link>
                      <Link to="/">
                        <i className="fab fa-instagram"></i>
                      </Link>
                      <Link to="/">
                        <i className="fab fa-linkedin"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-navigation">
          <nav className="navbar navbar-expand-lg">
            <div className="container position-relative">
              <Link to="/" className="navbar-brand">
                <img src={logo} alt="logo" />
              </Link>
              <div className="mobile-menu-right">
                {/* <div className="search-btn">
                  <button
                    type="button"
                    className="nav-right-link search-box-outer"
                  >
                    <i className="fas fa-magnifying-glass"></i>
                  </button>
                </div> */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#main_nav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-mobile-icon">
                    <i className="fas fa-bars-staggered"></i>
                  </span>
                </button>
              </div>
              <div className="collapse navbar-collapse" id="main_nav">
                <ul className="navbar-nav">
                  {/* <li className="nav-item dropdown">
                    <Link
                      className="nav-link active"
                      to="/"
                    >
                      Home
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      About
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      data-bs-toggle="dropdown"
                    >
                      Schedule
                    </Link>
                    <ul className="dropdown-menu fade-down">
                      <li>
                        <Link className="dropdown-item" to="/">
                          Venue One
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Venue Two
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Venue Three
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Venue Four
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/"
                    >
                      Speakers
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/"
                    >
                      Team
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/"
                    >
                      Publishers
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/"
                    >
                      FAQ
                    </Link>
                  </li>
                  {/* <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      data-bs-toggle="dropdown"
                    >
                      Pages
                    </Link>
                    <ul className="dropdown-menu fade-down">
                      <li>
                        <Link className="dropdown-item" to="/">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Our Team
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Ticket Price
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Sponsors
                        </Link>
                      </li>
                      <li className="dropdown-submenu">
                        <Link className="dropdown-item dropdown-toggle" to="#">
                          Venues
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to="/">
                              Venues
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/">
                              Venue Single
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu">
                        <Link className="dropdown-item dropdown-toggle" to="#">
                          Authentication
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to="/">
                              Login
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/">
                              Register
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/">
                              Forgot Password
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu">
                        <Link className="dropdown-item dropdown-toggle" to="#">
                          Extra Pages
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to="/">
                              404 Error
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="coming-soon.html"
                            >
                              Coming Soon
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/">
                              Terms Of Service
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/">
                              Privacy Policy
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Gallery
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Faq
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Testimonials
                        </Link>
                      </li>
                    </ul>
                  </li>                  
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      data-bs-toggle="dropdown"
                    >
                      Blog
                    </Link>
                    <ul className="dropdown-menu fade-down">
                      <li>
                        <Link className="dropdown-item" to="/">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Blog Single
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Contact
                    </Link>
                  </li> */}
                </ul>
                <div className="nav-right">
                  {/* <div className="search-btn">
                    <button
                      type="button"
                      className="nav-right-link search-box-outer"
                    >
                      <i className="fa fa-solid fa-magnifying-glass"></i>
                    </button>
                  </div> */}
                  <div className="sidebar-btn">
                    <button type="button" className="nav-right-link">
                      <i className="fa fa-solid fa-bars-staggered"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
