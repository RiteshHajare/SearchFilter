import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import Left from "../../components/Left";
import Right from "../../components/Right";
import axios from "axios";

function Home() {
  const [burgerClicked, setBurgerClicked] = useState(false);
  const [initialRendered, setInitialRendered] = useState(false);
  const [moviesList, setMoviesList] = useState([]);
  const [filter, setFilter] = useState({
    dropdown: "",
    status: "",
    type: "",
    language: "",
  });

  useEffect(() => {
    setInitialRendered(true);
    getMovies();
  }, []);

  function getMovies() {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => {
        setMoviesList(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    if (initialRendered) {
      if (filter?.dropdown == "all") return getMovies();
      axios.get("https://api.tvmaze.com/search/shows?q=all").then((res) => {
        setMoviesList(() => {
          return res.data.filter((movie) => {
            const meetsDropdownCriteria = filter.dropdown
              ? movie.show.genres.includes(filter.dropdown)
              : true;
            const meetsStatusCriteria = filter.status
              ? movie.show.status === filter.status
              : true;
            const meetsTypeCriteria = filter.type
              ? movie.show.type === filter.type
              : true;
            const meetsLanguageCriteria = filter.language
              ? movie.show.language === filter.language
              : true;

            return (
              meetsDropdownCriteria &&
              meetsStatusCriteria &&
              meetsTypeCriteria &&
              meetsLanguageCriteria
            );
          });
        });
      });
    }
  }, [filter]);

  function handleBurgerClick(e) {
    setBurgerClicked(!burgerClicked);
  }
  return (
    <div className="homepage">
      <Left setFilter={setFilter} burgerClicked={burgerClicked} />
      <Right
        setFilter={setFilter}
        moviesList={moviesList}
        handleBurgerClick={handleBurgerClick}
        setMoviesList={setMoviesList}
      />
    </div>
  );
}

export default Home;
