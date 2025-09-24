import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders")
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
      });
  }, []);

  return (
    <div className="orders-container">
      <h3>Orders ({allOrders.length})</h3>
      {allOrders.length > 0 ? (
        <table className="order-table">
          <thead>
            <tr>
              <th>Mode</th>
              <th>Name</th>
              <th>Qty.</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order) => (
              <tr key={order._id}>
                <td>{order.mode}</td>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>₹{order.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      )}
    </div>
  );
};

export default Orders;