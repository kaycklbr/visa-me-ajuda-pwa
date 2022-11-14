import styled from "styled-components";

const FlexPanel = styled.div`
display: flex;

& > div, & > button {
  flex: 1;
}

& > div:not(:last-of-type), & > button:not(:last-of-type) {
  margin-right: 1rem;
}

@media(max-width: 1080px) {
  display: block;

  & > div:not(:last-of-type), & > button:not(:last-of-type) {
    margin-right: 0;
  }
}
`;

export default FlexPanel;