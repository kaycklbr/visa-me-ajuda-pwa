import { HomeTopBackground, Title } from "../.."
import BackgroundDivider from "../../BackgroundDivider"
import { Navbar } from "../../Navbar"
import { Searchbar } from "../../Searchbar"
import { TitleContainer } from "./style"

export const HeaderHome = ({ title, subtitle }) => {
  console.log(title, subtitle)
  return (
    <>
      <HomeTopBackground style={{height: 'auto', paddingBottom: '1rem', zIndex: 'unset'}}>
        <BackgroundDivider/>
        <Navbar back={!!title}/>

        {title ?
        <TitleContainer>
          <Title style={{color: '#FF8A00'}}>{title}</Title>
          <Title style={{fontSize: 13, color: 'white', marginTop: -8}}>{subtitle}</Title>
        </TitleContainer>
        :
        <Searchbar />
        }
      </HomeTopBackground>

    </>

  )
}