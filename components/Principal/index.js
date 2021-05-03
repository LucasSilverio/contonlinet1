import React, { Component } from 'react';
import { BtnAction, BtnActionMob, BotaoArea, BannerImg, BannerImgMob, BtnActionTab, Container, Content, ContentImg, Destaque, PageContainer, Paragrafo, SubTitulo, Titulo, VideoArea, Video, Wave } from './styled';
import { FirstColor, SecondColor, ThirdColor } from '../MainStyled';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Link from 'next/link';

class Principal extends Component {

  constructor(props){
    super(props);
    this.state={
    }
    this.sPlanosMob = this.sPlanosMob.bind(this);
    this.sPlanosTab = this.sPlanosTab.bind(this);
    this.sPlanos = this.sPlanos.bind(this);
  }

  sPlanos(){
    scroll.scrollTo(5100);
  }

  sPlanosMob(){
    scroll.scrollTo(8200);
    this.actionClick_Planos();
  }

  sPlanosTab(){
    scroll.scrollTo(7000);
    this.actionClick_Planos();
  }

  actionClick_Planos(){
    gtag('event', 'Ver planos', {
      'event_category': 'Clique',
      'event_label': 'Ver planos',
      'value': 0
    });
  }

  render(){
    return(
    <PageContainer bgColor={'#FFF'}>
        <Container> 
            <Content>
                <Titulo>
                   Sites de Alta Conversão para Escritórios de Contabilidade que Desejam se Destacar na Região em que Atuam 
                </Titulo>
                <SubTitulo>
                    Você não precisa de um simples site, precisa de um site que <Destaque>Gere Conversões e Clientes</Destaque> para seu escritório.
                </SubTitulo>
                <SubTitulo>
                    Escolha o modelo ideal baseado no seu objetivo de negócio, seja receber <Destaque>mais ligações</Destaque>, receber <Destaque>mais e-mails</Destaque> ou o conjunto todo. Para cada objetivo, há uma estratégia.
                </SubTitulo>
                <BotaoArea>
                  <Link href='/planos'>
                    <a>
                      <BtnAction bgColor={'#F2A57C'}>VER PLANOS</BtnAction>
                    </a>
                  </Link>
                  <Link href='/modelos'>
                    <a>
                      <BtnAction bgColor={'#716FF2'}>VER MODELOS</BtnAction>
                    </a>
                  </Link>
                </BotaoArea>
                <BtnActionTab onClick={this.sPlanosTab} bgColor={SecondColor}>COMEÇAR</BtnActionTab>
                <Link href='/modelos'>
                  <a>
                    <BtnActionMob bgColor={'#716FF2'}>VER MODELOS</BtnActionMob>
                  </a>
                </Link>
                <Link href='/planos'>
                  <a>
                    <BtnActionMob bgColor={'#F2A57C'}>VER PLANOS</BtnActionMob>
                  </a>
                </Link>
            </Content>
            <VideoArea>
              <Wave>
                <video autoplay='autoplay' loop='true'>
                  <source src="/movie.mp4" type="video/mp4" />
                </video>
              </Wave>
            </VideoArea>
            {/* <ContentImg>
                <BannerImg src='/principal.png' />
                <BannerImgMob src='/principalMob.svg' />
            </ContentImg> */}
        </Container>
    </PageContainer>
    )
  }
}

export default Principal;