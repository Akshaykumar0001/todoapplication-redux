export const ADD = (item) => {
  return {
    type: "ADD_TODO",
    payload: item,
  };
};
export const RMV = (id) => {
  return {
    type: "RMV_TODO",
    payload: id,
  };
};
export const UPDATE = ({ id, title }) => {
  console.log(id, title);
  return {
    type: "UPDATE_TODO",
    payload: {
      id,
      title,
    },
  };
};
export const INC = (id) => {
  return {
    type: "INCREMENT",
    payload: id,
  };
};
export const DEC = (id) => {
  return {
    type: "DECREMENT",
    payload: id,
  };
};
export const COMPLETED = (id) => {
  return {
    type: "COMPLETED_TODO",
    payload: id,
  };
};
