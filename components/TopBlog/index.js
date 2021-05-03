import React, { Component } from 'react';
import Router from 'next/router';
import { BtnAction, Container, ItemLogin, Item, Logo, PageContainer } from './styled';
import { FirstColor, SecondColor } from '../MainStyled';
import Link from 'next/link';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class TopBlog extends Component {

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
    <PageContainer bgColor={FirstColor}>
        <Container> 
            <Link href={'/'+this.props.infos.slug+'/blog'}>
              <Logo src={this.props.infos.logo} onClick={this.handleLogo}/>
            </Link>
            {this.props.cliente &&
              <Link href={'/'+this.props.infos.slug}>
                <Item>Precisa de um Contador? Clique aqui!</Item>
              </Link>
            }
            
        </Container>
    </PageContainer>
    )
  }
}

export default TopBlog;