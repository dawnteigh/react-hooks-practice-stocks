import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onPortClick, stocksToDisplay }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocksToDisplay.map(stock => (
        <Stock  onPortClick={onPortClick} key={stock.id} stock={stock} />
      ))}
    </div>
  );
}

export default StockContainer;
