export default function Process() {
  return (
    <section id="process">
      <div className="container position-relative">
        <div className="text-center">
          <h6>Our Design</h6>
          <h3 className="display-5 fw-semibold">Our Design Process</h3>
        </div>
        <div className="position-absolute z-n1  top-50 start-50 translate-middle d-none d-xxl-flex">
          <img src="/images/process-line.png" alt="pattern" />
        </div>
        <div className="row d-none d-xxl-flex">
          <div className="col">
            <div className="text-start mx-5">
              <h6 className="p-5 fw-bold bg-primary rounded-circle text-center">
                01
              </h6>
              <p className="fw-bold text-uppercase">
                Requirement <br /> analysis
              </p>
            </div>
          </div>
          <div className="col">
            <div className="text-start mx-5" style={{ marginTop: 100 }}>
              <h6 className="p-5 fw-bold bg-primary rounded-circle text-center">
                02
              </h6>
              <p className="fw-bold text-uppercase">
                Market <br /> research
              </p>
            </div>
          </div>
          <div className="col">
            <div className="text-start mx-5 mt-5">
              <h6 className="p-5 fw-bold bg-primary rounded-circle text-center">
                03
              </h6>
              <p className="fw-bold text-uppercase">
                Design <br /> Concepts
              </p>
            </div>
          </div>
          <div className="col">
            <div className="text-start mx-5" style={{ marginTop: 100 }}>
              <h6 className="p-5 fw-bold bg-primary rounded-circle text-center">
                04
              </h6>
              <p className="fw-bold text-uppercase">
                Build <br /> Prototype
              </p>
            </div>
          </div>
          <div className="col">
            <div className="text-start mx-5">
              <h6 className="p-5 fw-bold bg-primary rounded-circle text-center">
                05
              </h6>
              <p className="fw-bold text-uppercase">
                Launch <br /> product
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5 d-xxl-none d-flex">
          <div className="col my-4">
            <div className="text-start bg-primary p-4">
              <h6 className="">01</h6>
              <p className="fw-bold text-uppercase">
                Requirement <br /> analysis
              </p>
            </div>
          </div>
          <div className="col my-4">
            <div className="text-start bg-light p-4">
              <h6 className="">02</h6>
              <p className="fw-bold text-uppercase">
                Market <br /> research
              </p>
            </div>
          </div>
          <div className="col my-4">
            <div className="text-start bg-primary p-4">
              <h6 className="">03</h6>
              <p className="fw-bold text-uppercase">
                Design <br /> Concepts
              </p>
            </div>
          </div>
          <div className="col my-4">
            <div className="text-start bg-light p-4">
              <h6 className="">04</h6>
              <p className="fw-bold text-uppercase">
                Build <br /> Prototype
              </p>
            </div>
          </div>
          <div className="col my-4">
            <div className="text-start bg-primary p-4">
              <h6 className="">05</h6>
              <p className="fw-bold text-uppercase">
                Launch <br /> product
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
