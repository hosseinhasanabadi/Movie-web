import React from "react";
import "./banner.css";
import useFetch from "../../hooks/useFetch";
import bgImg from "../../images/bg-transformer.jpg";
import MovieContent from "../../components/movieContent/movieContent";
import MovieDate from "../../components/MovieDate/MovieDate";
import Playbtn from "../../components/playbtn/Playbtn";
import MovieSwiper from "../../components/MovieSwiper/MovieSwiper";
export default function Banner() {
  const { movie, ispending, error } = useFetch(
    "http://localhost:5173/data/movieData.json"
  );
  return (
    <div className="banner">
      <div className="movie">
        {error && <div>{error}</div>}
        {ispending && <div>Loding...</div>}
        <img src={bgImg} alt="background Image" className="bgImg active" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
             <MovieContent/>
            </div>
            <div className="col-lg-6 col-md-12">
             <MovieDate/>
            <Playbtn/>
            </div>
          </div>
        </div>
      </div>
      {
        movie &&movie.length>0 &&
      <MovieSwiper slides={movie}/>
      }
    </div>
  );
}
