/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import videoBG from "../assets/videoBG.mp4";

export default function VideoSection() {
  const videoBGImg = {
    backgroundImage: `url(${videoBG})`,
  };

  return (
    <>
      <div className="video-area position-relative">
        {/* Background Video */}
        <video
          className="position-absolute w-100 h-100 object-fit-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoBG} type="video/mp4" />
        </video>

        {/* Overlay Content */}
        <div
          className="container-fluid px-0 position-relative"
          style={{ zIndex: 2 }}
        >
          <div className="video-content pb-50">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="video-info">
                    <div className="site-heading mb-0">
                      <span className="site-title-tagline text-white">
                        Latest Video
                      </span>
                      <h2 className="site-title text-white">
                        We organize conference for <span>creative</span>{" "}
                        thinking.
                      </h2>
                    </div>
                    <Link to="/" className="theme-btn mt-30">
                      Learn More <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="video-wrapper">
                    {/* <Link
                      className="play-btn popup-youtube"
                      to="https://www.youtube.com/watch?v=ckHzmP1evNU"
                    >
                      <i className="fas fa-play"></i>
                    </Link> */}
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
