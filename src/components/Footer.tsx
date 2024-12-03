import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container padding-medium">
        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="footer-menu">
              <Image src="images/logo-dark.png" alt="logo" />
              <p className="text-white mt-3">
                Ea, facilis sint. Deleniti libero placeat qui pariatur nihil. Ab officia odit iusto ullam? Error, eum
                sed magnam nihil dolores illum nisi!
              </p>
              <form>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control form-control-lg rounded-3"
                    name="email"
                    id="email"
                    placeholder="Enter Email Address"
                  />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-dark btn-lg rounded-3">
                    Register now
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-2 offset-md-1">
            <div className="footer-menu">
              <ul className="menu-list list-unstyled">
                <li className="menu-item mb-3">
                  <Link href="#" className="footer-link">
                    Inicio
                  </Link>
                </li>
                <li className="menu-item mb-3">
                  <Link href="#" className="footer-link">
                    About us
                  </Link>
                </li>
                <li className="menu-item mb-3">
                  <Link href="#" className="footer-link">
                    Offer{' '}
                  </Link>
                </li>
                <li className="menu-item mb-3">
                  <Link href="#" className="footer-link">
                    Services
                  </Link>
                </li>
                <li className="menu-item mb-3">
                  <Link href="#" className="footer-link">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-menu">
              <ul className="menu-list list-unstyled">
                <li className="menu-item mb-3">
                  <Link href="#" className="footer-link">
                    Payments
                  </Link>
                </li>
                <li className="menu-item mb-3">
                  <Link href="#" className="footer-link">
                    Packages
                  </Link>
                </li>
                <li className="menu-item mb-3">
                  <Link href="#" className="footer-link">
                    promotions
                  </Link>
                </li>
                <li className="menu-item mb-3">
                  <Link href="#" className="footer-link">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-menu">
              <p className="text-white">
                Harum officiis beatae quisquam ratione nostrum ipsum, delectus minima aliquam ut quaerat?
              </p>
              <Link href="#" className="text-white fs-3 text-decoration-underline">
                yourcontact@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-white" />
      <div className="container py-3">
        <div className="row align-items-center">
          <div className="col-md-6 copyright">
            <div className="social-links mt-4">
              <ul className="d-flex list-unstyled gap-3">
                <li className="social">
                  <Link href="#"></Link>
                </li>
                <li className="social">
                  <Link href="#"></Link>
                </li>
                <li className="social">
                  <Link href="#"></Link>
                </li>
                <li className="social">
                  <Link href="#"></Link>
                </li>
                <li className="social">
                  <Link href="#"></Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="footer-para m-0">---</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
