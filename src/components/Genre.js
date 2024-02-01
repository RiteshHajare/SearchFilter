import React from "react";

function Genre({ genres }) {
  return (
    <div className="genres">
      <h6>
        <em>Genre : </em>
      </h6>
      <div className="genre">
        {genres.map((genre) => {
          return <span>{genre}</span>;
        })}
      </div>
    </div>
  );
}

export default Genre;
