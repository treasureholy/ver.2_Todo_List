import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/modules/todo";
import { useState } from "react";
import uuid from "react-uuid";

function Form() {
  const dispatch = useDispatch();
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

  return (
    <div>
      <StForm onSubmit={onSubmitHandler}>
        <StInputGroup>
          <b>제목</b>{" "}
          <StInputStyle type="text" value={title} onChange={titleChangeHandler} />
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
  );
}

export default Form;

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
