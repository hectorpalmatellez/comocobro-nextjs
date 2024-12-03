import React from 'react';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section id="about us" className="padding-medium">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="image-holder">
              <Image src="/images/about.png" alt="banner" className="img-fluid " />
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
            <nav>
              <div className="nav nav-tabs d-flex border-0" id="nav-tab" role="tablist">
                <button
                  className="nav-link text-uppercase px-0 me-5 active"
                  id="nav-about-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-about"
                  type="button"
                  role="tab"
                  aria-controls="nav-about"
                  aria-selected="true">
                  About Us
                </button>
                <button
                  className="nav-link text-uppercase px-0 me-5"
                  id="nav-history-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-history"
                  type="button"
                  role="tab"
                  aria-controls="nav-history"
                  aria-selected="false"
                  tabIndex={-1}>
                  History
                </button>
                <button
                  className="nav-link text-uppercase px-0 me-5"
                  id="nav-mission-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-mission"
                  type="button"
                  role="tab"
                  aria-controls="nav-mission"
                  aria-selected="false"
                  tabIndex={-1}>
                  Our Mission
                </button>
              </div>
            </nav>
            <div className="tabs-listing">
              <div className="tab-content py-5" id="nav-tabContent">
                <div
                  className="tab-pane fade active show"
                  id="nav-about"
                  role="tabpanel"
                  aria-labelledby="nav-about-tab">
                  <h3>About our Company</h3>
                  <p className="my-4">
                    Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede.
                    Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean
                    dignissim pellentesque felis.
                  </p>
                  <div className="mb-4">
                    <h6 className=" mb-3">Hotel &amp; tourism</h6>
                    <div className="progress" role="progressbar" style={{ height: 10, borderRadius: 0 }}>
                      <div className="progress-bar bg-primary" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h6 className=" mb-3">E-commerce</h6>
                    <div className="progress" role="progressbar" style={{ height: 10, borderRadius: 0 }}>
                      <div className="progress-bar bg-primary" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h6 className=" mb-3">Non Profit</h6>
                    <div className="progress" role="progressbar" style={{ height: 10, borderRadius: 0 }}>
                      <div className="progress-bar bg-primary" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="nav-history" role="tabpanel" aria-labelledby="nav-history-tab">
                  <h3>Our History</h3>
                  <p className="my-4">
                    Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede.
                    Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean
                    dignissim pellentesque felis.
                  </p>
                  <p className="my-4">
                    Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede.
                    Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean
                    dignissim pellentesque felis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quae
                    eveniet libero sed itaque, ducimus beatae aliquid autem porro distinctio nihil vitae possimus labore
                    cupiditate fugit a reprehenderit rerum omnis.
                  </p>
                </div>
                <div className="tab-pane fade" id="nav-mission" role="tabpanel" aria-labelledby="nav-mission-tab">
                  <h3>Our Mission</h3>
                  <p className="my-4">
                    Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede.
                    Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean
                    dignissim pellentesque felis.
                  </p>
                  <p className="my-4">
                    Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede.
                    Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean
                    dignissim pellentesque felis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quae
                    eveniet libero sed itaque, ducimus beatae aliquid autem porro distinctio nihil vitae possimus labore
                    cupiditate fugit a reprehenderit rerum omnis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
