// - 액션객체란, 반드시 type이란 key를 가져야 하는 객체이다. 또한 리듀서로 보낼 “명령"이다.
// - 디스패치란, 액션객체를 리듀서로 보내는 “전달자” 함수이다.
// - 리듀서란, 디스패치를 통해 전달받은 액션객체를 검사하고, 조건이 일치했을 때 새로운 상태값을 만들어내는 “변화를 만들어내는" 함수이다.
// - 디스패치(dispatch)를 사용하기위해서는 useDispatch() 라는 훅을 이용해야 한다.
//     - 디스패치는 스토어의 내장함수 중 하나입니다.
//     - 우선, 디스패치는 액션을 발생 시키는 것 정도로 이해하시면 됩니다.
//     - dispatch 라는 함수에는 액션을 파라미터로 전달합니다.. dispatch(action) 이런식으로 말이죠.
// - 액션객체 type의 value는 대문자로 작성한다. (JS에서 상수는 대문자로 작성하는 룰이 있음)

//1. 초기 상태값 (state)

//2. 리듀서(Reducer) : 'state에 변화를 일으키는'함수 (state를 제어)
//input : state와 action(type, value가 있음)
import uuid from "react-uuid";

const CREATETODO = "todo/createTodo";
const DELETETODO = "todo/deleteTodo";
const UPDATETODO = "todo/updateTodo";

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
