import React, { Component } from 'react';
import Link from 'next/link';
import { BtnAction, BtnActionMob, Column, Container, Descricao, Img, PageContainer, Preco, ServicosArea, SubTitle,  } from './styled';
import Cookie from 'js-cookie';
import Zoom from 'react-reveal/Zoom';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';   

class PrecoLp extends Component {

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
          <SubTitle dark={false}>Teste por 7 dias grátis, cancele quando quiser</SubTitle>
          <ServicosArea>
            <Zoom>
              <Column>
                <Preco>
                  <small>R$</small><strong>34,90</strong><small>/mês</small>
                </Preco>

                <Descricao>Layout responsivo para smartphones, tablets e computadores</Descricao>
                <Descricao>Layout de alta conversão, de acordo com a estratégia do seu escritório</Descricao>
                <Descricao>SEO otimizado para o Google</Descricao>
                <Descricao>Botão do Whatsapp</Descricao>
                <Descricao>Formulário de contato</Descricao>
                <Descricao>Suporte via E-mail, chat e whatsapp</Descricao>
                <Descricao>Constante atualizações e novos recursos sem custo adicional</Descricao>
                <Descricao>Sem limite de acessos</Descricao>

                
              </Column>
            </Zoom>
          </ServicosArea>
          <BtnAction onClick={e=>this.sBottom(550)}>QUERO TESTAR POR 7 DIAS SEM CUSTO</BtnAction>
          <BtnActionMob onClick={e=>this.sBottom(800)}>QUERO TESTAR POR 7 DIAS SEM CUSTO</BtnActionMob>
        </Container>
      </PageContainer>
    )
  }
}

export default PrecoLp;