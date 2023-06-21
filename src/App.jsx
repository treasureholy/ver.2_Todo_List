import React, { useState } from "react";
import "./App.css";
import uuid from "react-uuid";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "./redux/modules/todo";
import { deleteTodo } from "./redux/modules/todo";
import { updateTodo } from "./redux/modules/todo";
import Header from "./components/header/Header";

function App() {
  const dispatch = useDispatch();
  const todoRedux = useSelector((state) => {
    return state.todo.todoList;
  });
  // console.log(todoRedux);
  // console.log(uuid());
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

    const addTodo = {
      id: uuid(),
      title,
      contents,
      isDone: false,
    };
    // setTodos([...todos, newTodo]);
    dispatch(createTodo(addTodo));
    setTitle("");
    setContents("");
  };

  //삭제버튼
  const deleteButtonHandler = (todo) => {
    // const newList = todos.filter((filterdTodo) => filterdTodo.id !== todo.id);
    const newList = todoRedux.filter((filterdTodo) => filterdTodo.id !== todo.id);
    // setTodos(newList);
    dispatch(deleteTodo(newList));
    // console.log(newList);
  };

  //완료,취소버튼
  const clickChangeButtonHandler = (todo) => {
    // const newTodos = todos.map((item) => {
    const newTodos = todoRedux.map((item) => {
      if (item.id === todo.id) {
        return { ...item, isDone: !item.isDone };
      } else {
        return item;
      }
    });
    // setTodos(newTodos);
    dispatch(updateTodo(newTodos));
  };

  return (
    <>
      <GlobalStyle />
      <StLayout>
        <Header />
        <div>
          <StForm onSubmit={onSubmitHandler}>
            <StInputGroup>
              <b>제목</b>{" "}
              <StInputStyle
                type="text"
                value={title}
                onChange={titleChangeHandler}
              />
              <b>내용</b>{" "}
              <StInputStyle
                type="text"
                value={contents}
                onChange={contentsChangeHandler}
              />
            </StInputGroup>
            <StAddButton>추가하기</StAddButton>
          </StForm>
        </div>
        <div>
          <h2>📌Working</h2>
          <StListWrap>
            {todoRedux
              .filter((work) => {
                return work.isDone === false;
              })
              .map((todo) => {
                return (
                  <StListStyle key={todo.id}>
                    <h2>{todo.title}</h2>
                    <div>{todo.contents}</div>
                    <StBtnGroup>
                      <StButton
                        bordercolor="red"
                        onClick={() => deleteButtonHandler(todo)}
                      >
                        삭제하기
                      </StButton>
                      <StButton
                        bordercolor="green"
                        onClick={() => clickChangeButtonHandler(todo)}
                      >
                        {todo.isDone ? "취소" : "완료"}
                      </StButton>
                    </StBtnGroup>
                  </StListStyle>
                );
              })}
          </StListWrap>
        </div>
        <div>
          <h2>✅Done</h2>
          <StListWrap>
            {todoRedux
              .filter((work) => {
                return work.isDone === true;
              })
              .map((todo) => {
                return (
                  <StListStyle key={todo.id}>
                    <h2>{todo.title}</h2>
                    <div>{todo.contents}</div>
                    <StBtnGroup>
                      <StButton
                        bordercolor="red"
                        onClick={() => deleteButtonHandler(todo)}
                      >
                        삭제하기
                      </StButton>
                      <StButton
                        bordercolor="green"
                        onClick={() => clickChangeButtonHandler(todo)}
                      >
                        취소
                      </StButton>
                    </StBtnGroup>
                  </StListStyle>
                );
              })}
          </StListWrap>
        </div>
      </StLayout>
    </>
  );
}

export default App;

const StLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

const StForm = styled.form`
  background-color: rgba(231, 230, 230, 0.512);
  border-radius: 20px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 30px 20px 30px 20px;
`;

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px;
`;

const StInputStyle = styled.input`
  height: 30px;
  border: 1px solid rgba(128, 128, 128, 0.293);
  border-radius: 10px;
  width: 185px;
  padding-left: 15px;
`;

const StAddButton = styled.button`
  border-radius: 10px;
  border: 1px solid;
  background-color: green;
  color: white;
  width: 100px;
  height: 35px;
`;

const StListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const StListStyle = styled.div`
  width: 250px;
  height: 180px;
  border: 4px solid green;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0px 15px;
`;

const StBtnGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

const StButton = styled.button`
  border: 2px solid ${(props) => props.bordercolor};
  background-color: white;
  width: 120px;
  height: 35px;
`;
