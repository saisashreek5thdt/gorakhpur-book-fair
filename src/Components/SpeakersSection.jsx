import speaker1 from "../assets/img/speaker/01.jpg";
import speaker2 from "../assets/img/speaker/02.jpg";
import speaker3 from "../assets/img/speaker/03.jpg";
import speaker4 from "../assets/img/speaker/04.jpg";
import speaker5 from "../assets/img/speaker/05.jpg";
import speaker6 from "../assets/img/speaker/06.jpg";

export default function SpeakersSection() {
  return (
    <>
      <div className="team-area py-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="site-heading text-center wow fadeInDown"
                data-wow-delay=".25s"
              >
                <span className="site-title-tagline">Speakers</span>
                <h2 className="site-title">
                  Meet Creative <span>Speakers</span>
                </h2>
                <div className="site-shadow-text">Speakers</div>
              </div>
            </div>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay=".25s">
            <div className="col-6 col-md-3 col-lg-2">
              <div className="team-item">
                <div className="team-img">
                  <img src={speaker1} alt="" />
                </div>
                <div className="team-content">
                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-x-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                  <div className="info">
                    <h4>
                      <a href="#">Ronel Smith</a>
                    </h4>
                    <span>UX Deginer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <div className="team-item">
                <div className="team-img">
                  <img src={speaker2} alt="" />
                </div>
                <div className="team-content">
                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-x-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                  <div className="info">
                    <h4>
                      <a href="#">Malissa Fie</a>
                    </h4>
                    <span>UX Deginer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <div className="team-item">
                <div className="team-img">
                  <img src={speaker3} alt="" />
                </div>
                <div className="team-content">
                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-x-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                  <div className="info">
                    <h4>
                      <a href="#">Bodney Rios</a>
                    </h4>
                    <span>UX Deginer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <div className="team-item">
                <div className="team-img">
                  <img src={speaker4} alt="" />
                </div>
                <div className="team-content">
                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-x-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                  <div className="info">
                    <h4>
                      <a href="#">Durton Mary</a>
                    </h4>
                    <span>UX Deginer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <div className="team-item">
                <div className="team-img">
                  <img src={speaker5} alt="" />
                </div>
                <div className="team-content">
                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-x-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                  <div className="info">
                    <h4>
                      <a href="#">Heidi Powers</a>
                    </h4>
                    <span>UX Deginer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <div className="team-item">
                <div className="team-img">
                  <img src={speaker6} alt="" />
                </div>
                <div className="team-content">
                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-x-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                  <div className="info">
                    <h4>
                      <a href="#">Miller Carla</a>
                    </h4>
                    <span>UX Deginer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
