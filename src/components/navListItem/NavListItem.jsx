import React from 'react'
import './navListItem.css'
export default function NavListItem({nav}) {
  return (
    <li>

        <a href={nav.link}>{nav.name}</a>
    </li>
    
  )
}
