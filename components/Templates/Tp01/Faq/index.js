import React, { Component } from 'react';
import Link from 'next/link';
import { Box, BtnAction, Container, Img, PageContainer, Paragrafo, Sub_h2, ItensArea, Item, Titulo, Descricao, Row, TracoSm } from './styled';
import osAPI from '../../../../services/osAPI';
import Cookie from 'js-cookie';
import Zoom from 'react-reveal/Zoom';

class Faq extends Component {

  constructor(props){
    super(props);
    this.state={
      banners:[],
      faqVisible:0
    }
  } 

  componentDidMount(){
  }

  render(){
    return(
      <PageContainer>
        <Container>
          <Box>
            <Sub_h2>Dúvidas Frequentes</Sub_h2>
            <TracoSm />
          </Box>
          <ItensArea>
            {this.props.faq.map((i, index) => (
              <Zoom>
                <Row key={index}>
                  <Item onMouseOver={e=>this.setState({faqVisible:index+1})}>
                    <Titulo>{i.titulo}</Titulo>
                    <Descricao visible={this.state.faqVisible == index+1 ? true : false}>{i.descricao}</Descricao>
                  </Item>
                </Row>
              </Zoom>
            ))}
          </ItensArea>
        </Container>
      </PageContainer>
    )
  }
}

export default Faq;