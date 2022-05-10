import React, { useState } from "react";

function MainAbout() {
  const [count, setCount] = useState(4);

  function decrementCount() {
    setCount(count - 1);
  }

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <div className=" text-white flex align-center ">
        <button
          onClick={incrementCount}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          +
        </button>
        <span className="text-5xl">{count}</span>
        <button
          onClick={decrementCount}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          -
        </button>
      </div>
    </div>
  );
}

export default MainAbout;
