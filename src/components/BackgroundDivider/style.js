import styled from "styled-components";

export const BgContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);  

  svg {
    position: relative;
    display: block;
    width: calc(145% + 1.3px);
    height: 25px;
  }

 .shape-fill {
    fill: #FFFFFF;
  }
`;