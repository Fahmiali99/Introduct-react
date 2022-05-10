import React from "react";

function List(props) {
  return (
    <div className="mt-4 mb-4">
      <ul className="text-white">
        {props.items.map((item, index) => (
          <li key={index}> {item} </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
