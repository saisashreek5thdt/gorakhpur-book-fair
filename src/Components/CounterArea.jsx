import icon1 from "../assets/img/icon/workshop.svg";
import icon2 from "../assets/img/icon/participant.svg";
import icon3 from "../assets/img/icon/speaker-2.svg";
import icon4 from "../assets/img/icon/award.svg";
import counterBG from "../assets/img/shape/02.png";

export default function CounterArea() {
  const sliderBG1 = {
    backgroundImage: `url(${counterBG})`,
    backgroundSize: "cover",
  };

  return (
    <>
      <div className="counter-area pt-80 pb-80" style={sliderBG1}>
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-5">
              <div className="counter-info">
                <div className="site-heading mb-3">
                  <span className="site-title-tagline text-white">
                    Fun Fact
                  </span>
                  <h2 className="site-title text-white">
                    We inspire people to be creative enough.
                  </h2>
                </div>
                <p className="text-white">
                  There are many variations of passages the majority have
                  suffered alteration in some form slightly believable. If you
                  are going to use a passage of need to be sure.
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row g-4 justify-content-center">
                <div className="col-md-6">
                  <div
                    className="counter-box wow fadeInUp"
                    data-wow-delay=".25s"
                  >
                    <div className="icon">
                      <img src={icon1} alt="" />
                    </div>
                    <div className="counter-content">
                      <div className="counter-info">
                        <span
                          className="counter"
                          data-count="+"
                          data-to="32"
                          data-speed="3000"
                        >
                          32
                        </span>
                        <span className="counter-unit">+</span>
                      </div>
                      <h6 className="title">Event Artist</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="counter-box wow fadeInDown"
                    data-wow-delay=".25s"
                  >
                    <div className="icon">
                      <img src={icon2} alt="" />
                    </div>
                    <div className="counter-content">
                      <div className="counter-info">
                        <span
                          className="counter"
                          data-count="+"
                          data-to="5"
                          data-speed="3000"
                        >
                          5
                        </span>
                        <span className="counter-unit"></span>
                      </div>
                      <h6 className="title">Event Stages</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="counter-box wow fadeInUp"
                    data-wow-delay=".25s"
                  >
                    <div className="icon">
                      <img src={icon3} alt="" />
                    </div>
                    <div className="counter-content">
                      <div className="counter-info">
                        <span
                          className="counter"
                          data-count="+"
                          data-to="3"
                          data-speed="3000"
                        >
                          3
                        </span>
                        <span className="counter-unit"></span>
                      </div>
                      <h6 className="title">Days Concerts</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="counter-box wow fadeInDown"
                    data-wow-delay=".25s"
                  >
                    <div className="icon">
                      <img src={icon4} alt="" />
                    </div>
                    <div className="counter-content">
                      <div className="counter-info">
                        <span
                          className="counter"
                          data-count="+"
                          data-to="75"
                          data-speed="3000"
                        >
                          75
                        </span>
                        <span className="counter-unit">+</span>
                      </div>
                      <h6 className="title">Guest Speakers</h6>
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
