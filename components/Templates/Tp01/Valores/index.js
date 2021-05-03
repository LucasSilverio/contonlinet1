import React, { Component } from 'react';
import Link from 'next/link';
import { Box, BtnAction, Container, Img, PageContainer, Paragrafo, Sub_h2, ItensArea, Item, Titulo, Descricao, TracoSm } from './styled';
import osAPI from '../../../../services/osAPI';
import Cookie from 'js-cookie';
import Zoom from 'react-reveal/Zoom';

class Valores extends Component {

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
          <Box>
            <Sub_h2 color={this.props.infos.cor}>Nossos valores</Sub_h2>
            <TracoSm color={this.props.infos.cor} />
          </Box>
          <Paragrafo>Conheça os valores do nosso <strong>escritório de contabilidade</strong></Paragrafo>
          <ItensArea>
            {this.props.valores.map((i, index) => (
              <Zoom>
                <Item key={index}>
                  <Img src={i.imagem} />
                  <Titulo color={this.props.infos.cor}>{i.titulo}</Titulo>
                  <Descricao>{i.descricao}</Descricao>
                </Item>
              </Zoom>
            ))}
          </ItensArea>
        </Container>
      </PageContainer>
    )
  }
}

export default Valores;