import React from "react";
import "./search.css";
export default function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="Search" />
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  );
}
