import uuid from "react-uuid";

const CREATETODO = "todo/createTodo";
const DELETETODO = "todo/deleteTodo";
const UPDATETODO = "todo/updateTodo";

//(state)
const initialstate = {
  todoList: [
    { id: uuid(), title: "오늘 할일", contents: "리액트 공부하기", isDone: false },
    { id: uuid(), title: "오늘 할일", contents: "리덕스 공부하기", isDone: false },
    { id: uuid(), title: "오늘 할일", contents: "마트가서 장 보기", isDone: true },
    { id: uuid(), title: "오늘 할일", contents: "집 대청소하기", isDone: true },
  ],
};

export const createTodo = (addTodo) => {
  return {
    type: CREATETODO,
    payload: addTodo,
  };
};
export const deleteTodo = (newList) => {
  return {
    type: DELETETODO,
    payload: newList,
  };
};
export const updateTodo = (newTodos) => {
  return {
    type: UPDATETODO,
    payload: newTodos,
  };
};

// 리듀서(Reducer)
const todo = (state = initialstate, action) => {
  switch (action.type) {
    case CREATETODO:
      // console.log(state);
      // console.log("action", action);
      // console.log("action.payload", action.payload);
      return {
        todoList: [...state.todoList, action.payload],
      };
    //삭제
    case DELETETODO:
      return {
        todoList: action.payload,
      };
    //완료,취소
    case UPDATETODO:
      return {
        todoList: action.payload,
      };
    default:
      return state;
  }
};

export default todo;
//리듀서를 중앙state관리소로 보내기
