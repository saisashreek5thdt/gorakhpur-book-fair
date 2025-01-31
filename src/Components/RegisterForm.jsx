import registerFormBG from "../assets/img/quote/01.jpg"

export default function RegisterForm() {

    const registerBG = {
        backgroundImage: `url(${registerFormBG})`,
        backgroundSize: "cover",
    }

  return (
    <>
      <div className="quote-area mt-80 pb-80" style={registerBG}>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-7 ms-auto">
              <div className="quote-content wow fadeInUp" data-wow-delay=".25s">
                <div className="quote-head">
                  <h3>Register Now</h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of majority have suffered
                    alteration page when looking at its layout.
                  </p>
                </div>
                <div className="quote-form">
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="fas fa-user-tie"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="far fa-envelope"></i>
                          </span>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="fas fa-phone"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Phone"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="fas fa-box"></i>
                          </span>
                          <select className="select form-select form-control">
                            <option value="">Choose Plan</option>
                            <option value="1">Plan One</option>
                            <option value="2">Plan Two</option>
                            <option value="3">Plan Three</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-group textarea">
                          <span className="input-group-text">
                            <i className="far fa-comment-dots"></i>
                          </span>
                          <textarea
                            className="form-control"
                            cols="30"
                            rows="4"
                            placeholder="Your Message"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button type="submit" className="theme-btn">
                          Register Now<i className="fas fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
