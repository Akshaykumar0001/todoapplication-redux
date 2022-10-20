import React from "react";
import { useSelector } from "react-redux";

function Todonumber() {
  const serialNumber = useSelector((state) => {
    return state.ChangeTheNumber.counter;
  });

  const final = serialNumber;

  return <div>{final}</div>;
}

export default Todonumber;
