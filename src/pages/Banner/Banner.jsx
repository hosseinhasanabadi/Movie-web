import React from "react";
import "./banner.css";
import useFetch from "../../hooks/useFetch";
import bgImg from "../../images/bg-transformer.jpg";
import titleImg from "../../images/transformer-title.png";

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
                <div className="button">Button</div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="date active">
                <h2>0n 15h August</h2>
              </div>
              <div className="trailer  d-flex justify-content-center  align-items-center active">
                <a href="#" className="playBtn">
                  <i className="fa-solid fa-play"></i>
                </a>
                <p>Watch trailer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
