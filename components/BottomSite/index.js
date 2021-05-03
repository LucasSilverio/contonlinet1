import React, { Component } from 'react';
import Link from 'next/link';
import { Box, BtnAction, BoxArea, Container, Credito, Img, Icon, IconSocial, Lk, PageContainer, Paragrafo, Sub_h2, ItensArea, Span, Item, Titulo, Ul, Li, Descricao, TracoSm } from './styled';
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
          <ItensArea>
            <Item>
              <Titulo>Contato</Titulo>
              <Ul>
                <Li>
                  <Span><Icon src='/tel.png' /></Span>
                    <Lk href="tel:34996960659">(34)99696-0659</Lk>
                </Li>
                <Li>
                  <Span><Icon src='/email.svg' /></Span>
                    <Lk href="mailto:contato@contonline.com.br">contato@contonline.com.br</Lk>
                </Li>
              </Ul>
            </Item>
            <Item>
              {/* <Img src={'/logo.svg'} /> */}
            </Item>
            <Item>
              <BoxArea>
              <Link href={'instagram.com/contonline'}>
                <a target="_blank" rel="noreferrer">
                  <IconSocial src='/instaicon.png' />
                </a>
              </Link>
              <Link href={'facebook.com/contonline'}>
                <a target="_blank" rel="noreferrer">
                  <IconSocial src='/facebookicon.png' />
                </a>
              </Link>
              </BoxArea>
              <BoxArea>
                <Credito>Contonline - Todos os Direitos Reservados - 2021</Credito>
              </BoxArea>
            </Item>
          </ItensArea>
        </Container>
      </PageContainer>
    )
  }
}

export default BottomSite;