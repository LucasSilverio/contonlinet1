import React, { Component } from 'react';
import Cookie from 'js-cookie';
import Link from 'next/link';
import Router from 'next/router';
import Loader from 'react-loader-spinner';
import { 
  Container, 
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

class PanelAdm extends Component {

  constructor(props){
    super(props);
    this.state={
        loading:false,
    }
  }

  handleInfos(){
    Router.push('/admin/new-story');
  }

  handleAll(){
    Router.push('/admin/list');
  }

  render(){ 
    return(
        <PageContainer bgColor={ThirdColor}>
            <Container>
              <Opcao onClick={this.handleInfos}>
                {/* <OpcaoIcon src='/info.png'/> */}
                <OpcaoLabel>Nova matéria</OpcaoLabel>
              </Opcao>
              <Opcao onClick={this.handleAll}>
                {/* <OpcaoIcon src='/info.png'/> */}
                <OpcaoLabel>Todas as matérias</OpcaoLabel>
              </Opcao>
            </Container>
        </PageContainer>
    )
  }
}

export default PanelAdm;