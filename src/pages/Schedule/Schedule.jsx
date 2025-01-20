import React, { useEffect, useState } from "react";
import "./schedule.css";
import useFetch from "../../hooks/useFetch";
import Card from "../../components/Card/Card";
function Schedule() {
    const [moviedate ,setMovieDate]=useState([])
     const { movie, ispending, error,setMovie }
      = useFetch(
        "http://localhost:5173/data/movieData.json"
      );
      useEffect(()=>{
        setMovieDate(moviedate)
      });
  return (
    <section id="schedule" className="schedule">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title"> Opening this week</h4>
        </div>
        <div className="row">
          <div className="filters">
            <p>Filters</p>
          </div>
        </div>
        <div className="row mt-5">
            {movie && movie.length>0&& 
            movie.map(movie=>(
               <Card key={movie._id} movie={movie}/>
            )) }


        </div>
      </div>
    </section>
  );
}

export default Schedule;
