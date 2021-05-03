import React, { Component } from 'react';
import Link from 'next/link';
import { BtnAction, Container, ContentArea, Content, Img, Item, ItemNumber, Line, Column, Lk, LineR, LineL, PageContainer, Paragrafo, SubTitle, SubContainer, SubTitleSm, TopItem } from './styled';
import { FirstColor, SecondColor, ThirdColor } from '../MainStyled';
import Zoom from 'react-reveal/Zoom';
import  Router from 'next/router';

class Comecar extends Component {

  constructor(props){
    super(props);
    this.state={
    }
    this.sBottom = this.sBottom.bind(this);
    this.handlePlanos = this.handlePlanos.bind(this);
    this.handleModelos = this.handleModelos.bind(this);
    this.actionClick_Planos = this.actionClick_Planos.bind(this);
  }

  sBottom(){
    // this.props.handleContact()
    Router.push('/contato')
  }

  handleModelos(){
    Router.push('/modelos');
}

  handlePlanos(){
      this.actionClick_Planos();
      Router.push('/planos');
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
        <PageContainer bgColor={ThirdColor}>
            <Container>
                <SubTitle dark={true}>Vamos começar?</SubTitle>
                <SubTitleSm>Escolha um dos planos ou faça um teste por 7 dias totalmente grátis. </SubTitleSm>
                <SubContainer>
                    <Column>
                      {this.props.modelos &&
                        <Lk onClick={this.handleModelos}>VER MODELOS</Lk>
                      }
                      {!this.props.modelos &&
                        <Lk onClick={this.handlePlanos}>VER PLANOS</Lk>
                      }
                        <BtnAction onClick={this.sBottom} >FALAR COM CONSULTOR</BtnAction>
                    </Column>
                    <Column>
                        <Img src='continuar.png' />
                    </Column>
                </SubContainer>
            </Container>
        </PageContainer>
)
  }
}

export default Comecar;