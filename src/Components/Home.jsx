import React from "react";

const Home = () => {
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
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "60px",
        }}
      >
        Welcome to the Home Page
      </h1>
      <p
        style={{
          fontSize: "30px",
          color: "white",
        }}
      >
        This is your modern React app. You can sign up, sign in, and manage
        <br></br>
        products on the dashboard. Everything is protected with secure routing
        <br></br>
        and Firebase Auth.
      </p>
    </div>
  );
};

export default Home;
