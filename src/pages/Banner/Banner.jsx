import React from "react";
import "./banner.css";

import useFetch from "../../hooks/useFetch";
import bgImg from "../../images/bg-transformer.jpg";
import MovieContent from "../../components/movieContent/movieContent";
import MovieDate from "../../components/MovieDate/MovieDate";
import Playbtn from "../../components/playbtn/Playbtn";
import MovieSwiper from "../../components/MovieSwiper/MovieSwiper";
export default function Banner() {
  const { movie, ispending, error,setMovie } = useFetch(
    "http://localhost:5173/data/movieData.json"
  );

  const hadlerSlidechang = id =>{
  const newMovie = movie.map(movie=>{
    movie.active = false;
    if(movie._id===id){
      movie.active = true
    }
    return movie
  })
  setMovie(newMovie)
    
  };
  return (
   
    <div className="banner">
      {
        movie&& movie.length &&movie.map(movie=>
          <div className="movie">
          {error && <div>{error}</div>}
          {ispending && <div>Loding...</div>}
          <img src={movie.bgImg} alt="background Image" 
          className={`bgImg ${movie.active ?'active':undefined }`} />
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <MovieContent movie={movie} />
              </div>
              <div className="col-lg-6 col-md-12">
                <MovieDate   movie={movie}/>
                <Playbtn  movie={movie} />
              </div>
            </div>
          </div>
        </div>
        )
      }
     
      
      {movie && movie.length > 0 && <MovieSwiper slides={movie} 
      slideChange={hadlerSlidechang} />}
      
    </div>
  

    
   
  );
}
