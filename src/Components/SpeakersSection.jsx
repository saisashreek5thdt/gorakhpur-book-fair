import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import speaker1 from "../assets/img/speaker/01.jpg";
import speaker2 from "../assets/img/speaker/02.jpg";
import speaker3 from "../assets/img/speaker/03.jpg";
import speaker4 from "../assets/img/speaker/04.jpg";
import speaker5 from "../assets/img/speaker/05.jpg";
import speaker6 from "../assets/img/speaker/06.jpg";

export default function SpeakersSection() {
  const speakersInfo = [
    {
      id: 1,
      name: "Speaker Name",
      desc: "Speaker Designation",
      imgURL: speaker1,
    },
    {
      id: 2,
      name: "Speaker Name",
      desc: "Speaker Designation",
      imgURL: speaker2,
    },
    {
      id: 3,
      name: "Speaker Name",
      desc: "Speaker Designation",
      imgURL: speaker3,
    },
    {
      id: 4,
      name: "Speaker Name",
      desc: "Speaker Designation",
      imgURL: speaker4,
    },
    {
      id: 5,
      name: "Speaker Name",
      desc: "Speaker Designation",
      imgURL: speaker5,
    },
    {
      id: 6,
      name: "Speaker Name",
      desc: "Speaker Designation",
      imgURL: speaker6,
    },
  ];

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
          {/* <div className="row g-4 wow fadeInUp" data-wow-delay=".25s">
            <div className="col-6 col-md-3 col-lg-2">
              <div className="team-item">
                <div className="team-img">
                  <img src={speaker1} alt="" />
                </div>
                <div className="team-content">
                  <div className="info">
                    <h4>
                      <Link to="/">Speaker Name</Link>
                    </h4>
                    <span>Speaker Designation</span>
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
                  <div className="info">
                    <h4>
                      <Link to="/">Speaker Name</Link>
                    </h4>
                    <span>Speaker Designation</span>
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
                  <div className="info">
                    <h4>
                      <Link to="/">Speaker Name</Link>
                    </h4>
                    <span>Speaker Designation</span>
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
                  <div className="info">
                    <h4>
                      <Link to="/">Speaker Name</Link>
                    </h4>
                    <span>Speaker Designation</span>
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
                  <div className="info">
                    <h4>
                      <Link to="/">Speaker Name</Link>
                    </h4>
                    <span>Speaker Designation</span>
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
                  <div className="info">
                    <h4>
                      <Link to="/">Speaker Name</Link>
                    </h4>
                    <span>Speaker Designation</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="row g-4 wow fadeInUp" data-wow-delay=".25s">
            <Swiper
              className="swiper"
              slidesPerView={3}
              spaceBetween={50}
              loop={true}
              autoplay={{
                delay: 3000, // Adjust delay time (3 seconds here)
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                320: { slidesPerView: 1 }, // Mobile view shows 1 slide
                768: { slidesPerView: 2 }, // Tablet view shows 2 slides
                1024: { slidesPerView: 3 }, // Desktop view shows 3 slides
              }}
            >
              {speakersInfo.map((speak, index) => (
                <SwiperSlide key={index}>
                  <div className="col-6 col-md-3 col-lg-2" style={{ width: "300px", objectFit: "cover" }}>
                    <div className="team-item">
                      <div className="team-img">
                        <img src={speak.imgURL} alt="" />
                      </div>
                      <div className="team-content">
                        <div className="info">
                          <h4>
                            <Link to="/">{speak.name}</Link>
                          </h4>
                          <span>{speak.desc}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="text-center mt-40 wow fadeInUp" data-wow-delay=".25s">
            <Link to="/" className="theme-btn">
              <span className="far fa-microphone-lines"></span> View Speakers
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
