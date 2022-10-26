// import React, { useContext, useEffect } from "react";
// import AddTask from "./components/addTask/AddTask";
// import AddUsers from "./components/addusers/AddUsers";
// import { AlertMassage } from "./Context/AlertContextProvider";
// import { ActionApp } from "./reduce/ActionApp";

// function App() {
// const {value,dispatch} =useContext(AlertMassage)
// useEffect(() => {
//   dispatch({ type: ActionApp.FILTER_TASKS });
// }, [value.task, value.filterDon, value.filterSearch]);

// return (
// <div className="container-fluid">
//   <div className="row">
//     <AddUsers></AddUsers>
//     <AddTask></AddTask>
//   </div>
// </div>
//     <div>

//     </div>
// );
// }

// export default App;

// Styles
import "./App.css";
import { useState } from "react";
import axios from "axios";

export function App() {
  const [users, setUsers] = useState([]);
  const [isUsersLoading, setUsersLoading] = useState(false);
  const [wait,setWait] = useState(false)

  function loadUsers() {
    setUsersLoading(true);
    axios
      .get("https://596b0bcb14023a0011bcb5eb.mockapi.io/redux/users")
      .then(({ data }) => {
        console.log({
          data,
        });
        setUsers(data);
        setWait(true)
      })
      .catch((e) => {
        console.log("error", e);
      })
      .finally(() => {
        setUsersLoading(false);
        setInterval(() => {
          setWait(false)
        }, 3000);
      });
  }

  return (
    <div className="App">
      <button onClick={loadUsers} className="btn btn-primary">
        Load Users
      </button>
      <br />
      {isUsersLoading && <p>Users list is loading, please wait...</p>}
      {wait && <p>get data after 3 second show you</p>}
      {!isUsersLoading && users.length !== 0 && !wait && (
        <table className="table table-striped table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Country</th>
              <th scope="col">Device</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={`${user.id}_${index}`}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.country}</td>
                  <td>{user.device}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
