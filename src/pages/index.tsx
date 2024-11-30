import Talk from "../components/Talk";
import AboutUs from "../components/AboutUs";
import Service from "../components/Service";
import Process from "../components/Process";
import Testimonial from "../components/Testimonial";
import Milestone from "../components/Milestone";
import Brands from "../components/Brands";


export default function Home() {
    return (
        <>
            <div>
                <section id="hero" style={{backgroundImage: 'url(/images/banner-img1.png)'}}>
                    <div className="container padding-large">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h2 className="display-1 text-uppercase fw-lighter">State of the art <span
                                    className="fw-normal text-primary fw-bold">Designs</span></h2>
                                <p className="mt-5">Commodo enim diam enim at rhoncus non, diam id. Laoreet sit ultrices
                                    mi
                                    commodo luctus nulla
                                    fermentum suspendisse leo.</p>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <img src="/images/banner-img.png" alt="img" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Talk/>
            <AboutUs/>
            <Service/>
            <Process/>
            <Testimonial/>
            <Milestone/>
            <Brands/>
        </>
    );
}
