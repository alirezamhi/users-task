import React, { useContext } from "react";
import { AlertMassage } from "../../Context/AlertContextProvider";
import { ActionApp } from "../../reduce/ActionApp";
import Buttons from "../buttons/Buttons";

const Items = () => {
  const {value,dispatch} = useContext(AlertMassage)
  return (
    <>
      {value.filtered.map((item, index) => {
        return (
          <div
            key={index}
            className="show_item d-md-flex justify-content-between align-items-stretch p-2 bg-white w-100 border rounded mt-2"
          >
            <p>name: {item.name}</p>
            <p>task: {item.text}</p>
            <p>done:{item.done ? "true" : "false"}</p>
            <div className="btn-group">
              <Buttons
                className="btn btn-warning"
                clickHander={() => {
                  item.done = !item.done;
                  dispatch({
                    type: ActionApp.DONE_TASKS,
                  });
                }}
              >
                done
              </Buttons>
              <Buttons
                className="btn btn-danger"
                clickHander={() =>
                  dispatch({
                    type: ActionApp.DELETE_TASKS,
                    payload: { id: item.id },
                  })
                }
              >
                delet task
              </Buttons>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Items;
