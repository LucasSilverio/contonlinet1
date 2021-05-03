import React, { Component } from 'react';
import Link from 'next/link';
import { PageArea, PageContainer} from './styled';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


class BottomPanel extends Component { 

  constructor(props){
    super(props);
    this.state={
    }

    this.sPlanos = this.sPlanos.bind(this);
  }

  sPlanos(){
    scroll.scrollTo(5100);
  }

  sQuemSomos(){
    scroll.scrollTo(600);
  }

  sPlanosMob(){
    scroll.scrollTo(8200);
  }

  sPlanosTab(){
    scroll.scrollTo(7000);
  }

  render(){
    return(
      <> 
        <PageContainer>
           <PageArea>
           </PageArea>             
        </PageContainer>
      </>
    )
  }
}

export default BottomPanel;