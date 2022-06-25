import React, { Fragment } from "react";

const Portfolio = () => {
  return (
    <Fragment>
      <div className="container-fluid d-md-flex flex-md-column my-5 ms-md-5 text-center">
        <p
          className="fs-1 col-md-4 col-lg-3 ms-lg-5 text-center text-md-start"
          style={{
            textShadow: "4px 3.5px 3.5px #0000005c",
          }}
        >
          Portfolio
        </p>

        <div className="container-fluid row gap-3">
          <div
            className="card p-5 text-white bg-dark bg-gradient ms-5 col-12 col-md-4 col-lg-3 shadow"
            style={{ height: "11.75rem" }}
          >
            <p className="card-text border border-0 border-bottom pb-2 mt-3">
              WEB DESIGN
            </p>
          </div>

          <div
            className="card p-5 text-white bg-dark bg-gradient ms-5 col-12 col-md-4 col-lg-3 shadow"
            style={{ height: "11.75rem" }}
          >
            <p className="card-text border border-0 border-bottom pb-2 mt-3">
              MOBILE DESIGN
            </p>
          </div>

          <div
            className="card p-5 text-white bg-dark bg-gradient ms-5 col-12 col-md-4 col-lg-3 shadow"
            style={{ height: "11.75rem" }}
          >
            <p className="card-text border border-0 border-bottom pb-2 mt-3">
              LOGO DESIGN
            </p>
          </div>

          <div
            className="card p-5 text-white bg-dark bg-gradient ms-5 col-12 col-md-4 col-lg-3 shadow"
            style={{ height: "11.75rem" }}
          >
            <div className="card-text border border-0 border-bottom pb-2 mt-1">
              <span>WEB APPLICATION </span>
              <span>DEVELOPMENT</span>
            </div>
          </div>

          <div
            className="card p-5 text-white bg-dark bg-gradient ms-5 col-12 col-md-4 col-lg-3 shadow"
            style={{ height: "11.75rem" }}
          >
            <div className="card-text border border-0 border-bottom pb-2 mt-1">
              <span>MOBILE APPLICATION </span>
              <span>DEVELOPMENT</span>
            </div>
          </div>

          <div
            className="card p-5 text-white bg-dark bg-gradient ms-5 col-12 col-md-4 col-lg-3 shadow"
            style={{ height: "11.75rem" }}
          >
            <div className="card-text border border-0 border-bottom pb-2 mt-1">
              <span className="d-inline d-md-block m-auto">PAW </span>
              <span>DEVELOPMENT</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio;
