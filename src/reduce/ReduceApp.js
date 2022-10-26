import { ActionApp } from "./ActionApp";

const ReduceApp = (state, action) => {
  switch (action.type) {
    case ActionApp.ADD_USERS:
      return {
        ...state,
        users: [
          ...state.users,
          { name: action.payload.name, id: action.payload.id },
        ],
      };
    case ActionApp.DELETE_USERS:
      return {
        ...state,
        users: state.users.filter((item) => item.id !== action.payload.id),
      };
    case ActionApp.ADD_TASKS:
      return {
        ...state,
        task: [
          ...state.task,
          {
            name: action.payload.name,
            id: action.payload.id,
            text: action.payload.text,
            done: false,
          },
        ],
      };
    case ActionApp.DELETE_TASKS:
      return {
        ...state,
        task: state.task.filter((item) => item.id !== action.payload.id),
      };
    case ActionApp.DONE_TASKS:
      return { ...state };
    case ActionApp.FILTER_TYPPE:
        return{...state,filterDon:action.payload}
    case ActionApp.FILTER_TASKS:
      if (state.filterDon === "undone") {
        return {
          ...state,
          filtered: state.task.filter((item) => item.done === false && item.name?.includes(state.filterSearch)),
        };
      } else if (state.filterDon === "done") {
        return {
          ...state,
          filtered: state.task.filter((item) => item.done === true && item.name?.includes(state.filterSearch)),
        };
      } else {
        return { ...state, filtered: [...state.task.filter(item=>item.name?.includes(state.filterSearch))] };
      }
    case ActionApp.SEARCH_USERS:
      return{...state,filterSearch:action.payload}
    default:
      return state;
  }
};
export default ReduceApp;
