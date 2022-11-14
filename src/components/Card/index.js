import { useNavigate } from "react-router-dom"
import { Container } from "..";
import { CardContainer, LineDash, Step } from "./style"


export const Card = ({ onClick, step = null, image, title, subtitle }) => {

  const navigate = useNavigate();

  return (
    <Container style={step !== null ? {paddingLeft: '1rem'} : {}}>
      
      {step !== null &&
        <Step>{step+1}° passo</Step>
      }
      <CardContainer onClick={()=>onClick && onClick()}>
        {step !== null && <LineDash />}
        <img src={image} />
        <div style={{flex: 1, padding: 5}}>
          <p className="title">{title}</p>
          <p className="subtitle">{subtitle}</p>
        </div>
      </CardContainer>
    </Container>
  )
}