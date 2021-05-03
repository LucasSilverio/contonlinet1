import React, { Component } from 'react';
import Router from 'next/router';
import { 
    BtnAction, 
    Container, 
    Drawer,
    Item, 
    ItemMobile, 
    IconeMenu,
    Logo, 
    Lk,
    LogoArea,
    Line, 
    Menu, 
    MenuImg, 
    Mob,
    MenuDestaque,
    MenuDestaqueMob,
    MenuArea, 
    ItemLogin, 
    PageContainer 
  } from './styled';
import { FirstColor, SecondColor } from '../../../MainStyled';
import Link from 'next/link';
import {onlyNumbers} from '../../../../services/formMask';

class TopBar extends Component {

  constructor(props){
    super(props);
    this.state={
      menuVisible:false,
      mobMenuVisible:false
    }
    this.sBottom = this.sBottom.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.handleLogo = this.handleLogo.bind(this);
  }

  componentDidMount(){
  }

  handleLogo(){
    Router.push('/'+this.props.clientslug)
  }

  handleMenu(){
    this.setState({menuVisible:!this.state.menuVisible})
  }

  sBottom(){
    scroll.scrollTo(5100);
    this.actionClick_Planos();
  }

  render(){
    return(
      <>
        <PageContainer bgColor={'#FFF'} altura={this.props.altura}>
            <Container> 
                <Link href={''}>
                  <a>
                    <Item icon={'/emailIcon.jpg'} color={this.props.infos.cor} >{this.props.infos.email}</Item>
                  </a>
                </Link>
                <Link href={'//wa.me/55'+onlyNumbers(this.props.infos.whatsapp)}>
                  <a target={"_blank"}>
                    <Item icon={'/whatsappsm.png'} color={this.props.infos.cor} >{this.props.infos.whatsapp}</Item>
                  </a>
                </Link>
                {this.props.infos.facebook != '' &&
                  <Link href={'//'+this.props.infos.facebook}>
                    <a target={"_blank"}>
                      <Item icon={'/facebookIcon.jpg'} color={this.props.infos.cor} ></Item>
                    </a>
                  </Link>
                }
                {this.props.infos.instagram != '' &&
                  <Link href={this.props.infos.instagram}>
                    <a target={"_blank"}>
                      <Item icon={'/instaIcon.jpg'} color={this.props.infos.cor} ></Item>
                    </a>
                  </Link>
                }
                {/* <MenuDestaque bgColor={this.props.infos.cor}><Lk href={'tel:'+this.props.infos.telefonecontato}>Ligue agora:{' '+this.props.infos.telefonecontato}</Lk></MenuDestaque> */}
            </Container>
        </PageContainer>
        <MenuArea visible={this.state.menuVisible}>
            {/* <Link href='/'>
              <ItemMobile>HOME</ItemMobile>
            </Link>
            <Link href='/quem-somos'>
              <ItemMobile>QUEM SOMOS</ItemMobile>
            </Link>   
            <Link href='/contato'>
              <ItemMobile>Contato</ItemMobile>
            </Link>          */}
        </MenuArea>
        <IconeMenu onClick={this.handleMenu} src='/menuclient.svg' />
        <Drawer mobMenuVisible={this.state.mobMenuVisible}>              
        </Drawer>
      </>
    )
  }
}

export default TopBar;