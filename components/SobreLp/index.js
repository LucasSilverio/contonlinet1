import React, { Component } from 'react';
import Link from 'next/link';
import { BtnAction, BtnActionMob, Column, Container, Descricao, Img, PageContainer, ServicosArea, SubTitle,  } from './styled';
import Cookie from 'js-cookie';
import Zoom from 'react-reveal/Zoom';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';  

class SobreLp extends Component {

  constructor(props){
    super(props);
    this.state={
      banners:[]
    }
  } 

  componentDidMount(){
  }

  sBottom(e){
    scroll.scrollTo(e);
  }

  render(){
    return(
      <PageContainer>
        <Container>
          <SubTitle dark={false}>O que a Contonline faz por você?</SubTitle>
          <ServicosArea>
            <Zoom>
              <Column>
                <Img src='/teamlp.png' />
              </Column>
              <Column>
                <Descricao>Somos uma Startup que ajuda contadores e escritórios de contabilidade a conseguir mais clientes e negócios através de sites de alta conversão. </Descricao>
                <Descricao>Nossa missão é entregar um site totalmente otimizado para o objetivo do seu escritório contábil, para que você seja encontrado por cada vez mais pessoas.</Descricao>
                <Descricao>Um de nossos pilares é o atendimento com excelência, pois sabemos que a rotina em um escritório contábil e corrida e cada minuto ganho é importante.</Descricao>
                
              </Column>
            </Zoom>
          </ServicosArea>
          <BtnAction onClick={e=>this.sBottom(550)}>Receba o contato de um consultor pelo Whatsapp</BtnAction>
          <BtnActionMob onClick={e=>this.sBottom(800)}>Receba o contato de um consultor pelo Whatsapp</BtnActionMob>
        </Container>
      </PageContainer>
    )
  }
}

export default SobreLp;