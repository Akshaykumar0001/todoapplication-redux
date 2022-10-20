import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDelete, AiOutlineClose, AiOutlineEdit } from "react-icons/ai";
import { TiTickOutline } from "react-icons/ti";
import { ADD, RMV, UPDATE, COMPLETED } from "../redux/Action";
import { INC, DEC } from "../redux/Action";
import Activities from "./Activities";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import "./Todos.css";

function AllTodos() {
  const [val, setVal] = useState("");
  const [updatedTodo, setUpdatedTodo] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState();

  const dispatch = useDispatch();
  const addTodo = () => {
    dispatch(ADD(val));

    setVal("");
  };
  // addtodo
  const onChangeHandler = (e) => {
    e.preventDefault();
    setVal(e.target.value);
  };
  // for updating todo
  const onClickHandler = (d) => {
    d.preventDefault();
    setUpdatedTodo(d.target.value);
  };
  const Todos = useSelector((state) => {
    console.log(state.addTodoReducer.todos);
    return state.addTodoReducer.todos;
  });

  // for numbering todos
  const addNumbering = () => {
    dispatch(INC());
  };

  const Counter = useSelector((state) => {
    return state.ChangeTheNumber.counter;
  });

  const DeleteTodo = (id) => {
    console.log(id);
    dispatch(RMV(id));
    dispatch(DEC(id));
  };
  const UpdateTodo = (id, updatedTodo) => {
    setModalIsOpen(false);
    setUpdatedTodo("");
    console.log("todo updated", id, updatedTodo);
    dispatch(UPDATE({ id, title: updatedTodo }));
  };

  // for redux showing completed task
  const CompletedTodo = (id) => {
    dispatch(COMPLETED(id));

    // setShow(true);
  };

  return (
    <div>
      <div className="addTodos">
        <div className="addingtodo">
          <input
            type="text"
            name="inputTodo"
            placeholder="Enter Your Activity"
            className="todo-input"
            onChange={onChangeHandler}
            value={val}
          />

          <button className="add-btn" onClick={addTodo} type="submit">
            <span
              onClick={addNumbering}
              style={{
                display: "inline-block",
                height: 25,
                width: 185,
                background: "rgb(179, 59, 151)",
                borderRadius: "1rem",
                textAlign: "center",
              }}
            >
              Add Activity
            </span>
          </button>
        </div>
        <div className="login">
          <Link to="/LoginSignup" style={{ textDecoration: "none" }}>
            <button className="login-btn">Sign in</button>
          </Link>
        </div>

        <div className="counter">
          <span>Total Activities:{Counter}</span>
        </div>
        <Activities />
        <div className="todo-box">
          <table style={{ color: "whitesmoke" }}>
            <tr>
              <th>Todo</th>
              <th>Actions</th>
            </tr>
            {Todos.map((data, index) => {
              {
                if (data.completed === true) {
                  console.log("yes it is true");
                  return (
                    <div className="todo-container">
                      <div>
                        <h2 style={{ color: "white" }}>Your Activity</h2>

                        <div className="todolist">
                          <div className="done-btn">
                            <button>completed</button>
                          </div>

                          <div className="alltodos">
                            <li key={index}>
                              <div className="tododata">{data.title}</div>
                              <div className="icons">
                                <button
                                  onClick={() => {
                                    DeleteTodo(data.id);
                                  }}
                                  className="dlt-btn"
                                  value={data.id}
                                >
                                  <AiOutlineDelete size="sm" />
                                </button>
                                <button
                                  value={index}
                                  onClick={() => {
                                    setModalIsOpen(true);
                                    setModalIndex(index);
                                  }}
                                  className="edit-btn"
                                >
                                  <AiOutlineEdit size="sm" />
                                </button>
                                <button
                                  className="complete-btn"
                                  onClick={() => {
                                    CompletedTodo(data.id);
                                  }}
                                >
                                  <TiTickOutline size="sm" />
                                </button>
                              </div>
                            </li>
                          </div>
                          <div className="modaldiv">
                            <Modal isOpen={modalIsOpen} className="modal">
                              <div className="close-btn">
                                <button onClick={() => setModalIsOpen(false)}>
                                  <AiOutlineClose />
                                </button>
                              </div>
                              <div className="modal-input">
                                <h2>Update Here</h2>
                                <input
                                  id="modal-input"
                                  type="text"
                                  onChange={onClickHandler}
                                  value={updatedTodo}
                                />

                                <button
                                  id="modal-btn"
                                  type="button"
                                  onClick={() => {
                                    UpdateTodo(data.id, updatedTodo);
                                  }}
                                >
                                  EDIT
                                </button>
                              </div>
                            </Modal>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              }
              // else it will return simple todo ui
              return (
                <div className="todo-container">
                  <Modal isOpen={modalIsOpen} className="modal">
                    <div className="close-btn">
                      <button onClick={() => setModalIsOpen(false)}>
                        <AiOutlineClose />
                      </button>
                    </div>
                    <div className="modal-input">
                      <h2>Update Here</h2>
                      <input
                        id="modal-input"
                        type="text"
                        onChange={onClickHandler}
                        value={updatedTodo}
                      />

                      <button
                        id="modal-btn"
                        type="button"
                        onClick={() => {
                          UpdateTodo(data.id, updatedTodo);
                        }}
                      >
                        EDIT
                      </button>
                    </div>
                  </Modal>
                </div>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllTodos;
