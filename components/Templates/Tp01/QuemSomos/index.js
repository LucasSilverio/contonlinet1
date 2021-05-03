import React, { Component } from 'react';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import { BannerArea, Container, Content, PageContainer, Principal, ImgTeam, Logo, MenuItems, Opcoes, Box, Sub_h2, TracoSm, SocialArea, Icon } from './styled';
import osAPI from '../../../../services/osAPI';
import Cookie from 'js-cookie';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class QuemSomos extends Component {

  constructor(props){
    super(props);
    this.state={
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
      
    }
  } 

  componentDidMount(){
  }

  render(){
    return(
      <PageContainer>
        <ImgTeam src='/teste.jpg' />
        <Principal>
          <Box>
            <Sub_h2>Sobre nossa história</Sub_h2>
            <TracoSm />
          </Box>
          <Content>
            {this.props.infos.sobre}
            <SocialArea>
              <Link href={this.props.infos.instagram}>
                <a target="_blank" rel="noreferrer">
                  <Icon src='/instagram.png' />
                </a>
              </Link>
              <Link href={this.props.infos.facebook}>
                <a target="_blank" rel="noreferrer">
                  <Icon src='/facebook.png' />
                </a>
              </Link>
            </SocialArea>
          </Content>
        </Principal>
      </PageContainer>
    )
  }
}

export default QuemSomos;