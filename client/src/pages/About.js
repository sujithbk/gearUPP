import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          GearUp is an e-commerce platform dedicated to providing sports enthusiasts with a 
          seamless and comprehensive shopping experience for high-quality sports gear. Whether you're a 
          seasoned athlete or a casual sports 
          enthusiast, GearUp is the go-to destination for all your sports equipment needs.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
