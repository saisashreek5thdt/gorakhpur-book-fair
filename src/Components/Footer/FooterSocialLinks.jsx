import { Link } from "react-router-dom";

export default function FooterSocialLinks() {
  return (
    <>
      <div className="col-md-6 col-lg-2">
        <div className="footer-widget-box list">
          <h4 className="footer-widget-title">Our Social</h4>
          <ul className="footer-list social">
            <li>
              <Link
                to="https://www.facebook.com/nationalbooktrustindia"
                target="_blank"
              >
                <i className="fab fa-facebook"></i> Facebook
              </Link>
            </li>
            <li>
              <Link
                to="https://x.com/nbt_india?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                target="_blank"
              >
                <i className="fab fa-x-twitter"></i> X
              </Link>
            </li>
            <li>
              <Link
                to="https://www.instagram.com/nbtindia/?hl=en"
                target="_blank"
              >
                <i className="fab fa-instagram"></i> Instagram
              </Link>
            </li>
            <li>
              <Link to="https://www.youtube.com/user/NBTIndia" target="_blank">
                <i className="fab fa-youtube"></i> Youtube
              </Link>
            </li>
            <li>
              <Link
                to="https://in.linkedin.com/company/nationalbooktrustindia"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i> Linkedin
              </Link>
            </li>
            {/* <li>
              <Link to="/">
                <i className="fab fa-whatsapp"></i> Whatsapp
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
}
