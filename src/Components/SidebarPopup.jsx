import sidebarLogo from "../assets/img/logo/logo.png"

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
                  <a href="/cdn-cgi/l/email-protection#d6bfb8b0b996b3aeb7bba6bab3f8b5b9bb">
                    <i className="far fa-envelope"></i>
                    <span
                      className="__cf_email__"
                      data-cfemail="771e19111837120f161a071b125914181a"
                    >
                      [email&#160;protected]
                    </span>
                  </a>
                </li>
                <li>
                  <h6>Phone</h6>
                  <a href="tel:+21236547898">
                    <i className="fa fa-solid fa-phone-volume"></i>+2 123 654
                    7898
                  </a>
                </li>
                <li>
                  <h6>Address</h6>
                  <a href="#">
                    <i className="fa fa-solid fa-location-dot"></i>25/B Milford
                    Road, New York
                  </a>
                </li>
              </ul>
            </div>
            <div className="sidebar-social">
              <h4>Follow Us</h4>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
