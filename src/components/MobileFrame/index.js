import { FrameContainer, FrameStatusBar } from "./style";

export const MobileFrame = ({children}) => {

  return (
    <FrameContainer>
      <FrameStatusBar/>
      <div style={{zIndex: 10}}>
      {children}

      </div>
    </FrameContainer>
  );

}

export default MobileFrame;