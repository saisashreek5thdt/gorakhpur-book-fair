import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import icon1 from "../assets/img/icon/speaker.svg";
import icon2 from "../assets/img/icon/learn.svg";
import icon3 from "../assets/img/icon/meet.svg";
import icon4 from "../assets/img/icon/question.svg";

export default function EventFeatures() {
  const eventHighlights = [
    {
      id: 1,
      imgURL: icon1,
      title: "Vendor",
      desc: "It is a long established fact that a reader will be distracted.",
    },
    {
      id: 2,
      imgURL: icon2,
      title: "Volunteer",
      desc: "It is a long established fact that a reader will be distracted.",
    },
    {
      id: 3,
      imgURL: icon3,
      title: "Exhibitor",
      desc: "It is a long established fact that a reader will be distracted.",
    },
    {
      id: 4,
      imgURL: icon4,
      title: "Visitor",
      desc: "It is a long established fact that a reader will be distracted.",
    },
    {
      id: 5,
      imgURL: icon1,
      title: "Speaker",
      desc: "It is a long established fact that a reader will be distracted.",
    },
    {
      id: 6,
      imgURL: icon3,
      title: "Author",
      desc: "It is a long established fact that a reader will be distracted.",
    },
    {
      id: 7,
      imgURL: icon2,
      title: "Sponsoror",
      desc: "It is a long established fact that a reader will be distracted.",
    },
  ];

  return (
    <>
      <div className="feature-area fa-negative">
        <div className="container">
          <div className="feature-wrapper">
            <div className="row g-4">
              <Swiper                
                className="swiper"
                slidesPerView={3}
                spaceBetween={100}
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
                {eventHighlights.map((event, index) => (
                  <SwiperSlide key={index}>
                    <div className="col-md-6 col-lg-3" style={{ width: "275px" }}>
                      <div
                        className="feature-item wow fadeInDown"
                        data-wow-delay=".25s"
                      >
                        <span className="count"></span>
                        <div className="feature-icon">
                          <img src={event.imgURL} alt="" />
                        </div>
                        <h4 className="feature-title">{event.title}</h4>
                        <p>{event.desc}</p>
                        <Link to="/" className="theme-btn mt-20">
                          Register<i className="fas fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
