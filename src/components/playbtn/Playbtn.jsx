import React, { useState } from 'react'
import './playBtn.css'
import Modal from '../Modal/Modal'
export default function Playbtn({movie}) {
  const [modal,setModal]=useState(false)
  const toogaleModal=()=>{
      setModal(!modal)
  }
  return (
  <>
    <div className={ `trailer  d-flex 
    justify-content-center 
     align-items-center ${movie.active ? 'active':undefined }`}>
    <a href="#" className="playBtn" onClick={toogaleModal}>
      <i className="fa-solid fa-play"></i>
    </a>
    <p>Watch trailer</p>
  </div>
  {movie.active && <Modal movie={movie}
  status={modal}
   toogaleModal={toogaleModal}/>}
  </>
  )
}
