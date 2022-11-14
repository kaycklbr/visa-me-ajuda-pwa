import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Content, HomeTopBackground, HomeTopSection, Line, Title } from '../components';
import BackgroundDivider from '../components/BackgroundDivider';
import { Card } from '../components/Card';
import FlexPanel from '../components/FlexPanel';
import { HeaderHome } from '../components/Header/HeaderHome';
import MobileFrame from '../components/MobileFrame';
import { Navbar } from '../components/Navbar';
import { Searchbar } from '../components/Searchbar';
import NavigationRoutes from '../navigation';
import { Trilha } from '../services/Trilha';

export const WebContainer = ({children}) => {
  return (
    <Container>
      <HomeTopSection>
        <HomeTopBackground>
          <BackgroundDivider/>
          <FlexPanel>
            <Content style={{paddingTop: '3rem'}}>
              <Line>
                <img src={require('../images/visa.png')} width={100} />
                <span style={{fontWeight: '500', color: 'white', marginLeft: 10}}>Me ajuda!</span>
              </Line>

              <p style={{marginTop: '5rem', color: 'white', fontWeight: 500, fontSize: 34}}>
                Precisa de ajuda? Nunca passe dificuldades para tirar dúvidas da sua viagem com segurança!
              </p>

              <Button style={{marginTop: '3rem'}}>Use o App<ChevronRight size={18} style={{marginLeft: 10}} /></Button>
            </Content>
            <Content style={{display: 'flex', justifyContent: 'center'}}>
              <MobileFrame>{children}</MobileFrame>
            </Content>
          </FlexPanel>
        </HomeTopBackground>
        
        
      </HomeTopSection>

    </Container>
  )
}