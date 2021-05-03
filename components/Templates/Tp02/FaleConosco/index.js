import React, { Component } from 'react';
import Link from 'next/link';
import { Autor, Box, BtnAction, Container, Img, PageContainer, Paragrafo, Sub_h2, ItensArea, Item, Icon, Titulo, Descricao, TracoSm } from './styled';
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
            <Sub_h2>TEREMOS PRAZER EM ATENDER SUA EMPRESA <strong>FALE CONOSCO</strong></Sub_h2>
            <TracoSm />
          </Box>
          {/* <Paragrafo>Conheça os valores do nosso <strong>escritório de contabilidade</strong></Paragrafo> */}
          <ItensArea>
            <Link href={'//wa.me/55'+this.props.infos.whatsapp} >
              <a target={"_blank"}>
                <BtnAction>
                  <Icon src='/whatsapp.png' />
                  Whatsapp
                </BtnAction>
              </a>
            </Link>
            <Link href={'/'+this.props.cliente+'/'+'quem-somos'}>
              <BtnAction>
                <Icon src='/mail.svg' />
                Enviar uma mensagem
              </BtnAction>
            </Link>
          </ItensArea>
        </Container>
      </PageContainer>
    )
  }
}

export default Valores;