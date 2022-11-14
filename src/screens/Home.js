import React, { useEffect, useRef, useState } from 'react';
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
import { Trilha } from '../services/Trilha';
import { WebContainer } from './WebContainer';

const Home = () => {

  const [ trails, setTrails ] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    getTrails();
  }, [])


  const getTrails = async () => {
    try{
      const {data:res} = await Trilha.get();
      setTrails(res)
    }catch(error){
      console.log(error);
    }
  }

  const isMobile = useRef(navigator.userAgentData.mobile);



  return (
    isMobile.current ?

    (<Container>

      <HeaderHome/>
      <div style={{margin: '.75rem', marginTop: '1rem'}}>
        <Title>Siga uma trilha</Title>
        {trails.map((t) =>{
          return <Card onClick={()=>navigate('/trilha', { state: {trail: t} })} image={t.imagem || 'https://img.freepik.com/vetores-premium/ilustracao-de-icone-de-aviao-de-ar_138676-278.jpg'} title={t.titulo} subtitle={t.descricao} />
        })}
      </div>

    </Container>)
    :
    (<WebContainer>
      <HeaderHome/>

      <div style={{margin: '.75rem', marginTop: '1rem'}}>
        <Title>Siga uma trilha</Title>
        {trails.map((t, i) =>{
          return <Card key={i} onClick={()=>navigate('/trilha', { state: {trail: t} })} image={t.imagem || 'https://img.freepik.com/vetores-premium/ilustracao-de-icone-de-aviao-de-ar_138676-278.jpg'} title={t.titulo} subtitle={t.descricao} />
        })}
      </div>
    </WebContainer>)
  );
}

export default Home;