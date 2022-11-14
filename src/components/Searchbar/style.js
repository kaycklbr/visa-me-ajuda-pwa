import styled from "styled-components";

export const SearchContainer = styled.div`
  z-index: 0;
  height: 50px;
  background: white;
  border-radius: 10px;
  box-shadow: 5px 0 15px #00000022;
  margin: 1.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  input {
    width: 100%;
    outline: none;
    border: none;

    &::placeholder {
      font-style: italic;
      font-family: Montserrat
    }
  }

`