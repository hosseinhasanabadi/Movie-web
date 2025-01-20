import React from 'react'
import './modal.css'
function Modal({movie,toogaleModal,status}) {
  return (
  <div className={`movieModal ${status ? "active":undefined}`}>
    <a href="" className='modalClose' onClick={toogaleModal}>
    <i class="fa-regular fa-circle-xmark"></i>
    </a>
    <iframe
    width="1280"
    height="720"
    src={movie.video}
    title={`${movie.title} | Official Trailer`}
    frameBorder="0"
    allow='accelrtometer; clipboard-eit;encrypted-media
    ;gyroscop;picture-in-picture;web-share'
    allowFullScreen
    >
        
    </iframe>
  </div>
  )
}

export default Modal
