import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Form from "../../components/Form";
import "./product.css";

function Product() {
  const location = useLocation();
  const [formScreen, setFormScreen] = useState(false);

  if (formScreen) {
    return <Form movieName={location.state.show.name} />;
  }

  return (
    <div className="productpage">
      <div className="top-div">
        <div className="topleft d-flex flex-column gap-2">
          <h1>
            <strong>Title : {location.state.show.name}</strong>
          </h1>
          <h5>
            <em>Rating : </em>
            {location.state.score}
          </h5>
          <h5>
            <em>Language : </em>
            {location.state.show.language}
          </h5>
          <h5>
            <em>Status : </em>
            {location.state.show.status}
          </h5>
          <div className="genres">
            <h6>
              <em>Genre : </em>
            </h6>
            <div className="genre">
              {location.state.show.genres.map((genre) => {
                return <span>{genre}</span>;
              })}
            </div>
          </div>
          <button
            onClick={() => setFormScreen(true)}
            style={{
              width: "fit-content",
              marginLeft: "3rem",
              marginTop: "1rem",
            }}
            className="btn btn-primary"
          >
            Book Ticket
          </button>
        </div>
        <a
          className="overflow-hidden"
          target="_blank"
          href={location.state.show?.officialSite}
        >
          <img
            className="rounded movieImg d-block"
            src={location.state.show.image?.medium || "/imageNotFound.jpeg"}
            alt={location.state.show.image?.medium || "image"}
          />
        </a>
      </div>
      <p className="summary mt-4">
        <strong className="fs-4 mb-2">Summary :- </strong>
        <span
          className="d-inline"
          dangerouslySetInnerHTML={{ __html: location.state.show.summary }}
        ></span>
      </p>
      <div>
        <p className="mb-3">
          <strong>Network</strong> :{" "}
          <span>
            {location.state.show.network?.name
              ? location.state.show.network?.name
              : "NA"}{" "}
          </span>
        </p>
        <p className="mb-3">
          <strong>Network Country</strong> :{" "}
          <span>
            {location.state.show.network?.country
              ? location.state.show.network?.country?.name
              : "NA"}{" "}
          </span>
        </p>
        <p className="mb-3">
          <strong>Network Timezone</strong> :{" "}
          <span>
            {location.state.show.network?.country
              ? location.state.show.network.country?.timezone
              : "NA"}{" "}
          </span>
        </p>
        <p className="mb-3">
          <strong>Network Website</strong> :{" "}
          <span>
            <a target="_blank" href={location.state.show.network?.officialSite}>
              {location.state.show.network?.officialSite
                ? location.state.show.network?.officialSite
                : "NA"}{" "}
            </a>
          </span>
        </p>
      </div>
      <div className="cardsdiv d-flex justify-content-between flex-wrap gap-2 pt-3">
        <div className="card p-4">
          <h6 className="mb-3">
            Runtime :{" "}
            <span>
              {location.state.show?.runtime
                ? location.state.show?.runtime + " minutes"
                : "NA"}{" "}
            </span>
          </h6>
          <h6 className="mb-3">
            Average Runtime :{" "}
            <span>
              {location.state.show?.averageRuntime
                ? location.state.show?.averageRuntime + " minutes"
                : "NA"}{" "}
            </span>
          </h6>
        </div>
        <div className="card p-4">
          <h6 className="mb-3">
            Premiered :{" "}
            <span>
              {location.state.show?.premiered
                ? location.state.show?.premiered
                : "NA"}{" "}
            </span>
          </h6>
          <h6 className="mb-3">
            Ended :{" "}
            <span>
              {location.state.show?.ended ? location.state.show?.ended : "NA"}{" "}
            </span>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Product;
