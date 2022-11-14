import styled from "styled-components";

export const NavContainer = styled.div`
  z-index: 0;
  height: 80px;
  background: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 5px 0 15px #00000022;
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  .circle {
    border-radius: 20px;
    height: 30px;
    width: 30px;
    background: #4A5568;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`