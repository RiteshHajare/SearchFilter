import React from "react";

function Dropdown({ handleClick }) {
  return (
    <div class="btn-group">
      <button
        type="button"
        class="btn btn-info dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Genre
      </button>
      <ul class="dropdown-menu">
        <li
          onClick={(e) => {
            handleClick((prev) => {
              return {
                status: "",
                type: "",
                language: "",
                ["dropdown"]: "all",
              };
            });
          }}
        >
          <a name="Comedy" class="dropdown-item">
            All
          </a>
        </li>
        <li
          onClick={(e) => {
            handleClick((prev) => {
              return {
                status: "",
                type: "",
                language: "",
                ["dropdown"]: e.target.name,
              };
            });
          }}
        >
          <a name="Comedy" class="dropdown-item">
            Comedy
          </a>
        </li>
        <li
          onClick={(e) => {
            handleClick((prev) => {
              return { ...prev, ["dropdown"]: e.target.name };
            });
          }}
        >
          <a name="Fantasy" class="dropdown-item">
            Fantasy
          </a>
        </li>
        <li
          onClick={(e) => {
            handleClick((prev) => {
              return { ...prev, ["dropdown"]: e.target.name };
            });
          }}
        >
          <a name="Science-fiction" class="dropdown-item">
            Science-Fiction
          </a>
        </li>
        <li></li>
        <li
          onClick={(e) => {
            handleClick((prev) => {
              return { ...prev, ["dropdown"]: e.target.name };
            });
          }}
        >
          <a name="Drama" class="dropdown-item">
            Drama
          </a>
        </li>
        <li
          onClick={(e) => {
            handleClick((prev) => {
              return { ...prev, ["dropdown"]: e.target.name };
            });
          }}
        >
          <a name="Legal" class="dropdown-item">
            Legal
          </a>
        </li>
        <li
          onClick={(e) => {
            handleClick((prev) => {
              return { ...prev, ["dropdown"]: e.target.name };
            });
          }}
        >
          <a name="Sports" class="dropdown-item">
            Sports
          </a>
        </li>
        <li
          onClick={(e) => {
            handleClick((prev) => {
              return { ...prev, ["dropdown"]: e.target.name };
            });
          }}
        >
          <a name="Children" class="dropdown-item">
            Children
          </a>
        </li>
        <li
          onClick={(e) => {
            handleClick((prev) => {
              return { ...prev, ["dropdown"]: e.target.name };
            });
          }}
        >
          <a name="Music" class="dropdown-item">
            Music
          </a>
        </li>
        <li
          onClick={(e) => {
            handleClick((prev) => {
              return { ...prev, ["dropdown"]: e.target.name };
            });
          }}
        >
          <a name="Horror" class="dropdown-item">
            Horror
          </a>
        </li>
        <li
          onClick={(e) => {
            handleClick((prev) => {
              return { ...prev, ["dropdown"]: e.target.name };
            });
          }}
        >
          <a name="Medical" class="dropdown-item">
            Medical
          </a>
        </li>
        <li
          onClick={(e) => {
            handleClick((prev) => {
              return { ...prev, ["dropdown"]: e.target.name };
            });
          }}
        >
          <a name="Anime" class="dropdown-item">
            Anime
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
