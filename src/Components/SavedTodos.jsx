import React from "react";

export const SavedTodos = () => {
  const [savedTodos, setSavedTodos] = React.useState([]);
  return (
    <div>
      {savedTodos.map((data, index) => {
        <div key={index}>{data}</div>;
      })}
    </div>
  );
};
