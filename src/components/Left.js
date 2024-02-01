import React, { useEffect, useRef } from "react";
import Radio from "./Radio";

function Left({ burgerClicked, setFilter, setBurgerClicked }) {
  const leftRef = useRef(null);

  useEffect(() => {
    if (burgerClicked) {
      leftRef.current.classList.remove("leftmoveout");
    } else leftRef.current.classList.add("leftmoveout");
  }, [burgerClicked]);

  return (
    <div
      ref={leftRef}
      className="leftmoveout left d-flex flex-column justify-content-center align-items-center"
    >
      <div className="category d-flex flex-column gap-3 mb-5">
        <h3 className="text-center">Type</h3>
        <div className="radio d-flex flex-column gap-2">
          <Radio
            leftRef={leftRef}
            setFilter={setFilter}
            name={"Scripted"}
            type={"type"}
            setBurgerClicked={setBurgerClicked}
          />
          <Radio
            leftRef={leftRef}
            setFilter={setFilter}
            name={"Reality"}
            type={"type"}
            setBurgerClicked={setBurgerClicked}
          />
          <Radio
            leftRef={leftRef}
            setFilter={setFilter}
            name={"Variety"}
            type={"type"}
            setBurgerClicked={setBurgerClicked}
          />
          <Radio
            leftRef={leftRef}
            setFilter={setFilter}
            name={"Talk Show"}
            type={"type"}
            setBurgerClicked={setBurgerClicked}
          />
          <Radio
            leftRef={leftRef}
            setFilter={setFilter}
            name={"Documentary"}
            type={"type"}
            setBurgerClicked={setBurgerClicked}
          />
        </div>
      </div>
      <div className="category d-flex flex-column gap-3">
        <h3 className="text-center">Language</h3>
        <div className="radio radio d-flex flex-column gap-2">
          <Radio
            leftRef={leftRef}
            setFilter={setFilter}
            name={"English"}
            type={"language"}
            setBurgerClicked={setBurgerClicked}
          />
          <Radio
            leftRef={leftRef}
            setFilter={setFilter}
            name={"Korean"}
            type={"language"}
            setBurgerClicked={setBurgerClicked}
          />
          <Radio
            leftRef={leftRef}
            setFilter={setFilter}
            name={"Japanese"}
            type={"language"}
            setBurgerClicked={setBurgerClicked}
          />
        </div>
      </div>
    </div>
  );
}

export default Left;
