import React from "react";
import NavListItem from "../../components/navListItem/NavListItem";
import navListData from "../../data/navListData";
import './Header.css'

export default function Header() {
  return (
    <header>
      <a href="" className="logo">
        Cinema
      </a>
      <ul className="nav">
        {navListData.map(nav=>(
           <NavListItem key={nav.id} nav={nav} />
        ))
         
    }
      </ul>
    </header>
  );
}
