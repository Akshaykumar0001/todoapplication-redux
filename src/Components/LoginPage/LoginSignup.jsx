import React from "react";
import "./Loginsignup.css";
import { ImGoogle3 } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
function LoginSignup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="App">
      <div className="dot">
        <div className="dot1"></div>
        <div className="dot2"></div>
      </div>
      <div className="container">
        <div className="header">
          <div className="heading">
            <h2>Sign in</h2>
          </div>
          <div className="social-btn">
            <button>
              <span style={{ padding: 5 }}>
                <ImGoogle3 />
              </span>
              Continue with Google
            </button>
            <button>
              <span style={{ padding: 5 }}>
                <BsFacebook />
              </span>
              Continue with Facebook
            </button>
          </div>
          <div className="or">or</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="credentials">
              <input
                placeholder="Email"
                name="useremail"
                {...register("useremail", {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.useremail && (
                <p style={{ color: "red" }}>Please enter a valid email</p>
              )}
              <input
                placeholder="Password"
                type="password"
                name="userpassword"
                {...register("userpassword", {
                  required: true,
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                })}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.userpassword && (
                <p style={{ color: "red" }}>
                  Password atleast shuld conatin one special character
                </p>
              )}
            </div>
            <div className="signin-btn">
              <button type="submit">Sign in</button>
            </div>
          </form>
          <div className="footer">
            <p>
              Don't have an account?
              <Link to="/Signup" style={{ color: "white" }}>
                <span
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    padding: 5,
                  }}
                >
                  Create account
                </span>
              </Link>
            </p>
            <p style={{ cursor: "pointer", textDecoration: "underline" }}>
              Forgot Password?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
