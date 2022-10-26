import React, { useMemo, useReducer, useState, useContext } from "react";
import Buttons from "../buttons/Buttons";
import { ActionApp } from "../../reduce/ActionApp";
import TextHeader from "../textHeader/TextHeader";
import "./AddUsers.css";
import { AlertMassage } from "../../Context/AlertContextProvider";
import { Notify } from "../notify/Notify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddUsers = () => {
  const {value,dispatch} = useContext(AlertMassage)
  const [enterValue, setEnterValue] = useState("");
  function AdduserHandler() {
    dispatch({
      type: ActionApp.ADD_USERS,
      payload: { name: enterValue, id: value.users.length + 1 },
    })
    Notify("add user successfuly","success")
  }
  return (
    <div className="col-12 col-md-4">
      <TextHeader type="h1" text="User" />
      <hr />
      <div>
        <TextHeader type="h6" text="Add user" />
        <div className="input-group">
          <input
            value={enterValue}
            className="form-control User-box"
            onChange={(e) => setEnterValue(e.target.value)}
            type="text"
          />
          <Buttons
            className=" btn btn-success"
            clickHander={AdduserHandler}
            disabled={!enterValue}
          >
            Add
          </Buttons>
        </div>
      </div>
      <hr />
      <div>
        <TextHeader type="h6" text="last users" />
        {value.users.map((node, index) => {
          return (
            <div
              key={index}
              className="User-box d-flex justify-content-between align-items-center p-1 mt-2 rounded border"
            >
              {node.name}
              <Buttons
                className="btn btn-danger"
                clickHander={() =>
                  dispatch({
                    type: ActionApp.DELETE_USERS,
                    payload: { id: node.id },
                  })
                }
              >
                delet
              </Buttons>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddUsers;
