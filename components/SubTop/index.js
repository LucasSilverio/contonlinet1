import React, { Component } from 'react';
import { Bg, BtnAction, Container, Logo, PageContainer, Paragrafo, Title } from './styled';
import { FirstColor, SecondColor } from '../MainStyled';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class SubTop extends Component {

  constructor(props){
    super(props);
    this.state={
    }
  }

  render(){
    return(
    <PageContainer bgColor={SecondColor}>
        <Bg src='/sub.png' />
        <Container>
          
        </Container>
    </PageContainer>
    )
  }
}

export default SubTop;