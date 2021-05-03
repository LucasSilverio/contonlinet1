import React, { Component } from 'react';
import Cookie from 'js-cookie';
import Link from 'next/link';
import Router from 'next/router';
import Loader from 'react-loader-spinner';
import { 
  Container, 
  DrawerButton,
  Opcao,
  OpcaoIcon,
  OpcaoLabel,
  PageContainer,
  SideBar,
  SideBarLogo,
  SideBarLabel,
  SideBarTitle,
  SideBarRow
} from './styled';
import { FirstColor, SecondColor, ThirdColor } from '../MainStyled';
import { SubTitulo, Titulo } from '../Principal/styled';
import NumberFormat from 'react-number-format'; 
import ecommerceAPI from '../../services/ecommerceAPI'; 
import osAPI from '../../services/osAPI';

class PanelClient extends Component {

  constructor(props){
    super(props);
    this.state={
        loading:false,
        nomeloja:'',
        nome:'',
        possuidominio:'',
        dominio:'',
        menuVisible:false,
        infos:[]
    }

    this.handleMenu = this.handleMenu.bind(this);
  }

  componentDidMount(){
    // osAPI.getPanelInfos(Cookie.get('tk'))
    // .then(r=>r.json())
    // .then(json=>{
    //   if(json.success){
    //     this.setState({infos:json.data})
    //     this.setState({nomeloja:json.data.nomeloja})
    //     this.setState({nome:json.data.nome})
    //   }
    // })
  }

  handleMenu(){
    this.setState({menuVisible:!this.state.menuVisible})
  }

  render(){ 
    console.log(this.state.infos.length) 
    return(
        <>
          <DrawerButton onClick={this.handleMenu}>Menu</DrawerButton>
          <PageContainer bgColor={ThirdColor} menuVisible={this.state.menuVisible}>
              <SideBar>
                <SideBarTitle>Em contrução...</SideBarTitle>
                <SideBarRow>
                  {/* <SideBarLogo src='/shop.png'/> */}
                </SideBarRow>
                  {/* <SideBarLabel>Nome da loja:<strong>{this.props.nomeloja}</strong></SideBarLabel>
                  <SideBarLabel>Segmento:</SideBarLabel>
                  <SideBarLabel>Responsável:<strong>{this.props.nome}</strong></SideBarLabel>
                <SideBarTitle>Informações do domínio</SideBarTitle>
                  <SideBarLabel>Já possui domínio:<strong>{this.state.possuidominio != '' ?  this.state.possuidominio : 'Não Informado'}</strong></SideBarLabel>
                  <SideBarLabel>Endereço (domínio):<strong>{this.state.dominio != '' ?  this.state.dominio : 'Não Informado'}</strong></SideBarLabel>
                <SideBarTitle>Especialista Responsável</SideBarTitle>
                <SideBarRow>
                  <SideBarLogo src='/especialista.jpeg' />
                  <SideBarLabel>Lucas Sousa</SideBarLabel>
                  <SideBarLabel>lucas.sousa@cartb.com.br</SideBarLabel>
                </SideBarRow> */}
              </SideBar>
          </PageContainer>
        </>
    )
  }
}

export default PanelClient;