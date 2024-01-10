import React from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";

const Orders = () => {
  return (
    <Layout title={"Your Orders"}>
      <div className="container-flui p-3 m-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
          <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Status</th>
                        <th scope="col">Buyer</th>
                       
                        <th scope="col">Payment</th>
                        <th scope="col">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>verified</td>
                        <td>appu</td>
                        <td>cod</td>
                        <td>7</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
