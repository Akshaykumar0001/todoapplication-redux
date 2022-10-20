import React, { useState } from "react";

function SaveTodo({ element }) {
  const handleClick = () => {
    alert(element);
  };

  return (
    <div>
      <button onClick={handleClick}>Save</button>
    </div>
  );
}

export default SaveTodo;
