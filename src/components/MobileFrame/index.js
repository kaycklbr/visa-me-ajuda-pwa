import { FrameContainer, FrameStatusBar } from "./style";

export const MobileFrame = ({children}) => {

  return (
    <FrameContainer>
      <FrameStatusBar/>
      {children}
    </FrameContainer>
  );

}

export default MobileFrame;