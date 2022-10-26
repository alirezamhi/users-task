import React, { useContext, useState } from "react";
import Buttons from "../buttons/Buttons";
import { ActionApp } from "../../reduce/ActionApp";
import TextHeader from "../textHeader/TextHeader";
import Items from "../items/Items";
import "./AddTask.css";
import Filter from "../Filter/Filter";
import { AlertMassage } from "../../Context/AlertContextProvider";
import { Notify } from "../notify/Notify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTask = () => {
  const [enterValue, setEnterValue] = useState({ text: "", user: "" });
  const { value, dispatch } = useContext(AlertMassage);
  function AddUserHandler() {
      dispatch({
        type: ActionApp.ADD_TASKS,
        payload: {
          name: enterValue.user.name,
          id: value.task.length + 1,
          text: enterValue.text,
        },
      });
      Notify("add task successfuly", "success");
  }
  return (
    <div className="col-12 col-md-8 add-task bg-light">
      <TextHeader type="h1" text="Add task" />
      <hr />
      <div className="input-group w-100">
        <input
          className="form-control"
          value={enterValue.text}
          onChange={(e) =>
            setEnterValue((prev) => ({ ...prev, text: e.target.value }))
          }
        />
        <select
          className="form-select"
          onChange={(e) =>
            setEnterValue((prev) => ({
              ...prev,
              user: value.users.find((item) => item.id == e.target.value),
            }))
          }
        >
          <option>select item</option>
          {value.users.map((item, index) => {
            return (
              <option value={item.id} key={index}>
                {item.name}
              </option>
            );
          })}
        </select>
        <Buttons
          className=" btn btn-success"
          disabled={!enterValue.text}
          clickHander={AddUserHandler}
        >
          Add
        </Buttons>
      </div>
      <hr />
      <div className="filter_task">
        <TextHeader type="h3" text="Filter Tasks" />
        <input
          onChange={(e) =>
            dispatch({ type: ActionApp.SEARCH_USERS, payload: e.target.value })
          }
          placeholder="search for username"
          className="form-control w-25"
        />
        <Filter></Filter>
      </div>
      <Items></Items>
      <ToastContainer />
    </div>
  );
};

export default AddTask;
