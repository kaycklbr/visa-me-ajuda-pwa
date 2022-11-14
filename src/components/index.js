import styled from "styled-components";


export const Line = styled.div`
  display: flex;
  align-items: center;
`;

export const HomeTopSection = styled.div`
`;
export const HomeTopBackground= styled.div`
  background: linear-gradient(45deg, #0C3785, #178bd3);
  position: relative;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 550px;
`;

export const Content = styled.div`
  padding: 1.5rem;
`;

export const Button = styled.button.attrs({
  type: 'button'
})`
  outline: none;
  border-radius: 10px;
  background: #FF9902;
  color: white;
  border: none;
  padding: 15px 50px;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
`

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-top: -2px;
  color: #4A5568;
  letter-spacing: -8%;
  position: relative;
`

export const Container = styled.div``;