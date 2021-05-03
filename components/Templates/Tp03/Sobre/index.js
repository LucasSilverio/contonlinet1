import React, { Component } from 'react';
import Link from 'next/link';
import { Box, BtnAction, Container, Img, PageContainer, Paragrafo, Sub_h2, ItensArea, Item, Titulo, Descricao, Row, TracoSm } from './styled';
import osAPI from '../../../../services/osAPI';
import Cookie from 'js-cookie';
import Zoom from 'react-reveal/Zoom';

class Sobre extends Component {

  constructor(props){
    super(props);
    this.state={
    }
    
  } 

  componentDidMount(){
  }

  render(){
    return(
      <PageContainer>
        <Container>
          <Box>
            <Sub_h2>sOBRE NÓS</Sub_h2>
            <TracoSm />
          </Box>
          <ItensArea>
            <Zoom>
              <Row>
                <Item>
                  <Descricao>{this.props.infos.sobre}</Descricao>
                  <Link href={'/'+this.props.cliente+'/quem-somos'}>
                    <a>
                      <BtnAction bgColor={this.props.infos.cor}>Detalhes</BtnAction>
                    </a>
                  </Link>
                </Item>
              </Row>
            </Zoom>
          </ItensArea>
        </Container>
      </PageContainer>
    )
  }
}

export default Sobre;