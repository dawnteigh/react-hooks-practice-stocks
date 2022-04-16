import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([])
  const [selectedType, setSelectedType] = useState("All");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(r => r.json())
      .then(data => setStocks(data))
  }, [])

  function onPortClick(updatedStock) {
    const portfolioStocks = stocks.map(stock => {
      if (stock.id === updatedStock.id) {
        return updatedStock;
      } else {
        return stock;
      }

    })
    setStocks(portfolioStocks)
  }

  const alphaTickers = stocks.slice().sort((a, b) => {
    let fa = a.ticker.toLowerCase(),
      fb = b.ticker.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  function alphabetize() {
    setStocks(alphaTickers)
  }

  const pricesUp = stocks.slice().sort((a, b) => {
    return a.price - b.price;
  });

  function priceSort() {
    setStocks(pricesUp)
  }

  function filterChange(e) {
    setSelectedType(e.target.value)
  }

  const stocksToDisplay = stocks.filter((stock) => {
    if (selectedType === "All") {
      return true;
    } else {
      return stock.type === selectedType;
    }
  })



  return (
    <div>
      <SearchBar priceSort={priceSort} alphabetize={alphabetize} filterChange={filterChange} />
      <div className="row">
        <div className="col-8">
          <StockContainer onPortClick={onPortClick} stocksToDisplay={stocksToDisplay} stocks={stocks} />
        </div>
        <div className="col-4">
          <PortfolioContainer onPortClick={onPortClick} stocks={stocks} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
