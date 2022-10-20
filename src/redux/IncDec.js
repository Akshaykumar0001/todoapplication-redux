const InitialState = {
  counter: 0,
};
const ChangeTheNumber = (state = InitialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};
export default ChangeTheNumber;
