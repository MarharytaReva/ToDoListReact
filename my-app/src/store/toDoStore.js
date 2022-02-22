import { createStore } from "redux";

import toDoReducer from "../reducers/toDoReducer";
import { toDoList } from "../ToDoList";


let actual = toDoList.filter(x => x.completed === false)
let archived = toDoList.filter(x => x.completed === true)

export const store = createStore(toDoReducer, { list: actual, archive: archived})