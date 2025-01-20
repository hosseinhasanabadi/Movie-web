import React from 'react'
import './movieContent.css'
import titleImg from "../../images/transformer-title.png";
import Button from '../Button/Button';

function movieContent({movie}) {
  return (
    <div className={`cotent ${movie.active ? 'active':undefined }`}>
    <img src={movie.titleImg} alt="movie Title" className="movie-title" />
    <h4>
      <span>{movie.year}</span>
      <span>
        <i>{movie.ageLimit}</i>
      </span>
      <span>{movie.length}</span>
      <span>{movie.category}</span>
    </h4>
    <p>
     {movie.description}
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
