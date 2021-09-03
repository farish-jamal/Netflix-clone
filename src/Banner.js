import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Banner.css";

function Banner({fetchUrl}) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  // console.log(movie)
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + " ---" : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.orignal_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">
            <i className="fa fa-play" aria-hidden="true"></i>Play
          </button>
          <button className="banner__button">
            <i className="fa fa-plus" aria-hidden="true"></i>My List
          </button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 180)}{" "}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
