import React from "react";
import { useHistory } from "react-router-dom";
import "./CardMovie.css";

const CardMovie = ({ movie: { id, title, year, thumbnailFilm } }) => {
  let history = useHistory();

  return (
    <div>
      <img
        className="card"
        src={`http://localhost:5000/uploads/${thumbnailFilm}`}
        onClick={() => history.push(`/detail/${id}`)}
        style={{ height: "auto" }}
      />
      <span className="movie-title">
        {title}
      </span>
      <span className="movie-year">{year}</span>
    </div>
  );
};

export default CardMovie;
