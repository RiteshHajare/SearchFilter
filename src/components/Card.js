import React from "react";
import { useNavigate } from "react-router-dom";
import Genre from "./Genre";

function Card({ movie }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/details/${movie.show.id}`, { state: movie });
  }
  return (
    <div
      onClick={handleClick}
      className="card d-inline-block"
      style={{ width: "18rem" }}
    >
      <img
        src={movie.show.image?.original || "/imageNotFound.jpeg"}
        className="card-img-top"
        alt="movieimg"
      />
      <div className="card-body">
        <h5 className="card-title text-center">{movie.show.name}</h5>
        <h6>
          <em>Rating : </em>
          {movie.score}
        </h6>
        <h6>
          <em>Run time : </em>
          {movie.show.runtime ? movie.show.runtime + " minutes" : "NA"}
        </h6>
        <Genre genres={movie.show.genres} />
      </div>
    </div>
  );
}

export default Card;
