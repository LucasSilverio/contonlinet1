import React, { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link'
import { 
  Container,
  Lk, 
  Opcao,
  OpcaoIcon,
  OpcaoLabel,
  PageContainer,
} from './styled';
import { FirstColor, SecondColor, ThirdColor } from '../MainStyled';
import Progress from '../Progress';

class PanelClient extends Component {

  constructor(props){
    super(props);
    this.state={
        loading:false,
    }
  }

  handleInfos(){
    Router.push('/panel/infos');
  }

  handleDominio(){
    Router.push('/panel/dominio');
  }

  render(){ 
    return(
        <PageContainer bgColor={ThirdColor}>
            <Progress 
              statuspg={this.props.statuspg}
              dominioconfigurado={this.props.dominioconfigurado}
              acessoliberado={this.props.acessoliberado}
            />
            <Container>
              <Opcao onClick={this.handleInfos}>
                <OpcaoIcon src='/info.png'/> 
                <OpcaoLabel>Informações da Loja</OpcaoLabel>
              </Opcao>
              <Opcao onClick={this.handleDominio}>
                <OpcaoIcon src='/internet.png'/> 
                <OpcaoLabel>Definir domínio</OpcaoLabel>
              </Opcao>
              {this.props.acessoliberado == 1 &&
                <Link href={'https://app.cartb.com.br'} passHref={true}>
                  <Lk target="_blank" rel="noreferrer">
                    <OpcaoIcon src='/config.png'/> 
                    <OpcaoLabel>Painel da Loja</OpcaoLabel>
                  </Lk>
                </Link>
              }
            </Container>
        </PageContainer>
    )
  }
}

export default PanelClient;