import React, { useState } from "react";

function MainAbout() {
  const [count, setState] = useState(4);
  const [theme, setTheme] = useState();

  function decrementCount() {
    setState((prevState) => prevState - 1);
    setTheme("red");
  }

  function incrementCount() {
    setState((plusState) => plusState + 1);
    setTheme("green");
  }

  return (
    <div>
      <div className=" text-white flex align-center ">
        <button
          onClick={decrementCount}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          -
        </button>

        <span className="text-5xl">{count}</span>
        <span className="text-4xl">{theme}</span>

        <button
          onClick={incrementCount}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default MainAbout;
