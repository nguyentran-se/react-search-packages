import React from "react";
import Child from "./Child";

const Parent = () => {
  return (
    <Child color="red" onClickHandler={() => console.log("Clicked")}>
      sdfsdf
    </Child>
  );
};

export default Parent;
