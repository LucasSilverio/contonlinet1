import React, { Component } from 'react';
import Router from 'next/router';
import { BtnAction, BoxItem, Container, Item, ItemMobile, Logo, Line, Menu, MenuImg, MenuArea, ItemLogin, PageContainer } from './styled';
import { FirstColor, SecondColor } from '../MainStyled';
import Link from 'next/link';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class TopLp extends Component {

  constructor(props){
    super(props);
    this.state={
      menuVisible:false
    }
    this.sBottom = this.sBottom.bind(this);
    this.actionClick_Planos = this.actionClick_Planos.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
  }

  handleLogo(){
    Router.push('/criar-site-contabil')
  }

  handleMenu(){
    this.setState({menuVisible:!this.state.menuVisible})
  }

  sBottom(e){
    // scroll.scrollToBottom();
    scroll.scrollTo(e);
    this.setState({menuVisible:false})
    // this.actionClick_Planos();
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
      <>
        <PageContainer bgColor={'#716FF2'} altura={this.props.altura}>
            <Container> 
                <Logo src='/logoteste-w.svg' onClick={this.handleLogo}/>
                {!this.props.hideMenu &&
                  <>
                    <BoxItem>
                      <Item onClick={e=>this.sBottom(4850)}>Planos</Item>
                      <Item onClick={e=>this.sBottom(2100)}>Depoimentos</Item>
                      <Item onClick={e=>this.sBottom(3200)}>Sobre</Item>
                    </BoxItem>
                    <BtnAction onClick={e=>this.sBottom(550)} bgColor={'#F2A57C'}>TESTAR GRÁTIS</BtnAction>
                  </>
                }
                <Menu>
                  <MenuImg onClick={this.handleMenu} src='/menu-w.svg' />
                </Menu>
            </Container>
        </PageContainer>
        <MenuArea visible={this.state.menuVisible}>
            <ItemMobile onClick={e=>this.sBottom(3800)}>Depoimentos</ItemMobile>
            <ItemMobile onClick={e=>this.sBottom(9000)}>Planos</ItemMobile>
            <ItemMobile onClick={e=>this.sBottom(6500)}>Sobre</ItemMobile>
            <ItemMobile onClick={e=>this.sBottom(800)}>Testar Gratuitamente</ItemMobile>
            
            
        </MenuArea>
      </>
    )
  }
}

export default TopLp;