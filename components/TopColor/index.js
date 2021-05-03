import React, { Component } from 'react';
import { BtnAction, Container, Logo, PageContainer } from './styled';
import { FirstColor, SecondColor } from '../MainStyled';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Router from 'next/router';

class TopColor extends Component {

  constructor(props){
    super(props);
    this.state={
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    Router.push('/');
  }

  render(){
    return(
    <PageContainer bgColor={SecondColor}>
        <Container> 
            <Logo src='/logo-w.svg' onClick={this.handleClick}/>
        </Container>
    </PageContainer>
    )
  }
}

export default TopColor;