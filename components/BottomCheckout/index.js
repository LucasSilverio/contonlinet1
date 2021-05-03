import React, { Component } from 'react';
import Link from 'next/link';
import { PageContainer, Container, Img, Icon} from './styled';
import osAPI from '../../services/osAPI';
import Cookie from 'js-cookie';

class BottomSite extends Component {

  constructor(props){
    super(props);
    this.state={
      banners:[]
    }
  } 

  componentDidMount(){
  }

  render(){
    return(
      <PageContainer>
        <Container>
          <Img src='/pagseguro.png' />
        </Container>
      </PageContainer>
    )
  }
}

export default BottomSite;