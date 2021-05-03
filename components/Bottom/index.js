import React, { Component } from 'react';
import Link from 'next/link';
import { Box, BtnAction, BoxArea, Container, Credito, Img, Icon, IconSocial, Lk, PageContainer, Paragrafo, Sub_h2, ItensArea, Span, Item, Titulo, Ul, Li, Descricao, TracoSm } from './styled';
import osAPI from '../../services/osAPI';
import Cookie from 'js-cookie';

class Bottom extends Component {

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
          <ItensArea>
            <Item>
              <Titulo>Contato</Titulo>
              <Ul>
                <Li>
                  <Span><Icon src='/endereco.png' /></Span>
                  <Link href='/contato'>
                    <Lk>{this.props.infos.logradouro+', '+this.props.infos.numero}<br/>{this.props.infos.bairro+' - '+this.props.infos.cidade+'-'+this.props.infos.estado}</Lk>
                  </Link>
                </Li>
                <Li>
                  <Span><Icon src='/tel.png' /></Span>
                  <Link href='/contato'>
                    <Lk>{'+55 '+this.props.infos.telefonecontato}</Lk> 
                  </Link>
                </Li>
              </Ul>
            </Item>
            <Item>
              <Img src={this.props.infos.logo} />
            </Item>
            <Item>
              <BoxArea>
              <Link href={this.props.infos.instagram}>
                <a target="_blank" rel="noreferrer">
                  <IconSocial src='/instaicon.png' />
                </a>
              </Link>
              <Link href={this.props.infos.instagram}>
                <a target="_blank" rel="noreferrer">
                  <IconSocial src='/facebookicon.png' />
                </a>
              </Link>
              </BoxArea>
              <BoxArea>
                <Credito>Desenvolvido por <strong><Link href='https://contonline.com.br'><a target="_blank" rel="noreferrer">contonline</a></Link></strong></Credito>
              </BoxArea>
            </Item>
          </ItensArea>
        </Container>
      </PageContainer>
    )
  }
}

export default Bottom;