import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  return (
    <nav className="main-menu d-flex navbar fixed-top navbar-expand-lg py-4">
      <div className="container-fluid px-md-5">
        <div className="main-logo">
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" className="img-fluid" />
          </Link>
        </div>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header justify-content-center">
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div className="offcanvas-body justify-content-between">
            <ul className="navbar-nav menu-list list-unstyled d-flex gap-md-3 ps-lg-5 mb-0">
              <li className="nav-item">
                <Link href="/" className="nav-link mx-3 active">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/calculadora" className="nav-link mx-3">
                  Calculadora de precios
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/calcular-comision" className="nav-link mx-3">
                  Calculadora de comisiones
                </Link>
              </li>
            </ul>

            <div className="d-none d-lg-flex align-items-end"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
