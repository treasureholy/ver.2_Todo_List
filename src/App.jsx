import React from "react";
import "./App.css";

function App() {
  return (
    <div className="layout">
      <header className="app-title">
        <div>My Todo List</div> <div>React</div>
      </header>

      <form>
        <div className="form">
          <b>제목</b> <input type="text" />
          <b>내용</b> <input type="text" />
          <button>추가하기</button>
        </div>
      </form>
      <div>
        <h3>리스트영역입니다</h3>
      </div>
    </div>
  );
}

export default App;
