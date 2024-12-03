import React from 'react';

export default function Testimonial() {
  return (
    <section id="testimonial" className="padding-medium position-relative">
      <div className="position-absolute start-0 top-0 z-n1 d-none d-lg-flex">
        <img src="/images/pattern-2.png" alt="pattern" />
      </div>
      <div className="container">
        <div className="offset-md-2 col-md-8 ">
          <div className="swiper testimonial-swiper py-3 py-md-5 swiper-initialized swiper-horizontal swiper-backface-hidden">
            <div className="swiper-wrapper" id="swiper-wrapper-8584203385a75e17" aria-live="polite">
              <div
                className="swiper-slide swiper-slide-active"
                role="group"
                aria-label="1 / 3"
                style={{ width: 624, marginRight: 20 }}>
                <div className="review">
                  <div className="review-content d-lg-flex">
                    [icon]
                    {/* className="display-1"*/}
                    <div>
                      <p className="fs-3 fw-bold">
                        Pretium turpis faucibus adipiscing duis. Id quis tristique mi vitae nec. In et in praesent
                        pellentesque. Porta sit porta ridiculus faucibus.
                      </p>
                      <p className="fw-bold">
                        John Geoffrey <span className="fw-normal">| Hexagon Builders inc., USA</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-next"
                role="group"
                aria-label="2 / 3"
                style={{ width: 624, marginRight: 20 }}>
                <div className="review">
                  <div className="review-content d-lg-flex">
                    [icon]
                    <div>
                      <p className="fs-3 fw-bold">
                        Pretium turpis faucibus adipiscing duis. Id quis tristique mi vitae nec. In et in praesent
                        pellentesque. Porta sit porta ridiculus faucibus.
                      </p>
                      <p className="fw-bold">
                        John Geoffrey <span className="fw-normal">| Hexagon Builders inc., USA</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide" role="group" aria-label="3 / 3" style={{ width: 624, marginRight: 20 }}>
                <div className="review">
                  <div className="review-content d-lg-flex">
                    [icon]
                    <div>
                      <p className="fs-3 fw-bold">
                        Pretium turpis faucibus adipiscing duis. Id quis tristique mi vitae nec. In et in praesent
                        pellentesque. Porta sit porta ridiculus faucibus.
                      </p>
                      <p className="fw-bold">
                        John Geoffrey <span className="fw-normal">| Hexagon Builders inc., USA</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination pt-5 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
              <span
                className="swiper-pagination-bullet swiper-pagination-bullet-active"
                tabIndex={0}
                role="button"
                aria-label="Go to slide 1"
                aria-current="true"></span>
              <span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 2"></span>
              <span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 3"></span>
            </div>
            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
