import { User } from "react-feather";
import { Link } from "react-router-dom";
import { Line } from "..";
import { TextLink } from "../Buttons/TextLink";
import { NavContainer } from "./style";

export const Navbar = () => {
  return (
    <NavContainer>
        <div className="circle">
          <User size={16} color={'white'}/>
        </div>
        <img src={require('../../images/visa_help.png')} width="100" />
        <TextLink to="/">Entrar</TextLink>
    </NavContainer>
  );
}