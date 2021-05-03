import React, { Component } from 'react';
import Link from 'next/link';
import { Autor, Box, BtnAction, Container, Img, PageContainer, Paragrafo, Sub_h2, ItensArea, Item, Titulo, Descricao, TracoSm } from './styled';
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
            <Sub_h2 color={this.props.infos.cor}>O QUE OS CLIENTES DIZEM SOBRE NOSSO <strong>ESCRITÓRIO DE CONTABILIDADE</strong></Sub_h2>
            <TracoSm color={this.props.infos.cor}/>
          </Box>
          <Paragrafo>Conheça os valores do nosso <strong>escritório de contabilidade</strong></Paragrafo>
          <ItensArea>
            {this.props.depoimentos.map((i, index) => (
              <Zoom>
                <Item key={index}>
                  <Img src={i.imagem} />
                  <Descricao>{i.depoimento}</Descricao>
                  <Autor>{i.nome+' - '+i.empresa}</Autor>
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