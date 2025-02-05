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
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fal fa-calendar-days"></i>
                    </span>
                    <select className="select form-select form-control">
                      <option value="">All</option>
                      <option value="1">Morning</option>
                      <option value="2">Afternoon</option>
                      <option value="3">Evening</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fal fa-calendar-days"></i>
                    </span>
                    <select className="select form-select form-control">
                      <option value="">All Titles</option>
                      <option value="1">Title 1</option>
                      <option value="2">Title 2</option>
                      <option value="3">Title 3</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
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
                    <span className="date">May 25, 2025</span>
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
                    <span className="date">May 26, 2025</span>
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
                    <span className="date">May 27, 2025</span>
                  </span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-schedule-tab4"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-schedule4"
                  type="button"
                  role="tab"
                  aria-controls="pills-schedule4"
                  aria-selected="false"
                >
                  <span className="icon">
                    <i className="fal fa-calendar-days"></i>
                  </span>
                  <span className="content">
                    <span className="day">Day 04</span>
                    <span className="date">May 28, 2025</span>
                  </span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-schedule-tab5"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-schedule5"
                  type="button"
                  role="tab"
                  aria-controls="pills-schedule5"
                  aria-selected="false"
                >
                  <span className="icon">
                    <i className="fal fa-calendar-days"></i>
                  </span>
                  <span className="content">
                    <span className="day">Day 05</span>
                    <span className="date">May 29, 2025</span>
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
                                11.00 AM
                              </li>
                              <li>
                                <i className="far fa-location-dot"></i>{" "}
                                Venue One
                              </li>
                            </ul>
                          </div>
                          <h4>
                            <Link to="/">Title One</Link>
                          </h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the
                            1500s when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                          </p>
                        </div>
                        <div className="schedule-bottom">
                          <div className="schedule-speaker">
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img2} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="far fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Speaker Name</h6>
                                <span>Speaker Designation</span>
                              </div>
                            </div>
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img3} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="far fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Speaker Name</h6>
                                <span>Speaker Designation</span>
                              </div>
                            </div>
                          </div>
                          {/* <Link to="/" className="theme-btn">
                            Buy Tickets<i className="fas fa-arrow-right"></i>
                          </Link> */}
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
                                <i className="far fa-clock"></i> 11.15 AM -
                                12.15 PM
                              </li>
                              <li>
                                <i className="far fa-location-dot"></i>{" "}
                                Venue One
                              </li>
                            </ul>
                          </div>
                          <h4>
                            <Link to="/">Title Two</Link>
                          </h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the
                            1500s when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                          </p>
                        </div>
                        <div className="schedule-bottom">
                          <div className="schedule-speaker">
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img5} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="far fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Speaker Name</h6>
                                <span>Speaker Designation</span>
                              </div>
                            </div>
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img6} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="far fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Speaker Name</h6>
                                <span>Speaker Designation</span>
                              </div>
                            </div>
                          </div>
                          {/* <Link to="/" className="theme-btn">
                            Buy Tickets<i className="fas fa-arrow-right"></i>
                          </Link> */}
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
                                <i className="far fa-clock"></i> 12.30 PM -
                                01.30 PM
                              </li>
                              <li>
                                <i className="far fa-location-dot"></i>{" "}
                                Venue One
                              </li>
                            </ul>
                          </div>
                          <h4>
                            <Link to="/">Title Three</Link>
                          </h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the
                            1500s when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                          </p>
                        </div>
                        <div className="schedule-bottom">
                          <div className="schedule-speaker">
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img3} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="far fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Speaker Name</h6>
                                <span>Speaker Designation</span>
                              </div>
                            </div>
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img5} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="far fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Speaker Name</h6>
                                <span>Speaker Designation</span>
                              </div>
                            </div>
                          </div>
                          {/* <Link to="/" className="theme-btn">
                            Buy Tickets<i className="fas fa-arrow-right"></i>
                          </Link> */}
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
                                11.00 AM
                              </li>
                              <li>
                                <i className="far fa-location-dot"></i>{" "}
                                Venue One
                              </li>
                            </ul>
                          </div>
                          <h4>
                            <Link to="/">Title One</Link>
                          </h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the
                            1500s when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                          </p>
                        </div>
                        <div className="schedule-bottom">
                          <div className="schedule-speaker">
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img2} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="far fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Speaker Name</h6>
                                <span>Speaker Designation</span>
                              </div>
                            </div>
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img3} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="far fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Speaker Name</h6>
                                <span>Speaker Designation</span>
                              </div>
                            </div>
                          </div>
                          {/* <Link to="/" className="theme-btn">
                            Buy Tickets<i className="fas fa-arrow-right"></i>
                          </Link> */}
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
                                <i className="far fa-clock"></i> 11.15 AM -
                                12.15 PM
                              </li>
                              <li>
                                <i className="far fa-location-dot"></i>{" "}
                                Venue One
                              </li>
                            </ul>
                          </div>
                          <h4>
                            <Link to="/">Title Two</Link>
                          </h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the
                            1500s when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                          </p>
                        </div>
                        <div className="schedule-bottom">
                          <div className="schedule-speaker">
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img5} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="far fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Speaker Name</h6>
                                <span>Speaker Designation</span>
                              </div>
                            </div>
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img6} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="far fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Speaker Name</h6>
                                <span>Speaker Designation</span>
                              </div>
                            </div>
                          </div>
                          {/* <Link to="/" className="theme-btn">
                            Buy Tickets<i className="fas fa-arrow-right"></i>
                          </Link> */}
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
                                <i className="far fa-clock"></i> 12.30 PM -
                                01.30 PM
                              </li>
                              <li>
                                <i className="far fa-location-dot"></i>{" "}
                                Venue One
                              </li>
                            </ul>
                          </div>
                          <h4>
                            <Link to="/">Title Three</Link>
                          </h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the
                            1500s when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                          </p>
                        </div>
                        <div className="schedule-bottom">
                          <div className="schedule-speaker">
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img3} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="far fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Speaker Name</h6>
                                <span>Speaker Designation</span>
                              </div>
                            </div>
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img5} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="far fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Speaker Name</h6>
                                <span>Speaker Designation</span>
                              </div>
                            </div>
                          </div>
                          {/* <Link to="/" className="theme-btn">
                            Buy Tickets<i className="fas fa-arrow-right"></i>
                          </Link> */}
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
                                11.00 AM
                              </li>
                              <li>
                                <i className="far fa-location-dot"></i>{" "}
                                Venue One
                              </li>
                            </ul>
                          </div>
                          <h4>
                            <Link to="/">Title One</Link>
                          </h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the
                            1500s when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                          </p>
                        </div>
                        <div className="schedule-bottom">
                          <div className="schedule-speaker">
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img2} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="far fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Speaker Name</h6>
                                <span>Speaker Designation</span>
                              </div>
                            </div>
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img3} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="far fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Speaker Name</h6>
                                <span>Speaker Designation</span>
                              </div>
                            </div>
                          </div>
                          {/* <Link to="/" className="theme-btn">
                            Buy Tickets<i className="fas fa-arrow-right"></i>
                          </Link> */}
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
                                <i className="far fa-clock"></i> 11.15 AM -
                                12.15 PM
                              </li>
                              <li>
                                <i className="far fa-location-dot"></i>{" "}
                                Venue One
                              </li>
                            </ul>
                          </div>
                          <h4>
                            <Link to="/">Title Two</Link>
                          </h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the
                            1500s when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                          </p>
                        </div>
                        <div className="schedule-bottom">
                          <div className="schedule-speaker">
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img5} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="far fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Speaker Name</h6>
                                <span>Speaker Designation</span>
                              </div>
                            </div>
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img6} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="far fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Speaker Name</h6>
                                <span>Speaker Designation</span>
                              </div>
                            </div>
                          </div>
                          {/* <Link to="/" className="theme-btn">
                            Buy Tickets<i className="fas fa-arrow-right"></i>
                          </Link> */}
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
                                <i className="far fa-clock"></i> 12.30 PM -
                                01.30 PM
                              </li>
                              <li>
                                <i className="far fa-location-dot"></i>{" "}
                                Venue One
                              </li>
                            </ul>
                          </div>
                          <h4>
                            <Link to="/">Title Three</Link>
                          </h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the
                            1500s when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                          </p>
                        </div>
                        <div className="schedule-bottom">
                          <div className="schedule-speaker">
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img3} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="far fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Speaker Name</h6>
                                <span>Speaker Designation</span>
                              </div>
                            </div>
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img5} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="far fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Speaker Name</h6>
                                <span>Speaker Designation</span>
                              </div>
                            </div>
                          </div>
                          {/* <Link to="/" className="theme-btn">
                            Buy Tickets<i className="fas fa-arrow-right"></i>
                          </Link> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* tab 4 */}
            <div
              className="tab-pane fade"
              id="pills-schedule4"
              role="tabpanel"
              aria-labelledby="pills-schedule-tab4"
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
                                11.00 AM
                              </li>
                              <li>
                                <i className="far fa-location-dot"></i>{" "}
                                Venue One
                              </li>
                            </ul>
                          </div>
                          <h4>
                            <Link to="/">Title One</Link>
                          </h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the
                            1500s when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                          </p>
                        </div>
                        <div className="schedule-bottom">
                          <div className="schedule-speaker">
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img2} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="far fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Speaker Name</h6>
                                <span>Speaker Designation</span>
                              </div>
                            </div>
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img3} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="far fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Speaker Name</h6>
                                <span>Speaker Designation</span>
                              </div>
                            </div>
                          </div>
                          {/* <Link to="/" className="theme-btn">
                            Buy Tickets<i className="fas fa-arrow-right"></i>
                          </Link> */}
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
                                <i className="far fa-clock"></i> 11.15 AM -
                                12.15 PM
                              </li>
                              <li>
                                <i className="far fa-location-dot"></i>{" "}
                                Venue One
                              </li>
                            </ul>
                          </div>
                          <h4>
                            <Link to="/">Title Two</Link>
                          </h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the
                            1500s when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                          </p>
                        </div>
                        <div className="schedule-bottom">
                          <div className="schedule-speaker">
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img5} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="far fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Speaker Name</h6>
                                <span>Speaker Designation</span>
                              </div>
                            </div>
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img6} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="far fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Speaker Name</h6>
                                <span>Speaker Designation</span>
                              </div>
                            </div>
                          </div>
                          {/* <Link to="/" className="theme-btn">
                            Buy Tickets<i className="fas fa-arrow-right"></i>
                          </Link> */}
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
                                <i className="far fa-clock"></i> 12.30 PM -
                                01.30 PM
                              </li>
                              <li>
                                <i className="far fa-location-dot"></i>{" "}
                                Venue One
                              </li>
                            </ul>
                          </div>
                          <h4>
                            <Link to="/">Title Three</Link>
                          </h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the
                            1500s when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                          </p>
                        </div>
                        <div className="schedule-bottom">
                          <div className="schedule-speaker">
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img3} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="far fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Speaker Name</h6>
                                <span>Speaker Designation</span>
                              </div>
                            </div>
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img5} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="far fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Speaker Name</h6>
                                <span>Speaker Designation</span>
                              </div>
                            </div>
                          </div>
                          {/* <Link to="/" className="theme-btn">
                            Buy Tickets<i className="fas fa-arrow-right"></i>
                          </Link> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* tab 5 */}
            <div
              className="tab-pane fade"
              id="pills-schedule5"
              role="tabpanel"
              aria-labelledby="pills-schedule-tab5"
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
                                11.00 AM
                              </li>
                              <li>
                                <i className="far fa-location-dot"></i>{" "}
                                Venue One
                              </li>
                            </ul>
                          </div>
                          <h4>
                            <Link to="/">Title One</Link>
                          </h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the
                            1500s when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                          </p>
                        </div>
                        <div className="schedule-bottom">
                          <div className="schedule-speaker">
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img2} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="far fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Speaker Name</h6>
                                <span>Speaker Designation</span>
                              </div>
                            </div>
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img3} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="far fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Speaker Name</h6>
                                <span>Speaker Designation</span>
                              </div>
                            </div>
                          </div>
                          {/* <Link to="/" className="theme-btn">
                            Buy Tickets<i className="fas fa-arrow-right"></i>
                          </Link> */}
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
                                <i className="far fa-clock"></i> 11.15 AM -
                                12.15 PM
                              </li>
                              <li>
                                <i className="far fa-location-dot"></i>{" "}
                                Venue One
                              </li>
                            </ul>
                          </div>
                          <h4>
                            <Link to="/">Title Two</Link>
                          </h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the
                            1500s when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                          </p>
                        </div>
                        <div className="schedule-bottom">
                          <div className="schedule-speaker">
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img5} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="far fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Speaker Name</h6>
                                <span>Speaker Designation</span>
                              </div>
                            </div>
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img6} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="far fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Speaker Name</h6>
                                <span>Speaker Designation</span>
                              </div>
                            </div>
                          </div>
                          {/* <Link to="/" className="theme-btn">
                            Buy Tickets<i className="fas fa-arrow-right"></i>
                          </Link> */}
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
                                <i className="far fa-clock"></i> 12.30 PM -
                                01.30 PM
                              </li>
                              <li>
                                <i className="far fa-location-dot"></i>{" "}
                                Venue One
                              </li>
                            </ul>
                          </div>
                          <h4>
                            <Link to="/">Title Three</Link>
                          </h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the
                            1500s when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                          </p>
                        </div>
                        <div className="schedule-bottom">
                          <div className="schedule-speaker">
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img3} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="far fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Speaker Name</h6>
                                <span>Speaker Designation</span>
                              </div>
                            </div>
                            <div className="speaker-item">
                              <div className="speaker-img">
                                <img src={tab1Img5} alt="" />
                                <span className="speaker-img-icon">
                                  <i className="far fa-microphone-lines"></i>
                                </span>
                              </div>
                              <div className="speaker-info">
                                <h6>Speaker Name</h6>
                                <span>Speaker Designation</span>
                              </div>
                            </div>
                          </div>
                          {/* <Link to="/" className="theme-btn">
                            Buy Tickets<i className="fas fa-arrow-right"></i>
                          </Link> */}
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
