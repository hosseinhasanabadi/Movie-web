import React from 'react'
import './movieContent.css'
import titleImg from "../../images/transformer-title.png";
import Button from '../Button/Button';

function movieContent() {
  return (
    <div className="cotent active">
    <img src={titleImg} alt="movie Title" className="movie-title" />
    <h4>
      <span>Year</span>
      <span>
        <i>age</i>
      </span>
      <span>length</span>
      <span>category</span>
    </h4>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
      autem sequi non nulla at itaque nihil officia, ipsam eligendi
      aspernatur libero veniam magnam ex optio, soluta odio eos sunt
      voluptates?
    </p>
    <div className="button">
     
     
          <Button icon={<i class="fa-regular fa-bookmark"></i>} 
         name='book' 
          color ='#ff3700'
          bgColor='#ffffff'/>
          <Button icon={<i class="fa-solid fa-plus"></i>} 
          name='My List'/>
    
  
    </div>
  </div>
  )
}

export default movieContent
