//중앙 데이터 관리소(store)

import { combineReducers, createStore } from "redux";
import todo from "../modules/todo";

const rootReducer = combineReducers({
  todo,
});
const store = createStore(rootReducer);

export default store;
//combineReducers은 여러 개의 독립적인 reducer의 반환 값을 하나의 상태 객체로 만들어준다.
