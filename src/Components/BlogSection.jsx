import { Link } from "react-router-dom";
import blogImg1 from "../assets/img/blog/01.jpg";
import blogImg2 from "../assets/img/blog/02.jpg";
import blogImg3 from "../assets/img/blog/03.jpg";

export default function BlogSection() {
  return (
    <>
      <div className="blog-area py-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="site-heading text-center wow fadeInDown"
                data-wow-delay=".25s"
              >
                <span className="site-title-tagline">Our Blog</span>
                <h2 className="site-title">
                  Lets Check Our Latest <br />
                  <span>News & Blog</span>
                </h2>
                <div
                  className="site-shadow-text wow fadeInRight"
                  data-wow-delay=".35s"
                >
                  Our Blog
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="blog-item wow fadeInUp" data-wow-delay=".25s">
                <span className="blog-date">20 May</span>
                <div className="blog-item-img">
                  <img src={blogImg1} alt="Thumb" />
                </div>
                <div className="blog-item-info">
                  <div className="blog-item-meta">
                    <ul>
                      <li>
                        <Link to="/">
                          <i className="far fa-user-circle"></i> By Alicia Davis
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="far fa-comments"></i> 1.50k Comments
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h4 className="blog-title">
                    <Link to="/">
                      There are many variations of passages orem available
                    </Link>
                  </h4>
                  <Link className="theme-btn" to="/">
                    Read More<i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="blog-item wow fadeInDown" data-wow-delay=".25s">
                <span className="blog-date">25 May</span>
                <div className="blog-item-img">
                  <img src={blogImg2} alt="Thumb" />
                </div>
                <div className="blog-item-info">
                  <div className="blog-item-meta">
                    <ul>
                      <li>
                        <Link to="/">
                          <i className="far fa-user-circle"></i> By Alicia Davis
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="far fa-comments"></i> 1.25k Comments
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h4 className="blog-title">
                    <Link to="/">All the generators on tend to repeat chunks</Link>
                  </h4>
                  <Link className="theme-btn" to="/">
                    Read More<i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="blog-item wow fadeInUp" data-wow-delay=".25s">
                <span className="blog-date">30 May</span>
                <div className="blog-item-img">
                  <img src={blogImg3} alt="Thumb" />
                </div>
                <div className="blog-item-info">
                  <div className="blog-item-meta">
                    <ul>
                      <li>
                        <Link to="/">
                          <i className="far fa-user-circle"></i> By Alicia Davis
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="far fa-comments"></i> 1.78k Comments
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h4 className="blog-title">
                    <Link to="/">
                      It long established fact read will readable content
                    </Link>
                  </h4>
                  <Link className="theme-btn" to="/">
                    Read More<i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
