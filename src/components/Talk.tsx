import React from 'react';
import Link from 'next/link';

export default function Talk() {
  return (
    <section id="talk">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8 offset-md-1">
            <h3 className="display-5 fw-semibold">Get yourself the best possible online presence for your business </h3>
          </div>
          <div className="col-md-2 ">
            <Link href="#" className="btn btn-primary">
              Let&#39;s Talk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
