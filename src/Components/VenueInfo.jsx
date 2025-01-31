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
                  <span>Venue 01</span>
                  <h6>Marine City Michigan</h6>
                  <p>New York, USA</p>
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
                  <span>Venue 02</span>
                  <h6>Kansas City Omaha</h6>
                  <p>New York, USA</p>
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
                  <span>Venue 03</span>
                  <h6>New Hampshire City</h6>
                  <p>New York, USA</p>
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
