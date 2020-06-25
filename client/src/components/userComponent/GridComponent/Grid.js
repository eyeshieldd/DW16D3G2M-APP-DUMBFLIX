import React, { useEffect } from "react";
import MovieCard from "../CardMovie/CardMovie";
import "./Grid.css";

const MovieGrid = ({ films, title }) => {
  const list = films.map((movie) => <MovieCard movie={movie} key={movie.id} />);

  return (
    <div className="movie-grid">
      <div className="movie-type">
        <label> {title} </label>
      </div>
      <div className="movie-list">{list} </div>
    </div>
  );
};

export default MovieGrid;
