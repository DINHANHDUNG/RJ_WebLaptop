import React from "react";

function Error404() {
  return (
    <div
      className="error-content text-center"
      style={{ backgroundImage: "url(assets/images/backgrounds/error-bg.jpg)" }}
    >
      <div className="container">
        <h1 className="error-title">Error 404</h1>
        <p>We are sorry, the page you've requested is not available.</p>
        <a
          href="/"
          className="btn btn-outline-primary-2 btn-minwidth-lg"
        >
          <span>BACK TO HOMEPAGE</span>
          <i className="icon-long-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}

export default Error404;
