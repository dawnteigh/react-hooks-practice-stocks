import React from "react";

function Stock({ stock, onPortClick }) {
  const { id, ticker, name, type, price, inPort } = stock;

  function handleClick() {
    fetch(`http://localhost:3001/stocks/${stock.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inPort: !stock.inPort,
      })
    })
    .then(r => r.json())
    .then(data => onPortClick(data))
  }
  return (
    <div>
      <div onClick={handleClick}
      id={id}
      type={type}
      inPort={inPort}
      className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
