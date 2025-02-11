import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import sponsorsImg1 from "../assets/img/partner/sponsor.png";
import sponsorsImg2 from "../assets/img/partner/sponsor.png";
import sponsorsImg3 from "../assets/img/partner/sponsor.png";
import sponsorsImg4 from "../assets/img/partner/sponsor.png";
import sponsorsImg5 from "../assets/img/partner/sponsor.png";
import sponsorsImg6 from "../assets/img/partner/sponsor.png";
import sponsorsImg7 from "../assets/img/partner/sponsor.png";
import sponsorsImg8 from "../assets/img/partner/sponsor.png";
import sponsorsImg9 from "../assets/img/partner/sponsor.png";
import sponsorsImg10 from "../assets/img/partner/sponsor.png";

export default function Sponsors() {
  const sponsorsImg = [
    {
      id: 1,
      imgURL: sponsorsImg1,
    },
    {
      id: 2,
      imgURL: sponsorsImg2,
    },
    {
      id: 3,
      imgURL: sponsorsImg3,
    },
    {
      id: 4,
      imgURL: sponsorsImg4,
    },
    {
      id: 5,
      imgURL: sponsorsImg5,
    },
    {
      id: 6,
      imgURL: sponsorsImg6,
    },
    {
      id: 7,
      imgURL: sponsorsImg7,
    },
    {
      id: 8,
      imgURL: sponsorsImg8,
    },
    {
      id: 9,
      imgURL: sponsorsImg9,
    },
    {
      id: 10,
      imgURL: sponsorsImg10,
    },
  ];

  return (
    <>
      <div className="partner-area partner-bg py-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="site-heading text-center wow fadeInDown"
                data-wow-delay=".25s"
              >
                <span className="site-title-tagline">Sponsors</span>
                <h2 className="site-title">
                  Lets Check Our <span>Sponsors</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="partner-wrapper wow fadeInUp" data-wow-delay=".25s">
            <div className="row g-5 justify-content-center">
              <Swiper
                className="swiper"
                slidesPerView={5}
                spaceBetween={10}
                loop={true}
                autoplay={{
                  delay: 3000, // Adjust delay time (3 seconds here)
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                breakpoints={{
                  320: { slidesPerView: 1 }, // Mobile view shows 1 slide
                  768: { slidesPerView: 3 }, // Tablet view shows 2 slides
                  1024: { slidesPerView: 5 }, // Desktop view shows 3 slides
                }}
              >
                {sponsorsImg.map((sponsor, index) => (
                  <SwiperSlide key={index}>
                    <div className="col-6 col-md-2" style={{ width: "100%", objectFit: "cover" }}>
                      <img src={sponsor.imgURL} alt="thumb" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* <div className="row g-5 justify-content-center">
              <div className="col-6 col-md-2">
                <img src={sponsorsImg1} alt="thumb" />
              </div>
              <div className="col-6 col-md-2">
                <img src={sponsorsImg2} alt="thumb" />
              </div>
              <div className="col-6 col-md-2">
                <img src={sponsorsImg3} alt="thumb" />
              </div>
              <div className="col-6 col-md-2">
                <img src={sponsorsImg4} alt="thumb" />
              </div>
              <div className="col-6 col-md-2">
                <img src={sponsorsImg5} alt="thumb" />
              </div>
              <div className="col-6 col-md-2">
                <img src={sponsorsImg6} alt="thumb" />
              </div>
              <div className="col-6 col-md-2">
                <img src={sponsorsImg7} alt="thumb" />
              </div>
              <div className="col-6 col-md-2">
                <img src={sponsorsImg8} alt="thumb" />
              </div>
              <div className="col-6 col-md-2">
                <img src={sponsorsImg9} alt="thumb" />
              </div>
              <div className="col-6 col-md-2">
                <img src={sponsorsImg10} alt="thumb" />
              </div>
            </div> */}
          </div>
          <div className="text-center mt-40 wow fadeInUp" data-wow-delay=".25s">
            <Link to="/" className="theme-btn">
              <span className="fal fa-users"></span> Become Sponsors
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
