import tab1Img1 from "../assets/img/schedule/01.jpg";
import tab1Img2 from "../assets/img/speaker/01.jpg";
import tab1Img3 from "../assets/img/speaker/02.jpg";
import tab1Img4 from "../assets/img/schedule/02.jpg";
import tab1Img5 from "../assets/img/speaker/03.jpg";
import tab1Img6 from "../assets/img/speaker/04.jpg";
import tab1Img7 from "../assets/img/schedule/03.jpg";
import { Link } from "react-router-dom";

export default function EventSchedule() {
  return (
    <>
      <div className="schedule-area py-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="site-heading text-center wow fadeInDown"
                data-wow-delay=".25s"
              >
                <span className="site-title-tagline">Event Schedule</span>
                <h2 className="site-title">
                  Our Events <span>Schedule</span> Plan
                </h2>
                <div className="site-shadow-text">Schedule</div>
              </div>
            </div>
          </div>
          <div className="schedule-nav wow fadeInUp" data-wow-delay=".25s">
            <ul
              className="nav nav-pills"
              id="pills-tab-schedule"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-schedule-tab1"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-schedule1"
                  type="button"
                  role="tab"
                  aria-controls="pills-schedule1"
                  aria-selected="true"
                >
                  <span className="icon">
                    <i className="fal fa-calendar-days"></i>
                  </span>
                  <span className="content">
                    <span className="day">Day 01</span>
                    <span className="date">May 25, 2024</span>
                  </span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-schedule-tab2"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-schedule2"
                  type="button"
                  role="tab"
                  aria-controls="pills-schedule2"
                  aria-selected="false"
                >
                  <span className="icon">
                    <i className="fal fa-calendar-days"></i>
                  </span>
                  <span className="content">
                    <span className="day">Day 02</span>
                    <span className="date">May 26, 2024</span>
                  </span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-schedule-tab3"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-schedule3"
                  type="button"
                  role="tab"
                  aria-controls="pills-schedule3"
                  aria-selected="false"
                >
                  <span className="icon">
                    <i className="fal fa-calendar-days"></i>
                  </span>
                  <span className="content">
                    <span className="day">Day 03</span>
                    <span className="date">May 27, 2024</span>
                  </span>
                </button>
              </li>
            </ul>
          </div>
          <div
            className="tab-content wow fadeInUp"
            data-wow-delay=".25s"
            id="pills-tabContent-schedule"
          >
            {/* tab 1 */}
            <div
              className="tab-pane fade show active"
              id="pills-schedule1"
              role="tabpanel"
              aria-labelledby="pills-schedule-tab1"
              tabIndex="0"
            >
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="schedule-item">
                    <span className="schedule-count">01</span>
                    <div className="schedule-content-wrap">
                      <div className="schedule-img">
                        <img src={tab1Img1} alt="" />
                      </div>
                      <div className="schedule-content">
                        <div className="schedule-info">
                          <div className="schedule-meta">
                            <ul>
                              <li>
                                <i className="far fa-clock"></i> 10.00 AM -
                                12.00 PM
                              </li>
                              <li>
                                <i className="fa fa-solid fa-location-dot"></i>{" "}
                                25/B Milford, New York
                              </li>
                            </ul>
                          </div>
                          <h4>
                            <Link to="/">Business World Event Introduction</Link>
                          </h4>
                          <p>
                            There are many variations of passages available but
                            the majority have suffered alteration in some form
                            by injected humour, or randomised words which dont
                            look even slightly believable.
                          </p>
                        </div>
                        <div className="schedule-bottom">
                          <div className="schedule-speaker">
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img2} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="fa fa-solid fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Frederick Taylor</h6>
                                <span>UX Designer</span>
                              </div>
                            </div>
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img3} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="fa fa-solid fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Tony Mendoza</h6>
                                <span>Developer</span>
                              </div>
                            </div>
                          </div>
                          <Link to="/" className="theme-btn">
                            Buy Tickets<i className="fas fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="schedule-item">
                    <span className="schedule-count">02</span>
                    <div className="schedule-content-wrap">
                      <div className="schedule-img">
                        <img src={tab1Img4} alt="" />
                      </div>
                      <div className="schedule-content">
                        <div className="schedule-info">
                          <div className="schedule-meta">
                            <ul>
                              <li>
                                <i className="far fa-clock"></i> 10.00 AM -
                                12.00 PM
                              </li>
                              <li>
                                <i className="fa fa-solid fa-location-dot"></i>{" "}
                                25/B Milford, New York
                              </li>
                            </ul>
                          </div>
                          <h4>
                            <Link to="/">
                              Introduction Digital Technology Conference.
                            </Link>
                          </h4>
                          <p>
                            There are many variations of passages available but
                            the majority have suffered alteration in some form
                            by injected humour, or randomised words which dont
                            look even slightly believable.
                          </p>
                        </div>
                        <div className="schedule-bottom">
                          <div className="schedule-speaker">
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img5} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="fa fa-solid fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Bryan Credle</h6>
                                <span>Technology Officer</span>
                              </div>
                            </div>
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img6} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="fa fa-solid fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Helene Falcon</h6>
                                <span>Operations Officer</span>
                              </div>
                            </div>
                          </div>
                          <Link to="/" className="theme-btn">
                            Buy Tickets<i className="fas fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="schedule-item last">
                    <span className="schedule-count">03</span>
                    <div className="schedule-content-wrap">
                      <div className="schedule-img">
                        <img src={tab1Img7} alt="" />
                      </div>
                      <div className="schedule-content">
                        <div className="schedule-info">
                          <div className="schedule-meta">
                            <ul>
                              <li>
                                <i className="far fa-clock"></i> 10.00 AM -
                                12.00 PM
                              </li>
                              <li>
                                <i className="fa fa-solid fa-location-dot"></i>{" "}
                                25/B Milford, New York
                              </li>
                            </ul>
                          </div>
                          <h4>
                            <Link to="/">
                              International Technology Summit Conference.
                            </Link>
                          </h4>
                          <p>
                            There are many variations of passages available but
                            the majority have suffered alteration in some form
                            by injected humour, or randomised words which dont
                            look even slightly believable.
                          </p>
                        </div>
                        <div className="schedule-bottom">
                          <div className="schedule-speaker">
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img3} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="fa fa-solid fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Karin Dnox</h6>
                                <span>Software Engineer</span>
                              </div>
                            </div>
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img5} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="fa fa-solid fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>David Russell</h6>
                                <span>Product Designer</span>
                              </div>
                            </div>
                          </div>
                          <Link to="/" className="theme-btn">
                            Buy Tickets<i className="fas fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* tab 2 */}
            <div
              className="tab-pane fade"
              id="pills-schedule2"
              role="tabpanel"
              aria-labelledby="pills-schedule-tab2"
              tabIndex="0"
            >
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="schedule-item">
                    <span className="schedule-count">01</span>
                    <div className="schedule-content-wrap">
                      <div className="schedule-img">
                        <img src={tab1Img1} alt="" />
                      </div>
                      <div className="schedule-content">
                        <div className="schedule-info">
                          <div className="schedule-meta">
                            <ul>
                              <li>
                                <i className="far fa-clock"></i> 10.00 AM -
                                12.00 PM
                              </li>
                              <li>
                                <i className="fa fa-solid fa-location-dot"></i>{" "}
                                25/B Milford, New York
                              </li>
                            </ul>
                          </div>
                          <h4>
                            <Link to="/">Business World Event Introduction</Link>
                          </h4>
                          <p>
                            There are many variations of passages available but
                            the majority have suffered alteration in some form
                            by injected humour, or randomised words which dont
                            look even slightly believable.
                          </p>
                        </div>
                        <div className="schedule-bottom">
                          <div className="schedule-speaker">
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img2} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="fa fa-solid fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Frederick Taylor</h6>
                                <span>UX Designer</span>
                              </div>
                            </div>
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img3} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="fa fa-solid fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Tony Mendoza</h6>
                                <span>Developer</span>
                              </div>
                            </div>
                          </div>
                          <Link to="/" className="theme-btn">
                            Buy Tickets<i className="fas fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="schedule-item">
                    <span className="schedule-count">02</span>
                    <div className="schedule-content-wrap">
                      <div className="schedule-img">
                        <img src={tab1Img4} alt="" />
                      </div>
                      <div className="schedule-content">
                        <div className="schedule-info">
                          <div className="schedule-meta">
                            <ul>
                              <li>
                                <i className="far fa-clock"></i> 10.00 AM -
                                12.00 PM
                              </li>
                              <li>
                                <i className="fa fa-solid fa-location-dot"></i>{" "}
                                25/B Milford, New York
                              </li>
                            </ul>
                          </div>
                          <h4>
                            <Link to="/">
                              Introduction Digital Technology Conference.
                            </Link>
                          </h4>
                          <p>
                            There are many variations of passages available but
                            the majority have suffered alteration in some form
                            by injected humour, or randomised words which dont
                            look even slightly believable.
                          </p>
                        </div>
                        <div className="schedule-bottom">
                          <div className="schedule-speaker">
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img5} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="fa fa-solid fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Bryan Credle</h6>
                                <span>Technology Officer</span>
                              </div>
                            </div>
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img6} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="fa fa-solid fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Helene Falcon</h6>
                                <span>Operations Officer</span>
                              </div>
                            </div>
                          </div>
                          <Link to="/" className="theme-btn">
                            Buy Tickets<i className="fas fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="schedule-item last">
                    <span className="schedule-count">03</span>
                    <div className="schedule-content-wrap">
                      <div className="schedule-img">
                        <img src={tab1Img7} alt="" />
                      </div>
                      <div className="schedule-content">
                        <div className="schedule-info">
                          <div className="schedule-meta">
                            <ul>
                              <li>
                                <i className="far fa-clock"></i> 10.00 AM -
                                12.00 PM
                              </li>
                              <li>
                                <i className="fa fa-solid fa-location-dot"></i>{" "}
                                25/B Milford, New York
                              </li>
                            </ul>
                          </div>
                          <h4>
                            <Link to="/">
                              International Technology Summit Conference.
                            </Link>
                          </h4>
                          <p>
                            There are many variations of passages available but
                            the majority have suffered alteration in some form
                            by injected humour, or randomised words which dont
                            look even slightly believable.
                          </p>
                        </div>
                        <div className="schedule-bottom">
                          <div className="schedule-speaker">
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img3} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="fa fa-solid fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Karin Dnox</h6>
                                <span>Software Engineer</span>
                              </div>
                            </div>
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img5} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="fa fa-solid fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>David Russell</h6>
                                <span>Product Designer</span>
                              </div>
                            </div>
                          </div>
                          <Link to="/" className="theme-btn">
                            Buy Tickets<i className="fas fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* tab 3 */}
            <div
              className="tab-pane fade"
              id="pills-schedule3"
              role="tabpanel"
              aria-labelledby="pills-schedule-tab3"
              tabIndex="0"
            >
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="schedule-item">
                    <span className="schedule-count">01</span>
                    <div className="schedule-content-wrap">
                      <div className="schedule-img">
                        <img src={tab1Img1} alt="" />
                      </div>
                      <div className="schedule-content">
                        <div className="schedule-info">
                          <div className="schedule-meta">
                            <ul>
                              <li>
                                <i className="far fa-clock"></i> 10.00 AM -
                                12.00 PM
                              </li>
                              <li>
                                <i className="fa fa-solid fa-location-dot"></i>{" "}
                                25/B Milford, New York
                              </li>
                            </ul>
                          </div>
                          <h4>
                            <Link to="/">Business World Event Introduction</Link>
                          </h4>
                          <p>
                            There are many variations of passages available but
                            the majority have suffered alteration in some form
                            by injected humour, or randomised words which dont
                            look even slightly believable.
                          </p>
                        </div>
                        <div className="schedule-bottom">
                          <div className="schedule-speaker">
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img2} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="fa fa-solid fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Frederick Taylor</h6>
                                <span>UX Designer</span>
                              </div>
                            </div>
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img3} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="fa fa-solid fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Tony Mendoza</h6>
                                <span>Developer</span>
                              </div>
                            </div>
                          </div>
                          <Link to="/" className="theme-btn">
                            Buy Tickets<i className="fas fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="schedule-item">
                    <span className="schedule-count">02</span>
                    <div className="schedule-content-wrap">
                      <div className="schedule-img">
                        <img src={tab1Img4} alt="" />
                      </div>
                      <div className="schedule-content">
                        <div className="schedule-info">
                          <div className="schedule-meta">
                            <ul>
                              <li>
                                <i className="far fa-clock"></i> 10.00 AM -
                                12.00 PM
                              </li>
                              <li>
                                <i className="fa fa-solid fa-location-dot"></i>{" "}
                                25/B Milford, New York
                              </li>
                            </ul>
                          </div>
                          <h4>
                            <Link to="/">
                              Introduction Digital Technology Conference.
                            </Link>
                          </h4>
                          <p>
                            There are many variations of passages available but
                            the majority have suffered alteration in some form
                            by injected humour, or randomised words which dont
                            look even slightly believable.
                          </p>
                        </div>
                        <div className="schedule-bottom">
                          <div className="schedule-speaker">
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img5} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="fa fa-solid fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Bryan Credle</h6>
                                <span>Technology Officer</span>
                              </div>
                            </div>
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img6} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="fa fa-solid fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Helene Falcon</h6>
                                <span>Operations Officer</span>
                              </div>
                            </div>
                          </div>
                          <Link to="/" className="theme-btn">
                            Buy Tickets<i className="fas fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="schedule-item last">
                    <span className="schedule-count">03</span>
                    <div className="schedule-content-wrap">
                      <div className="schedule-img">
                        <img src={tab1Img7} alt="" />
                      </div>
                      <div className="schedule-content">
                        <div className="schedule-info">
                          <div className="schedule-meta">
                            <ul>
                              <li>
                                <i className="far fa-clock"></i> 10.00 AM -
                                12.00 PM
                              </li>
                              <li>
                                <i className="fa fa-solid fa-location-dot"></i>{" "}
                                25/B Milford, New York
                              </li>
                            </ul>
                          </div>
                          <h4>
                            <Link to="/">
                              International Technology Summit Conference.
                            </Link>
                          </h4>
                          <p>
                            There are many variations of passages available but
                            the majority have suffered alteration in some form
                            by injected humour, or randomised words which dont
                            look even slightly believable.
                          </p>
                        </div>
                        <div className="schedule-bottom">
                          <div className="schedule-speaker">
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img3} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="fa fa-solid fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Karin Dnox</h6>
                                <span>Software Engineer</span>
                              </div>
                            </div>
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img5} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="fa fa-solid fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>David Russell</h6>
                                <span>Product Designer</span>
                              </div>
                            </div>
                          </div>
                          <Link to="/" className="theme-btn">
                            Buy Tickets<i className="fas fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
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
