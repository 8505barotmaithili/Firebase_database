import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useContext, useState } from "react";
import { auth, provider } from "../Firebase/Firebase";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const { handleLogin } = useContext(AuthContext);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const re = await signInWithEmailAndPassword(auth, email, password);
      const token = await re.user.getIdToken();
      handleLogin(token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const handleloginwithgoogle = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithPopup(auth, provider);
      const token = await res.user.getIdToken();
      handleLogin(token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        height: "540px",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "black",
        padding: "20px",
      }}
    >
      <form
        onSubmit={handlesubmit}
        style={{
          background: "white",
          padding: "40px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",

          width: "400px",
          height: "350px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px", fontSize: "2rem" }}>Sign In</h2>

        <div style={{ marginBottom: "15px", textAlign: "left" }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "none",
              outline: "none",
            }}
            required
          />
        </div>

        <div style={{ marginBottom: "20px", textAlign: "left" }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "none",
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
          }}
        >
          Sign In
        </button>

        <button
          onClick={handleloginwithgoogle}
          style={{
            width: "100%",
            padding: "10px",
            background: "#db4437",
            border: "none",
            borderRadius: "5px",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Login with Google
        </button>
      </form>
    </div>
  );
};

export default Signin;
