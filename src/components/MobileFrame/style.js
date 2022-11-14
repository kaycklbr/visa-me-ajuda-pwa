import styled from "styled-components";


export const FrameContainer = styled.div`
  overflow: hidden;
  overflow-y: visible;
  width: 320px;
  aspect-ratio: 9/16;
  margin-top: 2rem;
  height: auto;
  border: 6px solid #ddd;
  background-color: white;
  position: relative;
  border-radius: 30px;
  box-shadow: 5px 0px 15px #00000022;
  display: flex;
  flex-direction: column;
  z-index: 2;
`;

export const FrameStatusBar = styled.div`
  position: absolute;
  z-index: 1;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background: #ddd;
  width: 80px;
  height: 10px;
  margin-top: 0px;
  align-self: center;

`