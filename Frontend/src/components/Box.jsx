import React from "react";
import Items from "./Items";

export default function Box(props) {
  const items = props.data.map((singleData, index) => {
    return (
      <Items
        removeHandler={props.removeHandler}
        key={index}
        id={index}
        items={singleData.items}
        time={singleData.time}
      />
    );
  });
  return <div className="p-3">{items}</div>;
}
