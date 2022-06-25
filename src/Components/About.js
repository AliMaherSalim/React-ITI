import React from "react";
import Ali from "../assets/Images/Ali Maher.jpg";
const About = () => {
  return (
    <>
      <section
        className="container-fluid hero bg-black text-white"
        style={{ paddingLeft: "20%" }}
        id="#about"
      >
        <div className="container-fluid text-center">
          <div className="row">
            <img
              src={Ali}
              className="rounded col-6 "
              style={{ width: "300px", height: "300px" }}
              alt="MyPicture"
            />
            <div className="col-7 text-center row align-items-center ">
              <h1 className="fw-bold">
                Hello, This is <span className="purple col-12">Ali Maher</span>{" "}
              </h1>{" "}
              <p className="col-12"> A Full Stack Developer </p>
              <a className="nav-link col-12" href="#projects" style={{}}>
                See Projects{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </>
  );
};
export default About;
