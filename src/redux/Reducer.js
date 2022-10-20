const INIT_STATE = {
  todos: [],
};
export const addTodoReducer = (state = INIT_STATE, action) => {
  let data = { ...state };
  console.log("THIS IS STATE", state);
  console.log("THIS IS PAYLOAD", action);
  switch (action.type) {
    case "ADD_TODO":
      let todo = { id: randomID(), title: action.payload };
      return {
        ...state,
        todos: [...state.todos, todo],
      };

    case "RMV_TODO":
      return {
        ...state,
        todos: data.todos.filter((el) => el.id !== action.payload),
      };

    case "UPDATE_TODO":
      let updatedTodos = data.todos.map((todo) => {
        console.log("i am here", todo);
        if (todo.id === action.payload.id) {
          todo.title = action.payload.title;
          return todo;
        }
        return todo;
      });
      return { ...state, todos: updatedTodos };
    case "COMPLETED_TODO":
      let newTodos = data.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = true;
        }
        return todo;
      });
      return { ...state, todos: newTodos };

    default:
      return state;
  }
};
//function for random id
function randomID() {
  return Math.floor(Math.random() * 3474834);
}
