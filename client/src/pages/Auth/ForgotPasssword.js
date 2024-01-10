import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";

const ForgotPasssword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Forgot Password - Ecommerce APP"}>
      {/* <div className="form-container ">
        <form onSubmit={handleSubmit}>
          <h4 className="title">RESET PASSWORD</h4>

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
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your favorite Sport Name "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            RESET
          </button>
        </form>
      </div> */}
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
                <h2>Reset Password</h2>
              </div>
              <div className="row">
                <form className="form-group" onSubmit={handleSubmit}>
                  <div className="row">
                  <input type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                      className="form-control" 
                      id="exampleInputEmail1" 
                      placeholder='Enter Your email'
                      required
                    />
                 </div>
                  <div className="row">
                  <input type="text" 
                    value={answer}
                    onChange={(e) =>setAnswer(e.target.value)}
                      className="form-control" 
                      id="exampleInputEmail1" 
                      placeholder='Enter Your faviourate spots'
                      required
                      />
                  </div>
                  <div className="row">
                  <input type="password" 
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
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
                    Already having account &nbsp; &nbsp;
                     <button type="submit" className="btn bg-blue" onClick={()=>{navigate('/login')}}>Login</button>
                            </div>
     
                </form>
              </div>
      
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPasssword;
