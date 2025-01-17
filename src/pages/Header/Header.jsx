import React from "react";
import NavListItem from "../../components/navListItem/NavListItem";
import navListData from "../../data/navListData";
import './Header.css'
import Search from "../../components/Search/Search";

export default function Header() {
  return (
    <header>
      <a href="" className="logo">
        Cinema
      </a>
      <ul className="nav">
        {navListData.map(nav=>(
           <NavListItem key={nav._id} nav={nav} />
        ))
         
    }
      </ul>
      <Search/>
    </header>
  );
}
