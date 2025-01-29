import videoBG from "../assets/img/video/01.jpg";

export default function VideoSection() {
  const videoBGImg = {
    backgroundImage: `url(${videoBG})`,
  };

  return (
    <>
      <div className="video-area">
        <div className="container-fluid px-0">
          <div className="video-content pb-50" style={videoBGImg}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="video-info">
                    <div className="site-heading mb-0">
                      <span className="site-title-tagline text-white">
                        Latest Video
                      </span>
                      <h2 className="site-title text-white">
                        We organize conference for
                        <span>creative</span> thinking.
                      </h2>
                    </div>
                    <a href="#" className="theme-btn mt-30">
                      Learn More <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="video-wrapper">
                    <a
                      className="play-btn popup-youtube"
                      href="https://www.youtube.com/watch?v=ckHzmP1evNU"
                    >
                      <i className="fas fa-play"></i>
                    </a>
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
