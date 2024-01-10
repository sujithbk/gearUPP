import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>GearUp is committed to protecting the privacy and security of your personal information.
             This Privacy Policy outlines how we collect, use, 
            and safeguard your data when you interact with our website or services.</p>
         
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
