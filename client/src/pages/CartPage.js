import React ,{useState,useEffect}from 'react'
import Layout from '../components/Layout/Layout'
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";

import toast from 'react-hot-toast';
import axios from 'axios';
const CartPage = () => {
    const [auth, setAuth] = useAuth();
    const [cart, setCart] = useCart();
    const [products, setProducts] = useState();
  const [userId, setUserId] = useState();


    const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

      //total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    } catch (error) {
      console.log(error);
    }
  };
  //detele item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };




 // handle payment
  const handlePayment =async()=>{
    try {
        // const { data } = await axios.post("/api/v1/product/braintree/payment", {
            
        //     cart,
        //   });
        localStorage.removeItem("cart");
        setCart([]);
        navigate("/dashboard/user/orders");
        toast.success("Payment Completed Successfully ");
      } catch (error) {
        console.log(error);
        toast.success("Payment not Completed  ")
        setLoading(false);
      }
  }


// const handleOrderCreation = async (req,res) => {
//     try {
//       // Declare the data variable in the current scope
//       const response = await axios.post('/api/v1/order/create-order', {
//         products,
//         userId,
//       });
       
//     console.log(response); // Log the response to see its structure

//     const { data } = response;
//       localStorage.removeItem("cart");
//         setCart([]);
//         navigate("/dashboard/user/orders");
//      console.log(data);

//       // Handle success, e.g., show a success message
//       toast.success('Order Created Successfully');
//     } catch (error) {
//       console.log(error);
//       // Handle error, e.g., show an error message
//       toast.error('Error Creating Order');
//     }
//   };
// ;
  

  return (
    <Layout>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center bg-light p-2 mb-1">
            {`Hello ${auth?.token && auth?.user?.name}`}
          </h1>
          <h4 className="text-center">
            {cart?.length
              ? `You Have ${cart.length} items in your cart ${
                  auth?.token ? "" : "please login to checkout"
                }`
              : " Your Cart Is Empty"}
          </h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          {cart?.map((p) => (
            <div className="row mb-2 p-3 card flex-row">
              <div className="col-md-4">
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                  width="100px"
                  height={"100px"}
                />
              </div>
              <div className="col-md-8">
                <p>{p.name}</p>
                <p>{p.description.substring(0, 30)}</p>
                <p>Price : {p.price}</p>
                <button id='deltebn'
                  className="btn btn-danger"
                  onClick={() => removeCartItem(p._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4 text-center">
          <h2>Cart Summary</h2>
          <p>Total | Checkout | Payment</p>
          <hr />
          <h4>Total : {totalPrice()} </h4>
          {auth?.user?.address ? (
            <>
              <div className="mb-3">
                <h4>Current Address</h4>
                <h5>{auth?.user?.address}</h5>
                <button
                  className="btn btn-outline-warning"
                  onClick={() => navigate("/dashboard/user/profile")}
                >
                  Update Address
                </button>
              </div>
            </>
          ) : (
            <div className="mb-3">
              {auth?.token ? (
                <button id='btn2'
                  className="btn btn-outline-warning"
                  onClick={() => navigate("/dashboard/user/profile")}
                >
                  Update Address
                </button>
              ) : (
                <button
                  className="btn btn-outline-warning"
                  onClick={() =>
                    navigate("/login", {
                      state: "/cart",
                    })
                  }
                >
                  Plase Login to checkout
                </button>
              )}
            </div>
          )}
          <button className='btn' onClick={handlePayment}
          
          >Make Payment</button>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default CartPage