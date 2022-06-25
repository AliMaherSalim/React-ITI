import React from "react";

export const AboutMe = () => {
  return (
    <div className="container-fluid d-md-flex my-5 ms-md-5">
      <p
        className="fs-1 col-md-3 ms-lg-5 text-center text-md-start"
        style={{ textShadow: "4px 3.5px 3.5px #0000005c" }}
      >
        About Me
      </p>
      <div className="my-3 col-md-7" style={{ textAlign: "justify" }}>
        <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nostrum
          perspiciatis? Enim architecto, consectetur laboriosam accusamus at
          nulla delectus reiciendis odit ea officiis eius pariatur rem quod
          praesentium voluptatibus est!
        </p>
        <div className="text-center text-md-start mt-5">
          <a
            className="btn btn-dark"
            href="../assets/cv/ALI_MAHER_SALIM.pdf"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
