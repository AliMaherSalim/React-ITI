import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark bg-gradient d-flex  justify-content-around align-items-center text-white-50 py-5 mb-3 ">
      <div>
        <p>GET IN TOUCH</p>
        <div className="d-flex flex-column" style={{ fontSize: "0.67rem" }}>
          <i className="fa fa-envelope mb-2"> Alimahermahmoud@gmail.com</i>
          <i className="fa fa-address-card"> 01148637695</i>
        </div>
      </div>
      <div>
        <button className="btn btn-dark border border-2 my-4">
          Contact me
        </button>
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-around mb-2">
          {" "}
          <a href="https://www.facebook.com/profile.php?id=100010354294488">
            <i className="bi bi-facebook"></i>{" "}
          </a>
          <a href="https://www.linkedin.com/in/ali-maher-84199823b">
            {" "}
            <i className="bi bi-linkedin"></i>{" "}
          </a>
          <a href="https://github.com/AliMaherSalim">
            {" "}
            <i className="bi bi-github"></i>{" "}
          </a>
        </div>
        <div style={{ fontSize: "0.67rem" }}>Copyright &copy; 2022 KR</div>
      </div>
    </div>
  );
};
export default Footer;
