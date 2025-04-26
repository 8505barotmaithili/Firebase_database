import React from "react";

const About = () => {
  return (
    <div
      style={{
        height: "700px",
        background:
          "linear-gradient(to right, #0f2027, #203a43,rgb(28, 104, 136))",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "60px",
        }}
      >
        About This Project
      </h1>
      <p
        style={{
          fontSize: "30px",
          color: "white",
        }}
      >
        This app is built using React and Firebase to demonstrate modern
        frontend development,
        <br></br>
        authentication, and real-time database management. It features user
        signup/signin, product<br></br> management, protected routes, and
        beautiful design — all from one streamlined interface.
      </p>
    </div>
  );
};

export default About;
