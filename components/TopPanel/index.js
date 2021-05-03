import React, { Component } from 'react';
import Cookie from 'js-cookie';
import Router from 'next/router'
import { 
        BtnAction, 
        Container, 
        Lk,
        Logo, 
        MenuArea, 
        OpcaoItem,
        PageContainer 
      } from './styled';
import { FirstColor, SecondColor } from '../MainStyled';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class TopPanel extends Component {

  constructor(props){
    super(props);
    this.state={
    }
  }

  logout(){
    Cookie.remove('conclude');
    Cookie.remove('email');
    Cookie.remove('pcit');
    Cookie.remove('tk');
    Cookie.remove('user');
    Router.push('/login')
  }

  sBottom(){
    // scroll.scrollToBottom();
    scroll.scrollTo(5100);
  }

  render(){
    return(
    <PageContainer bgColor={FirstColor}> 
        <Container> 
            <Logo src='/logo.png' />
            <MenuArea>
              <OpcaoItem onClick={this.logout}>
                Sair
              </OpcaoItem>
            </MenuArea>
        </Container>
    </PageContainer>
    )
  }
}

export default TopPanel;