import { Link } from "react-router-dom";
import eventBG from "../assets/img/cta/01.jpg";

export default function EventRegister() {
  const eventRegisterBG = {
    backgroundImage: `url(${eventBG})`,
    backgroundSize: "cover",
  };

  return (
    <>
      <div className="cta-area pt-60 pb-60" style={eventRegisterBG}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="cta-content wow fadeInUp" data-wow-delay=".25s">
                <h1>Are you want to join our events ?</h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable <br />
                  content of a page when looking at its layout.
                </p>
                <Link to="/" className="theme-btn">
                  Register Now<i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
