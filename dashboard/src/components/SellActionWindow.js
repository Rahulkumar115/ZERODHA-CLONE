import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";

import './SellActionWindow.css';

const SellActionWindow = ({ uid }) => {

  console.log("sellactionwindow rendered with uid");
  const { closeSellWindow } = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleSellStock = async () => {
    const stockToSell = {
      name: uid,          
      qty: stockQuantity, 
      price: stockPrice,  
    };

    try {
      const response = await axios.post("http://localhost:3002/sellStock", stockToSell);

      await axios.post("http://localhost:3002/newOrder", {
        ...stockToSell,
        mode: "SELL",
      });

      alert(response.data || "Stock sold successfully!");
      closeSellWindow(); 
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.message
        : "Could not complete sale.";
      console.error("Failed to sell stock:", error);
      alert(`Error: ${errorMessage}`);
    }
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
        <div>
          <button className="btn btn-red" onClick={handleSellStock}>
            Sell
          </button>
          <button className="btn btn-grey" onClick={closeSellWindow}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;