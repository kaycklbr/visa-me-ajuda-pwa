import { ChevronLeft, User } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import { Line } from "..";
import { TextLink } from "../Buttons/TextLink";
import { NavContainer } from "./style";

export const Navbar = ({ back }) => {
  
  const navigate = useNavigate();

  return (
    <NavContainer>
        <Line>
          <ChevronLeft onClick={()=>navigate(-1)} style={{marginRight: 10}} size={18} color={'#4A5568'}/>
          <div className="circle">
            <User size={16} color={'white'}/>
          </div>
        </Line>
        <img src={require('../../images/visa_help.png')} width="100" />
        <TextLink to="/">Entrar</TextLink>
    </NavContainer>
  );
}