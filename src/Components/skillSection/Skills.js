import React from "react";
// import Progress from "./Progress";

const Skills = (props) => {
  return (
    <div className="bg-dark bg-gradient d-flex flex-column justify-content-center align-items-cenrter p-5">
      <p
        className="display-5 text-white my-2"
        style={{ textAlign: "center", textShadow: "4px 3.5px 3.5px #0000005c" }}
      >
        Skills
      </p>
      <p className="my-3 text-white-50 mx-5 text-center mt-4 mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tempore
        quaerat nihil odit culpa assumenda nesciunt necessitatibus, impedit
        vitae illum laborum cumque sequi pariatur aliquid aperiam possimus, nisi
        dolores molestiae?
      </p>
      {/* <Progress experience={props.experience} /> */}
      <div
        className="d-flex
    flex-column flex-md-row text-white mb-3"
      >
        <div className="col-md-6 offset-1 align-self-center ">
          <p
            className="border- border-0 border-bottom text-center pb-3 w-75 w-md-50"
            style={{ color: "orange" }}
          >
            MY FOCUS
          </p>
          <div className="ms-2 text-center w-75">
            <p>UI/UX Design</p>
            <p>Responsive Design</p>
            <p>Web Design</p>
            <p>Mobile App Design</p>
          </div>
        </div>
        <div className="col-md-9">
          <label className="d-flex">
            <span className="bg-dark bg-gradient p-1 mb-3">HTML</span>
            <progress value="90" max="100">
              70 %
            </progress>
          </label>
          <label className="d-flex">
            <span className="bg-dark bg-gradient p-1 mb-3">CSS</span>
            <progress value="80" max="100">
              70 %
            </progress>
          </label>
          <label className="d-flex">
            <span className="bg-dark bg-gradient p-1 mb-3">JS</span>
            <progress value="70" max="100">
              70 %
            </progress>
          </label>
          <label className="d-flex">
            <span className="bg-dark bg-gradient p-1 mb-3">REACT</span>
            <progress value="85" max="100">
              70 %
            </progress>
          </label>
          <label className="d-flex">
            <span className="bg-dark bg-gradient p-1 mb-3">PS</span>
            <progress value="70" max="100">
              70 %
            </progress>
          </label>
          <label className="d-flex">
            <span className="bg-dark bg-gradient p-1 mb-3">adXD</span>
            <progress value="75" max="100">
              70 %
            </progress>
          </label>
          <label className="d-flex">
            <span className="bg-dark bg-gradient p-1 mb-3">NODE</span>
            <progress value="70" max="100">
              70 %
            </progress>
          </label>
          <label className="d-flex">
            <span className="bg-dark bg-gradient p-1 mb-3">WP</span>
            <progress value="95" max="100">
              70 %
            </progress>
          </label>
        </div>
      </div>
    </div>
  );
};
export default Skills;
