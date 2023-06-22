import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { useSelector } from "react-redux";

function AboutPage() {
  const navigate = useNavigate();
  const params = useParams();
  const todoRedux = useSelector((state) => {
    return state.todo.todoList;
  });

  const foundData = todoRedux.find((item) => {
    return item.id === params.id;
  });

  return (
    <StContainer>
      <StTitle>
        <div>Id: {foundData.id}</div>
        <Stbtn
          onClick={() => {
            navigate("/");
          }}
        >
          이전으로{" "}
        </Stbtn>
      </StTitle>
      <StContents>
        <h2>{foundData.title} </h2>
        <h3>{foundData.contents} </h3>
      </StContents>
    </StContainer>
  );
}

export default AboutPage;

const StContainer = styled.div`
  max-width: 400px;
  min-width: 300px;
  height: 300px;
  margin: 150px auto;
  border: 1px solid black;
  padding: 5px 20px;
  border-radius: 10px;
`;

const StTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

const StContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  /* margin-top: 50px; */
  gap: 20px;
`;

const Stbtn = styled.button`
  width: 70px;
  background-color: white;
  border: 1px solid black;
  color: green;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
`;
