import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="Register - Ecommer App">
     
        {/* <form onSubmit={handleSubmit}>
          <h4 className="title">LOGIN FORM</h4>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                navigate("/forgot-password");
              }}
            >
              Forgot Password
            </button>
          </div>

          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
        </form> */}

<div>
      {/* Main Content */}
      <div className="container-fluid">
        <div className="row main-content bg-success text-center">
          <div className="col-md-4 text-center company__info">
            <span className="company__logo">
              <h2>
                <span className="fa fa-android"></span>
              </h2>
            </span>
            <h1 className="company_title"> gearUP </h1>
          </div>
          <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
            <div className="container-fluid">
              <div className="row">
                <h2>Log In</h2>
              </div>
              <div className="row">
                <form className="form-group" onSubmit={handleSubmit}>
                  <div className="row">
                  <input type="email" 
                  value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form__input"
                    id="exampleInputEmail1" 
                    placeholder='Enter Your email'
                    required
                    />
                                </div>
                  <div className="row">
                  <input type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                    id="exampleInputEmail1" 
                    placeholder='Enter Your Password'
                    required
                    />
                  </div>
                 
                  <div className="row">
                    <input type="submit" value="Submit" className="btn" />
                  </div>
                  <div>
                     <button type="submit" className="btn bg-blue" onClick={()=>{navigate('/forgot-password')}}>forgot Password</button>
                            </div>
                            <div>
                   Creating new account &nbsp; &nbsp; &nbsp;
                     <button type="submit" className="btn bg-blue" onClick={()=>{navigate('/register')}}>Signup</button>
                            </div>

                </form>
              </div>
             
            </div>
          </div>
        </div>
      </div>

      
    </div>

      
    </Layout>
  );
};

export default Login;
