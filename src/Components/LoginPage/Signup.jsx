import React from "react";
import "./Loginsignup.css";
import { ImGoogle3 } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
function Signup() {
  const [auth, setAuth] = useState("Signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <div className="App">
        {/* <div className="dot">
          <div className="dot1"></div>
          <div className="dot2"></div>
        </div> */}
        <div className="container">
          <div className="header">
            <div className="heading">
              <h2>{auth}!</h2>
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
            <form onsubmit={handleSubmit(onsubmit)}>
              <div className="credentials-signup">
                <div className="username cred">
                  <input
                    name="fname"
                    placeholder="First name"
                    type="firstname"
                    value={fname}
                    {...register("fname", { required: true, minLength: 10 })}
                    onChange={(e) => {
                      setFname(e.target.value);
                    }}
                  />
                  <input
                    name="lname"
                    placeholder="last name"
                    type="lastname"
                    value={lname}
                    {...register("lname", { required: true, minLength: 10 })}
                    onChange={(e) => {
                      setLname(e.target.value);
                    }}
                  />
                </div>
                <div className="contact-details cred">
                  <input
                    name="phone"
                    placeholder="Enter Phone no...."
                    type="mobile"
                    value={mobile}
                    {...register("phone", { required: true, minLength: 10 })}
                    onChange={(e) => {
                      setMobile(e.target.value);
                    }}
                  />

                  {errors.phone && (
                    <p style={{ color: "red" }}>Enter a valid phone number</p>
                  )}
                  <input
                    placeholder=" Enter Email"
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
                </div>
                <div className="pass cred">
                  <input
                    placeholder=" Set Password"
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
                  <input
                    placeholder=" confirm Password"
                    type="password"
                    name="userpassword"
                    {...register("userpassword", {
                      required: true,
                      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                    })}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </form>
            <div className="signup-btn">
              <button type="submit">{auth}</button>
            </div>
            <div className="footer">
              <p>
                Already have an account?
                <Link to="/LoginSignup" style={{ color: "white" }}>
                  <span
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      padding: 5,
                    }}
                  >
                    Sign in
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
