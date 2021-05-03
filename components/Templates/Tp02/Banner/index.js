import React, { Component } from 'react';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import { BannerArea, Container, Desk, Mob, PageContainer, Logo, MenuItems, BannerAreaMob, Opcoes } from './styled';
import osAPI from '../../../../services/osAPI';
import Cookie from 'js-cookie';

class Banner extends Component {

  constructor(props){
    super(props);
    this.state={
      banners:[],
      mobBanners:[]
    }
    this.getBanners = this.getBanners.bind(this);
    this.getMobBanners = this.getMobBanners.bind(this);
  } 

  componentDidMount(){
   this.getBanners(this.props.cliente); 
   this.getMobBanners(this.props.cliente); 
  }

  getBanners(slug){
    osAPI.getBanners(slug)
    .then(r=>r.json())
    .then(json=>{
      this.setState({banners:json.data})
    })
  }

  getMobBanners(slug){
    osAPI.getMobBanners(slug)
    .then(r=>r.json())
    .then(json=>{
      this.setState({mobBanners:json.data})
    })
  }

  handleBanner(e){
    document.location.href = e; 
  }
 
  render(){
    return(
      <> 
        <PageContainer>
            <Desk>
              <Carousel autoPlay infiniteLoop={true} showThumbs={false} showStatus={false} swipeable={true} emulateTouch={true}>
                {this.state.banners.map((i, index) => (
                  <>
                    {i.mobile == 0 &&
                      <BannerArea onClick={e=>this.handleBanner(i.destino)} key={index}> 
                        <img src={i.url} />
                      </BannerArea> 
                    }
                  </>
                ))}
              </Carousel>
            </Desk>
            <Mob>
              <Carousel autoPlay infiniteLoop={true} showThumbs={false} showStatus={false} swipeable={true} emulateTouch={true}>
                {this.state.mobBanners.map((i, index) => (
                  <>
                    {i.mobile == 1 &&
                      <BannerAreaMob onClick={e=>this.handleBanner(i.destino)} key={index}> 
                        <img src={i.url} />
                      </BannerAreaMob>
                    }
                  </>
                ))}
              </Carousel>
            </Mob>
        </PageContainer>
      </>
    )
  }
}

export default Banner;