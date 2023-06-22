//중앙 데이터 관리소(store)

import { combineReducers, createStore } from "redux";
import todo from "../modules/todo";

const rootReducer = combineReducers({
  todo,
});
const store = createStore(rootReducer);

export default store;
