import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Firebase/Firebase";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        height: "700px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "black",
        padding: "20px",
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
      }}
    >
      <form
        onSubmit={handlesubmit}
        style={{
          background: "white",
          padding: "40px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          width: "400px",
          height: "450px",
          textAlign: "center",
          borderRadius: "12px",
        }}
      >
        <h2 style={{ marginBottom: "20px", fontSize: "2rem", color: "#333" }}>
          Create Your Account
        </h2>

        <div style={{ marginBottom: "15px", textAlign: "left" }}>
          <label style={{ color: "#333", fontSize: "14px" }}>Full Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              outline: "none",
            }}
            required
          />
        </div>

        <div style={{ marginBottom: "15px", textAlign: "left" }}>
          <label style={{ color: "#333", fontSize: "14px" }}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              outline: "none",
            }}
            required
          />
        </div>

        <div style={{ marginBottom: "20px", textAlign: "left" }}>
          <label style={{ color: "#333", fontSize: "14px" }}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              outline: "none",
            }}
            required
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#1db954",
            border: "none",
            borderRadius: "5px",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            marginBottom: "10px",
            fontSize: "16px",
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
