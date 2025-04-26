import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { token, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    handleLogout();
    navigate("/signin");
  };
  return (
    <div>
      <div
        style={{ backgroundColor: "black", height: "60px", lineHeight: "50px" }}
      >
        <ul style={{ display: "flex", justifyContent: "space-around" }}>
          <li>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{ color: "white", textDecoration: "none" }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              style={{ color: "white", textDecoration: "none" }}
            >
              Dashboard
            </Link>
          </li>
          {!token ? (
            <>
              <li>
                <Link
                  to="/signin"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Signin
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Signup
                </Link>
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={logout}
                style={{
                  color: "white",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
