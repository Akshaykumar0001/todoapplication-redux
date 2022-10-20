import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import { INC } from "../redux/Action";
import { useSelector } from "react-redux";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineClose } from "react-icons/ai";
import "./Todos.css";
import { useDispatch } from "react-redux";
import TodoList from "./TodoList";
import SaveTodo from "./SaveTodo";
function Todos() {
  const [arr, setArr] = useState([]);
  const [items, setItems] = useState("");
  const [newValue, setNewValue] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState();
  const onClickHandler = (e) => {
    e.preventDefault();
    setArr((item) => {
      return [...item, items];
    });
    setItems("");
  };

  const onChangeHandler = (e) => {
    setItems(e.target.value);
  };
  console.log(arr);
  const Delete = (e) => {
    const removedArr = arr.map((item, index) => {
      if (e.target.value == index) {
        return;
      } else {
        return item;
      }
    });
    setArr(removedArr);
  };

  const handleChange = (e) => {
    setNewValue(e.target.value);
  };

  const handleClick = (e) => {
    const newArr = [...arr];
    newArr[modalIndex] = newValue;
    setArr(newArr);
    setModalIsOpen(false);
    setNewValue("");
  };
  const serialNumber = useSelector((state) => {
    return state.ChangeTheNumber.counter;
  });

  const dispatch = useDispatch();
  const Increment = () => {
    dispatch(INC());
  };

  return (
    <div className="addTodos">
      <input
        type="text"
        name="inputTodo"
        placeholder="Enter Your Activity"
        className="todo-input"
        onChange={onChangeHandler}
        value={items}
      />
      <button className="add-btn" onClick={onClickHandler} type="submit">
        <span onClick={Increment}> Add Activity</span>
      </button>
      <div>
        <TodoList />
      </div>
      <div className="todo-container">
        {arr.map((data, index) => {
          return (
            <div>
              {data && (
                <div>
                  <h2>Your Activity</h2>
                  <div className="todolist">
                    <div className="alltodos">
                      <li key={index}>
                        <div className="tododata">{data}</div>
                        <div className="icons">
                          <button
                            value={index}
                            onClick={Delete}
                            className="dlt-btn"
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
                        </div>
                      </li>
                      <SaveTodo element={data} />
                    </div>
                  </div>
                </div>
              )}
              <Modal isOpen={modalIsOpen} className="modal">
                <div className="close-btn">
                  <button onClick={() => setModalIsOpen(false)}>
                    <AiOutlineClose />
                  </button>
                </div>

                <div className="modal-input">
                  <h2>Update Here</h2>
                  {/* {modalIndex} */}
                  <input
                    id="modal-input"
                    type="text"
                    onChange={handleChange}
                    value={newValue}
                  />

                  <button id="modal-btn" type="button" onClick={handleClick}>
                    EDIT
                  </button>
                </div>
              </Modal>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todos;
