import React, { Component } from 'react';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import { BannerArea, Container, PageContainer, Logo, MenuItems, Opcoes } from './styled';
import osAPI from '../../services/osAPI';
import Cookie from 'js-cookie';
// import GoogleMap  from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Maps extends Component {

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
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.278648979235!2d-48.92235688569602!3d-20.0387679865429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bcb0f618d07619%3A0x71addc39f4dcf563!2sAv.%20das%20Americas%2C%20Frutal%20-%20MG%2C%2038200-000!5e0!3m2!1spt-BR!2sbr!4v1613519375982!5m2!1spt-BR!2sbr" width="100%" height="600" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.510097071944!2d-48.939022085696195!3d-20.029065886548302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bcb11e4088d469%3A0x89348da894d1169e!2sR.%20Machado%20de%20Assis%2C%20320%20-%20Centro%2C%20Frutal%20-%20MG%2C%2038200-000!5e0!3m2!1spt-BR!2sbr!4v1614614966660!5m2!1spt-BR!2sbr" width="100%" height="600" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
      </PageContainer>
    )
  }
}

export default Maps;