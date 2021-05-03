import React, { Component } from 'react';
import Router from 'next/router';
import { BtnAction, Container, Item, Logo, ItemLogin, PageContainer, Texto } from './styled';
import { FirstColor, SecondColor } from '../MainStyled';
import Link from 'next/link';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import WhatsApp from '../WhatsApp';

class BottomFormCliente extends Component {

  constructor(props){
    super(props);
    this.state={
    }
    this.sBottom = this.sBottom.bind(this);
    this.actionClick_Planos = this.actionClick_Planos.bind(this);
  }

  handleLogo(){
    Router.push('/')
  }

  sBottom(){
    Router.push('/'+this.props.infos.slug+'/contato');
    // this.props.handleContact()
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
    <PageContainer bgColor={FirstColor} altura={this.props.altura}>
        <Container> 
            <Logo src='/contact.png'/>
            <Texto>Dúvidas?</Texto>
            <BtnAction onClick={this.sBottom} bgColor={this.props.infos.cor}>Ligamos para você!</BtnAction>
            <WhatsApp />
        </Container>
    </PageContainer>
    )
  }
}

export default BottomFormCliente;