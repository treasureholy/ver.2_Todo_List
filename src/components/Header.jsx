import React from "react";
import styled from "styled-components";

const StHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  border: 1px solid rgba(128, 128, 128, 0.293);
  padding: 5px 20px;
`;

function Header() {
  return (
    <StHeader>
      <div>My Todo List</div> <div>React</div>
    </StHeader>
  );
}

export default Header;
