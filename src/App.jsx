import "./App.css";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "./redux/modules/todo";
import { updateTodo } from "./redux/modules/todo";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  const dispatch = useDispatch();
  const todoRedux = useSelector((state) => {
    return state.todo.todoList;
  });
  // console.log(todoRedux);

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
        <Form />
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
                    {/* <Router /> */}
                    {/* <Link to="/about">상세보기</Link> */}
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
