import { HomeTopBackground, Title } from "../.."
import BackgroundDivider from "../../BackgroundDivider"
import { Navbar } from "../../Navbar"
import { Searchbar } from "../../Searchbar"
import { TitleContainer } from "./style"

export const HeaderHome = ({ title, subtitle }) => {
  return (
    <>
      <HomeTopBackground style={{height: 200, zIndex: 'unset'}}>
        <BackgroundDivider/>
        <Navbar/>

        {title ?
        <TitleContainer>
          <Title style={{color: '#FF8A00'}}>{title}</Title>
          <Title style={{fontSize: 13, color: 'white', lineHeight: '0px'}}>{subtitle}</Title>
        </TitleContainer>
        :
        <Searchbar />
        }
      </HomeTopBackground>

    </>

  )
}