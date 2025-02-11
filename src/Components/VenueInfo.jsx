import venueImg1 from "../assets/img/venue/01.jpg";
import venueImg2 from "../assets/img/venue/02.jpg";
import venueImg3 from "../assets/img/venue/03.jpg";

export default function VenueInfo() {
  return (
    <>
      <div className="venue-area py-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="site-heading text-center wow fadeInDown"
                data-wow-delay=".25s"
              >
                <span className="site-title-tagline">Venues</span>
                <h2 className="site-title">
                  Explore Our <span>Venues</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-5 wow fadeInUp" data-wow-delay=".25s">
            <div className="col-md-6 col-lg-4">
              <div className="venue-item">
                <div className="venue-img">
                  <img src={venueImg1} alt="" />
                </div>
                <div className="venue-content">
                  <span>Pune</span>
                  <h6>Pune Book Fair</h6>
                  <p>Pune, Maharashtra</p>
                  <div className="venue-play">
                    <a
                      className="popup-youtube"
                      href="https://www.youtube.com/watch?v=ckHzmP1evNU"
                    >
                      <span>Virtual Tour</span>
                      <i className="fas fa-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="venue-item">
                <div className="venue-img">
                  <img src={venueImg2} alt="" />
                </div>
                <div className="venue-content">
                  <span>Mumbai</span>
                  <h6>Mumbai Book Fair</h6>
                  <p>Azad Maidan, Mumbai</p>
                  <div className="venue-play">
                    <a
                      className="popup-youtube"
                      href="https://www.youtube.com/watch?v=ckHzmP1evNU"
                    >
                      <span>Virtual Tour</span>
                      <i className="fas fa-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="venue-item">
                <div className="venue-img">
                  <img src={venueImg3} alt="" />
                </div>
                <div className="venue-content">
                  <span>Gorakhpur</span>
                  <h6>Gorakhpur Book Fair</h6>
                  <p>Gorakhpur, UP</p>
                  <div className="venue-play">
                    <a
                      className="popup-youtube"
                      href="https://www.youtube.com/watch?v=ckHzmP1evNU"
                    >
                      <span>Virtual Tour</span>
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
