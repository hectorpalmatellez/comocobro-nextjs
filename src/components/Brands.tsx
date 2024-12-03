export default function Brands() {
  return (
    <section id="brand-collection" className="padding-medium position-relative">
      <div className="position-absolute end-0 z-n1 d-none d-lg-flex">
        <img src="images/pattern-4.png" alt="pattern" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col my-3">
            <a href="#">
              <img src="images/brand1.png" className="brand" alt="brand" />
            </a>
          </div>
          <div className="col my-3">
            <a href="#">
              <img src="images/brand2.png" className="brand" alt="brand" />
            </a>
          </div>
          <div className="col my-3">
            <a href="#">
              <img src="images/brand3.png" className="brand" alt="brand" />
            </a>
          </div>
          <div className="col my-3">
            <a href="#">
              <img src="/images/brand4.png" className="brand" alt="brand" />
            </a>
          </div>
          <div className="col my-3">
            <a href="#">
              <img src="/images/brand5.png" className="brand" alt="brand" />
            </a>
          </div>
          <div className="col my-3">
            <a href="#">
              <img src="/images/brand6.png" className="brand" alt="brand" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
