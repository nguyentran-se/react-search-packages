import React from "react";
interface ChildProps {
  color: string;
  onClickHandler: () => void;
}
const Child: React.FC<ChildProps> = ({ color, onClickHandler, children }) => {
  return (
    <button onClick={onClickHandler}>
      {color}
      {children}
    </button>
  );
};

export default Child;
