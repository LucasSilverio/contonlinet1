import React, { Component } from 'react';
import Router from 'next/router';
import { BtnAction, Container, Icone, PageContainer } from './styled';
import { FirstColor, SecondColor } from '../MainStyled';
import Link from 'next/link';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class TopBar extends Component {

  constructor(props){
    super(props);
    this.state={
    }
  }

  handleLogo(){
    Router.push('/')
  }

  sBottom(){
    // scroll.scrollToBottom();
    scroll.scrollTo(5100);
  }

  render(){
    return(
    <PageContainer bgColor={'#FFF'} altura={this.props.altura}>
        <Container> 
          {/* <Item icon={'/whatsapp.png'}>(34)9 9696-0659</Item> */}
          <Link href={'//wa.me/send/?phone=5534996960659&text=Olá%2C+estou+interessado+na+criação+do+site+para+meu+escritório.&app_absent=0'} >
            <a target={"_blank"}>
                <Icone src='/whatsapp.png' />
          Chame no Whatsapp
            </a>
          </Link>
        </Container>
    </PageContainer>
    )
  }
}

export default TopBar;