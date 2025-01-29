import eventImg1 from "../assets/img/choose/01.jpg";
import eventImg2 from "../assets/img/icon/event.svg";
import eventImg3 from "../assets/img/icon/location.svg";
import eventImg4 from "../assets/img/icon/idea.svg";

export default function JoinEvent() {
  return (
    <>
      <div className="choose-area py-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="choose-img wow fadeInLeft" data-wow-delay=".25s">
                <img src={eventImg1} alt="" />
                <a href="#" className="theme-btn">
                  Learn More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="choose-content wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="site-heading mb-0">
                  <span className="site-title-tagline">Why Join</span>
                  <h2 className="site-title mb-10">
                    Why You Should Join Our Event ?
                  </h2>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
                <div className="choose-content-wrap">
                  <div className="choose-item">
                    <div className="choose-item-icon">
                      <img src={eventImg2} alt="" />
                    </div>
                    <div className="choose-item-info">
                      <h4>Interactive Sessions</h4>
                      <p>
                        There are many variations of the passages available
                        suffered.
                      </p>
                    </div>
                  </div>
                  <div className="choose-item">
                    <div className="choose-item-icon">
                      <img src={eventImg3} alt="" />
                    </div>
                    <div className="choose-item-info">
                      <h4>Massive Locations</h4>
                      <p>
                        There are many variations of the passages available
                        suffered.
                      </p>
                    </div>
                  </div>
                  <div className="choose-item">
                    <div className="choose-item-icon">
                      <img src={eventImg4} alt="" />
                    </div>
                    <div className="choose-item-info">
                      <h4>Implement Your Idea</h4>
                      <p>
                        There are many variations of the passages available
                        suffered.
                      </p>
                    </div>
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
