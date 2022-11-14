import React, { useEffect } from 'react';
import { ChevronRight } from 'react-feather';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Container, Content, HomeTopBackground, HomeTopSection, Line, Title } from '../components';
import BackgroundDivider from '../components/BackgroundDivider';
import { Card } from '../components/Card';
import FlexPanel from '../components/FlexPanel';
import { HeaderHome } from '../components/Header/HeaderHome';
import MobileFrame from '../components/MobileFrame';
import { Navbar } from '../components/Navbar';
import { Searchbar } from '../components/Searchbar';
import { WebContainer } from './WebContainer';

const Trail = ({ route }) => {
  const navigate = useNavigate();

  const { state } = useLocation();

  useEffect(()=>{
    console.log(state.trail);
  }, [])

  const isMobile = navigator.userAgentData.mobile;


  return (
    isMobile ?

    <Container>

      <HeaderHome title={'Fazendo programa'} subtitle={'Teste fazendo programa descrição'} />


      <div style={{margin: '.75rem', marginTop: '1rem'}}>
        <Title style={{color: '#FF8A00'}}>Em qual passo você está?</Title>
        {state.trail.mapa_set.map(m => {
          return <Card onClick={()=>navigate('/passos', { state: {passos: m.passo_set}})} image={ m.imagem || 'https://img.freepik.com/vetores-premium/ilustracao-de-icone-de-aviao-de-ar_138676-278.jpg'} title={m.titulo} subtitle={m.descricao} />
        })}
        </div>
    </Container>

    :

    <WebContainer>
      <HeaderHome title={'Fazendo programa'} subtitle={'Teste fazendo programa descrição'} />


      <div style={{margin: '.75rem', marginTop: '1rem'}}>
        <Title style={{color: '#FF8A00'}}>Em qual passo você está?</Title>
        {state.trail.mapa_set.map(m => {
          return <Card onClick={()=>navigate('/passos', { state: {passos: m.passo_set}})} image={ m.imagem || 'https://img.freepik.com/vetores-premium/ilustracao-de-icone-de-aviao-de-ar_138676-278.jpg'} title={m.titulo} subtitle={m.descricao} />
        })}
        </div>
    </WebContainer>
  );
}

export default Trail;