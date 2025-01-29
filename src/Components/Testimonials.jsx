import quoteImg1 from "../assets/img/icon/quote.svg";
import testimonialsImg1 from "../assets/img/testimonial/01.jpg";
import testimonialsImg2 from "../assets/img/testimonial/02.jpg";
import testimonialsImg3 from "../assets/img/testimonial/03.jpg";
import testimonialsImg4 from "../assets/img/testimonial/04.jpg";

export default function Testimonials() {
  return (
    <>
      <div className="testimonial-area bg py-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="site-heading text-center wow fadeInDown"
                data-wow-delay=".25s"
              >
                <span className="site-title-tagline">Testimonials</span>
                <h2 className="site-title">
                  What Our <span>Guest Says</span> <br />
                  About Us
                </h2>
                <div className="site-shadow-text">Testimonials</div>
              </div>
            </div>
          </div>
          <div
            className="testimonial-slider owl-carousel owl-theme wow fadeInUp"
            data-wow-delay=".25s"
          >
            <div className="testimonial-single">
              <div className="testimonial-quote">
                <div className="testimonial-rate">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p>
                  There are many variations of passage available the majority
                  have suffered to alteration in some form making it look like
                  readable by injected humour.
                </p>
                <div className="testimonial-quote-icon">
                  <img src={quoteImg1} alt="" />
                </div>
              </div>
              <div className="testimonial-content">
                <div className="testimonial-author-img">
                  <img src={testimonialsImg1} alt="" />
                </div>
                <div className="testimonial-author-info">
                  <h4>Anderson Dele</h4>
                  <p>Our Guest</p>
                </div>
              </div>
            </div>
            <div className="testimonial-single">
              <div className="testimonial-quote">
                <div className="testimonial-rate">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p>
                  There are many variations of passage available the majority
                  have suffered to alteration in some form making it look like
                  readable by injected humour.
                </p>
                <div className="testimonial-quote-icon">
                  <img src={quoteImg1} alt="" />
                </div>
              </div>
              <div className="testimonial-content">
                <div className="testimonial-author-img">
                  <img src={testimonialsImg2} alt="" />
                </div>
                <div className="testimonial-author-info">
                  <h4>Gordon Novak</h4>
                  <p>Our Guest</p>
                </div>
              </div>
            </div>
            <div className="testimonial-single">
              <div className="testimonial-quote">
                <div className="testimonial-rate">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p>
                  There are many variations of passage available the majority
                  have suffered to alteration in some form making it look like
                  readable by injected humour.
                </p>
                <div className="testimonial-quote-icon">
                  <img src={quoteImg1} alt="" />
                </div>
              </div>
              <div className="testimonial-content">
                <div className="testimonial-author-img">
                  <img src={testimonialsImg3} alt="" />
                </div>
                <div className="testimonial-author-info">
                  <h4>Lucille Rucker</h4>
                  <p>Our Guest</p>
                </div>
              </div>
            </div>
            <div className="testimonial-single">
              <div className="testimonial-quote">
                <div className="testimonial-rate">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p>
                  There are many variations of passage available the majority
                  have suffered to alteration in some form making it look like
                  readable by injected humour.
                </p>
                <div className="testimonial-quote-icon">
                  <img src={quoteImg1} alt="" />
                </div>
              </div>
              <div className="testimonial-content">
                <div className="testimonial-author-img">
                  <img src={testimonialsImg4} alt="" />
                </div>
                <div className="testimonial-author-info">
                  <h4>Elizabeth Galvan</h4>
                  <p>Our Guest</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
