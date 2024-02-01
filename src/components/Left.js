import React, { useEffect, useRef } from "react";
import Radio from "./Radio";

function Left({ burgerClicked, setFilter }) {
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
          />
          <Radio
            leftRef={leftRef}
            setFilter={setFilter}
            name={"Reality"}
            type={"type"}
          />
          <Radio
            leftRef={leftRef}
            setFilter={setFilter}
            name={"Variety"}
            type={"type"}
          />
          <Radio
            leftRef={leftRef}
            setFilter={setFilter}
            name={"Talk Show"}
            type={"type"}
          />
          <Radio
            leftRef={leftRef}
            setFilter={setFilter}
            name={"Documentary"}
            type={"type"}
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
          />
          <Radio
            leftRef={leftRef}
            setFilter={setFilter}
            name={"Korean"}
            type={"language"}
          />
          <Radio
            leftRef={leftRef}
            setFilter={setFilter}
            name={"Japanese"}
            type={"language"}
          />
        </div>
      </div>
    </div>
  );
}

export default Left;
