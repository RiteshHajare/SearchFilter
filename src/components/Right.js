import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Card from "./Card";
import "../pages/Home/home.css";

function Right({ handleBurgerClick, moviesList, setFilter, setBurgerClicked }) {
  const [input, setInput] = useState("");

  return (
    <div className="right" onClick={() => setBurgerClicked(false)}>
      <div className="inputdiv d-flex">
        <i
          className="fa-solid fa-bars fs-2"
          onClick={(e) => {
            e.stopPropagation();
            handleBurgerClick();
          }}
        ></i>
        <Dropdown handleClick={setFilter} />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="inputEl"
          type="text"
        />
        <i className="fa-solid fa-magnifying-glass fs-3"></i>
      </div>
      <div className="status">
        <button
          name="Running"
          onClick={(e) => {
            setFilter(() => {
              return {
                dropdown: "",
                type: "",
                language: "",
                ["status"]: e.target.name,
              };
            });
          }}
          className="btn btn-secondary statusbtn"
        >
          Running
        </button>
        <button
          name="Ended"
          onClick={(e) => {
            setFilter((prev) => {
              return {
                dropdown: "",
                type: "",
                type: "",
                language: "",
                ["status"]: e.target.name,
              };
            });
          }}
          className="btn btn-secondary statusbtn ms-4"
        >
          Ended
        </button>
      </div>
      <div className="movies d-flex flex-wrap">
        {moviesList.map((movie) => {
          return (
            movie.show.name.toLowerCase().includes(input.toLowerCase()) && (
              <Card movie={movie} />
            )
          );
        })}
      </div>
    </div>
  );
}

export default Right;
