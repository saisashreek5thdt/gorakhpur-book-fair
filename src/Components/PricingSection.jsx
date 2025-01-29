import priceImg from "../assets/img/shape/03.png";

export default function PricingSection() {
  return (
    <>
      <div className="pricing-area bg pt-70 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="site-heading text-center wow fadeInDown"
                data-wow-delay=".25s"
              >
                <span className="site-title-tagline">Tickets Price</span>
                <h2 className="site-title">
                  Choose Your Right
                  <span>
                    Tickets <br />
                    Pricing
                  </span>
                  Plan
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-md-6 col-lg-4">
              <div className="pricing-item wow fadeInUp" data-wow-delay=".25s">
                <div className="pricing-shape">
                  <img src={priceImg} alt="" />
                </div>
                <div className="pricing-header">
                  <h5>Basic</h5>
                </div>
                <div className="pricing-amount">
                  <strong>$80.00</strong>
                </div>
                <div className="pricing-feature">
                  <ul>
                    <li>
                      <i className="fas fa-check-circle"></i>Full event access
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>Exclusive Q & A
                      sessions
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>Reserved seating
                      for your comfort
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>Ask question
                      privately
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>Tea and Cofee Break
                    </li>
                  </ul>
                </div>
                <div className="pricing-btn-wrap">
                  <a href="#" className="theme-btn">
                    Purchase Now <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div
                className="pricing-item wow fadeInDown"
                data-wow-delay=".25s"
              >
                <div className="pricing-shape">
                  <img src={priceImg} alt="" />
                </div>
                <div className="pricing-header">
                  <h5>Standard</h5>
                </div>
                <div className="pricing-amount">
                  <strong>$120.00</strong>
                </div>
                <div className="pricing-feature">
                  <ul>
                    <li>
                      <i className="fas fa-check-circle"></i>Full event access
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>Exclusive Q & A
                      sessions
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>Reserved seating
                      for your comfort
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>Ask question
                      privately
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>Tea and Cofee Break
                    </li>
                  </ul>
                </div>
                <div className="pricing-btn-wrap">
                  <a href="#" className="theme-btn">
                    Purchase Now <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="pricing-item wow fadeInUp" data-wow-delay=".25s">
                <div className="pricing-shape">
                  <img src={priceImg} alt="" />
                </div>
                <div className="pricing-header">
                  <h5>Premium</h5>
                </div>
                <div className="pricing-amount">
                  <strong>$150.00</strong>
                </div>
                <div className="pricing-feature">
                  <ul>
                    <li>
                      <i className="fas fa-check-circle"></i>Full event access
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>Exclusive Q & A
                      sessions
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>Reserved seating
                      for your comfort
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>Ask question
                      privately
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>Tea and Cofee Break
                    </li>
                  </ul>
                </div>
                <div className="pricing-btn-wrap">
                  <a href="#" className="theme-btn">
                    Purchase Now <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
