import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Brands() {
  return (
    <section id="brand-collection" className="padding-medium position-relative">
      <div className="position-absolute end-0 z-n1 d-none d-lg-flex">
        <Image src="images/pattern-4.png" alt="pattern" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col my-3">
            <Link href="#">
              <Image src="images/brand1.png" className="brand" alt="brand" />
            </Link>
          </div>
          <div className="col my-3">
            <Link href="#">
              <Image src="images/brand2.png" className="brand" alt="brand" />
            </Link>
          </div>
          <div className="col my-3">
            <Link href="#">
              <Image src="images/brand3.png" className="brand" alt="brand" />
            </Link>
          </div>
          <div className="col my-3">
            <Link href="#">
              <Image src="/images/brand4.png" className="brand" alt="brand" />
            </Link>
          </div>
          <div className="col my-3">
            <Link href="#">
              <Image src="/images/brand5.png" className="brand" alt="brand" />
            </Link>
          </div>
          <div className="col my-3">
            <Link href="#">
              <Image src="/images/brand6.png" className="brand" alt="brand" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
