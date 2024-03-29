import React from "react";

function Radio({ name, setFilter, type, leftRef, setBurgerClicked }) {
  return (
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id={`${name}`}
        onChange={(e) => {
          leftRef.current.classList.add("leftmoveout");
          setBurgerClicked(false);
          setFilter(() => {
            return {
              dropdown: "",
              status: "",
              [type == "type" ? "type" : "language"]: name,
              [type == "type" ? "language" : "type"]: "",
            };
          });
        }}
      />
      <label class="form-check-label" for={`${name}`}>
        {name}
      </label>
    </div>
  );
}

export default Radio;
