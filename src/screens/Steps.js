
import React, { useEffect, useState } from 'react';
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

const Steps = () => {
  const navigate = useNavigate();

  const { state } = useLocation();


  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    isMobile ?

    <Container>

      <HeaderHome title={state.passos.titulo} subtitle={state.passos.descricao} />


      <div style={{margin: '.75rem', marginTop: '1rem'}}>
        <Title style={{color: '#FF8A00'}}>Em qual passo você está?</Title>
        {state.passos.passo_set.map((p, index) =>{
          return <Card step={index} numberSteps={state.passos.passo_set.length} image={p.imagem || 'https://img.freepik.com/vetores-premium/ilustracao-de-icone-de-aviao-de-ar_138676-278.jpg'} title={p.titulo} subtitle={p.descricao} />

        })}
      </div>

    </Container>

    :

    <WebContainer>
      <HeaderHome title={state.passos.titulo} subtitle={state.passos.descricao} />


      <div style={{margin: '.75rem', marginTop: '1rem'}}>
        <Title style={{color: '#FF8A00'}}>Em qual passo você está?</Title>
        {state.passos.passo_set.map((p, index) =>{
          return <Card step={index} numberSteps={state.passos.passo_set.length} image={p.imagem || 'https://img.freepik.com/vetores-premium/ilustracao-de-icone-de-aviao-de-ar_138676-278.jpg'} title={p.titulo} subtitle={p.descricao} />

        })}
      </div>
    </WebContainer>
  );
}

export default Steps;