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

class MenuFixed extends Component {

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
    Router.push(''+this.props.clientslug)
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
        <PageContainer bgColor={FirstColor} altura={this.props.altura}>
            <Container> 
                <Logo src={this.props.infos.logo} onClick={this.handleLogo}/>
                <Link href={'/'+this.props.clientslug}>
                  <Item color={this.props.infos.cor}>HOME</Item> 
                </Link>
                <Link href={'/'+this.props.clientslug+'/quem-somos'}>
                  <Item color={this.props.infos.cor}>QUEM SOMOS</Item>
                </Link>
                <Link href={'/'+this.props.clientslug+'/blog'}>
                  <Item color={this.props.infos.cor}>BLOG</Item>
                </Link>
                <Link href={'/'+this.props.clientslug+'/contato'}>
                  <Item color={this.props.infos.cor}>CONTATO</Item>
                </Link>
                <MenuDestaque bgColor={this.props.infos.cor}><Lk href={'tel:'+this.props.infos.telefonecontato}>Ligue agora:{' '+this.props.infos.telefonecontato}</Lk></MenuDestaque>
            </Container>
            <MenuDestaqueMob bgColor={this.props.infos.cor}><Lk href={'tel:'+this.props.infos.telefonecontato}>Ligue agora:{' '+this.props.infos.telefonecontato}</Lk></MenuDestaqueMob>
        </PageContainer>
        <MenuArea visible={this.state.menuVisible}>
            <Link href='/'>
              <ItemMobile>HOME</ItemMobile>
            </Link>
            <Link href='/quem-somos'>
              <ItemMobile>QUEM SOMOS</ItemMobile>
            </Link>   
            <Link href='/contato'>
              <ItemMobile>Contato</ItemMobile>
            </Link>         
        </MenuArea>
        <IconeMenu onClick={this.handleMenu} src='/menuclient.svg' />
        <Drawer mobMenuVisible={this.state.mobMenuVisible}>              
        </Drawer>
      </>
    )
  }
}

export default MenuFixed;