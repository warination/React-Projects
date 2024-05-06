import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
      console.log(movie)
    </ul>
  );
};

export default MovieList;
