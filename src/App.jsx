import React, { useState } from "react";
import "./App.css";
import uuid from "react-uuid";

function App() {
  console.log(uuid());
  const initialState = [
    { id: uuid(), title: "오늘 할일", contents: "리액트 공부하기", isDone: false },
    { id: uuid(), title: "오늘 할일", contents: "마트가서 장 보기", isDone: true },
  ];

  const [todos, setTodos] = useState(initialState);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  //input값 입력시 이벤트처리
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const contentsChangeHandler = (event) => {
    setContents(event.target.value);
  };

  //새로고침 방지
  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newTodo = {
      id: uuid(),
      title,
      contents,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setContents("");
  };

  //삭제버튼
  const deleteButtonHandler = (todo) => {
    const newList = todos.filter((filterdTodo) => filterdTodo.id !== todo.id);
    setTodos(newList);
  };

  //완료,취소버튼
  const clickChangeButtonHandler = (todo) => {
    const newTodos = todos.map((item) => {
      if (item.id === todo.id) {
        return { ...item, isDone: !item.isDone };
      } else {
        return item;
      }
    });
    setTodos(newTodos);
  };

  return (
    <div className="layout">
      <header className="app-title">
        <div>My Todo List</div> <div>React</div>
      </header>
      <div>
        <form className="form" onSubmit={onSubmitHandler}>
          <div className="input-group">
            <b>제목</b>{" "}
            <input
              className="input-style"
              type="text"
              value={title}
              onChange={titleChangeHandler}
            />
            <b>내용</b>{" "}
            <input
              className="input-style"
              type="text"
              value={contents}
              onChange={contentsChangeHandler}
            />
          </div>
          <button className="add-button">추가하기</button>
        </form>
      </div>
      <div>
        {/* <h2>{isDone ? "✅Done" : "📌Working"}</h2> */}
        <h2>📌Working</h2>
        <div className="list-wrap">
          {todos
            .filter((work) => {
              return work.isDone === false;
            })
            .map((todo) => {
              return (
                <div className="list-style" key={todo.id}>
                  <p>{todo.title}</p>
                  <p>{todo.contents}</p>
                  <div className="bth-group">
                    <button
                      className="remove-btn"
                      onClick={() => deleteButtonHandler(todo)}
                    >
                      삭제
                    </button>
                    <button
                      className="isDone-btn"
                      onClick={() => clickChangeButtonHandler(todo)}
                    >
                      {todo.isDone ? "취소" : "완료"}
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div>
        {/* <h2>{isDone ? "✅Done" : "📌Working"}</h2> */}
        <h2>✅Done</h2>
        <div className="list-wrap">
          {todos
            .filter((work) => {
              return work.isDone === true;
            })
            .map((todo) => {
              return (
                <div className="list-style" key={todo.id}>
                  <p>{todo.title}</p>
                  <p>{todo.contents}</p>
                  <div className="bth-group">
                    <button
                      className="remove-btn"
                      onClick={() => deleteButtonHandler(todo)}
                    >
                      삭제
                    </button>
                    <button
                      className="isDone-btn"
                      onClick={() => clickChangeButtonHandler(todo)}
                    >
                      취소
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
