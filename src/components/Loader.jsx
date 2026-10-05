import React from "react";

const Loader = () => {
  return (
    <div className="loader-screen">

      <div className="loader-content">

        <div className="loader-ring">
          <span></span>
        </div>

        <h1>ÉLÉGANCE</h1>

        <p>Fashion Beyond Limits</p>

        <div className="loader-line">
          <div></div>
        </div>

        <small>Loading Experience...</small>

      </div>

      <div className="loader-circle circle-one"></div>
      <div className="loader-circle circle-two"></div>
      <div className="loader-circle circle-three"></div>

    </div>
  );
};

export default Loader;