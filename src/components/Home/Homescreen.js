import React, { useEffect, useState } from "react";
import "./Home.css";

const Homescreen = () => {
  const [data, setData] = useState([]); // Store fetched data in state

  return (
    <>
      <h1>Learn Anything online</h1>
      <div className="search-bar">
        {/* Render your fetched data here */}
        {data.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
        <select className="search-dropdown">
          <option value="all">All</option>
          <option value="products">Products</option>
          <option value="users">Users</option>
        </select>
        <input type="text" className="search-input" placeholder="Search..." />
        <button className="search-button">Search</button>
      </div>
    </>
  );
};

export default Homescreen;
