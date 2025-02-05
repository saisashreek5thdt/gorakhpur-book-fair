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
                <span className="site-title-tagline">Team</span>
                <h2 className="site-title">
                  Executive <span>Members</span>
                </h2>
                <div className="site-shadow-text">Team</div>
              </div>
            </div>
          </div>
          <div
            className="testimonial-slider owl-carousel owl-theme wow fadeInUp"
            data-wow-delay=".25s"
          >
            <div className="testimonial-single">
              <div className="testimonial-quote">
                {/* <div className="testimonial-rate">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div> */}
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don&apos;t look
                  even slightly believable.
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
                  <h4>Member Name</h4>
                  <p>Member Desination</p>
                </div>
              </div>
            </div>
            <div className="testimonial-single">
              <div className="testimonial-quote">
                {/* <div className="testimonial-rate">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div> */}
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don&apos;t look
                  even slightly believable.
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
                  <h4>Member Name</h4>
                  <p>Member Desination</p>
                </div>
              </div>
            </div>
            <div className="testimonial-single">
              <div className="testimonial-quote">
                {/* <div className="testimonial-rate">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div> */}
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don&apos;t look
                  even slightly believable.
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
                  <h4>Member Name</h4>
                  <p>Member Desination</p>
                </div>
              </div>
            </div>
            <div className="testimonial-single">
              <div className="testimonial-quote">
                {/* <div className="testimonial-rate">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div> */}
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don&apos;t look
                  even slightly believable.
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
                  <h4>Member Name</h4>
                  <p>Member Designation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
