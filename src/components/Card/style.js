import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  padding: 5px;
  background: white;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;

  img {
    color: #FF8A00;
    width: 60px;
    height: 60px;
    object-fit: contain;
  }

  p{
    margin: 0
  }

  .title {
    font-size: 13px;
    color: #FF8A00;
    font-weight: 600;
    letter-spacing: -8%;

  }

  .subtitle {
    font-size: 11px;
    color: #4A5568;
    font-weight: 600;
    letter-spacing: -8%;
    
  }
`

export const Step = styled.div`
  font-size: 12px;
  color: #4A5568;
  font-weight: 600;
  letter-spacing: -8%;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  &:after{
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 10px;
    border: 2px solid #4A5568;
    position: absolute;
    left: calc(-1rem - .25rem);

  }

  
`

export const LineDash = styled.div`

  position: absolute;
  border-left: 1px dashed #A4AFC1;
  height: calc(100% + 1rem);
  left: calc(-1rem);
  top: -5px;


`