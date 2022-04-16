import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ onPortClick, stocks }) {


  return (
    <div>
      <h2>My Portfolio</h2>
      {stocks.map(stock => {
        if (stock.inPort === true) {
          return (
        <Stock onPortClick={onPortClick} key={stock.id} stock={stock} />
      )
    }}
    )}
    </div>
  );
}

export default PortfolioContainer;
