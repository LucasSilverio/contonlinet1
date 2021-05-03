import React, { Component } from 'react';
import Router from 'next/router';
import { BtnAction, BoxItem, Container, Item, ItemMobile, Logo, Line, Menu, MenuImg, MenuArea, ItemLogin, PageContainer } from './styled';
import { FirstColor, SecondColor } from '../MainStyled';
import Link from 'next/link';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Top extends Component {

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
    Router.push('/')
  }

  handleMenu(){
    this.setState({menuVisible:!this.state.menuVisible})
  }

  sBottom(){
    // scroll.scrollToBottom();
    scroll.scrollTo(5100);
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
        <PageContainer bgColor={FirstColor} altura={this.props.altura}>
            <Container> 
                <Logo src='/logoteste.svg' onClick={this.handleLogo}/>
                <BoxItem>
                  <Link href='/planos'>
                    <Item>Planos</Item>
                  </Link>
                  <Link href='/modelos'>
                    <Item>Modelos</Item>
                  </Link>
                </BoxItem>
                <Link href='/planos'>
                  <BtnAction bgColor={'#F2A57C'}>TESTAR GRÁTIS</BtnAction>
                </Link>
                <Link href='/login'>
                  <ItemLogin>Login</ItemLogin>
                </Link>
                <Menu>
                  <MenuImg onClick={this.handleMenu} src='/menu.svg' />
                </Menu>
            </Container>
        </PageContainer>
        <MenuArea visible={this.state.menuVisible}>
            {/* <Link href='/blog'>
              <ItemMobile>Blog</ItemMobile>
            </Link> */}
            <Link href='/modelos'>
              <ItemMobile>Modelos</ItemMobile>
            </Link>
            <Link href='/planos'>
              <ItemMobile>Planos</ItemMobile>
            </Link>
            <Link href='/login'>
              <ItemMobile>Login</ItemMobile>
            </Link>
            {/* <Line /> */}
            
        </MenuArea>
      </>
    )
  }
}

export default Top;