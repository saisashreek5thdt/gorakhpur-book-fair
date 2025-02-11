import { Link } from "react-router-dom";
import gallery1 from "../assets/img/gallery/fest/fest1.jpg";
import gallery2 from "../assets/img/gallery/fest/fest2.jpg";
import gallery3 from "../assets/img/gallery/fest/fest3.jpg";
import gallery4 from "../assets/img/gallery/fest/fest4.jpg";
import gallery5 from "../assets/img/gallery/fest/fest5.jpg";
import gallery6 from "../assets/img/gallery/fest/fest6.jpg";

export default function Gallery() {
  return (
    <>
      <div className="gallery-area py-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="site-heading text-center wow fadeInDown"
                data-wow-delay=".25s"
              >
                <span className="site-title-tagline">Gallery</span>
                <h2 className="site-title">
                  Lets Check Our Photo <br />
                  <span>Gallery</span>
                </h2>
                <div
                  className="site-shadow-text wow fadeInRight"
                  data-wow-delay=".35s"
                >
                  Our Gallery
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4 popup-gallery">
            <div className="col-md-12">
              <div className="row g-4">
                <div className="col-4">
                  <div
                    className="gallery-item wow fadeInDown"
                    data-wow-delay=".25s"
                  >
                    <div className="gallery-img">
                      <img src={gallery2} alt="" />
                      <Link className="popup-img gallery-link" to={gallery2}>
                        <i className="fal fa-plus"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div
                    className="gallery-item wow fadeInDown"
                    data-wow-delay=".25s"
                  >
                    <div className="gallery-img">
                      <img src={gallery3} alt="" />
                      <Link className="popup-img gallery-link" to={gallery3}>
                        <i className="fal fa-plus"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div
                    className="gallery-item wow fadeInDown"
                    data-wow-delay=".25s"
                  >
                    <div className="gallery-img">
                      <img src={gallery4} alt="" />
                      <Link className="popup-img gallery-link" to={gallery4}>
                        <i className="fal fa-plus"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div
                    className="gallery-item wow fadeInUp"
                    data-wow-delay=".25s"
                  >
                    <div className="gallery-img">
                      <img src={gallery1} alt="" />
                      <Link className="popup-img gallery-link" to={gallery1}>
                        <i className="fal fa-plus"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div
                    className="gallery-item wow fadeInUp"
                    data-wow-delay=".25s"
                  >
                    <div className="gallery-img">
                      <img src={gallery5} alt="" />
                      <Link className="popup-img gallery-link" to={gallery5}>
                        <i className="fal fa-plus"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div
                    className="gallery-item wow fadeInUp"
                    data-wow-delay=".25s"
                  >
                    <div className="gallery-img">
                      <img src={gallery6} alt="" />
                      <Link className="popup-img gallery-link" to={gallery6}>
                        <i className="fal fa-plus"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-40 wow fadeInUp" data-wow-delay=".25s">
            <Link to="/" className="theme-btn">
              <span className="fas fa-images"></span> View More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
