import React, { Component } from 'react';
import Link from 'next/link';
import { Box, BtnAction, Container, Lk, PageContainer, Paragrafo, Sub_h2, ServicosArea, Servico, Titulo, Descricao, TracoSm } from './styled';
import osAPI from '../../../../services/osAPI';
import Cookie from 'js-cookie';
import Zoom from 'react-reveal/Zoom';

class Servicos extends Component {

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
          <Zoom>
            <Box>
              <Sub_h2 color={this.props.infos.cor}>Nossos serviços</Sub_h2>
              <TracoSm color={this.props.infos.cor}/>
            </Box>
          </Zoom> 
          <Paragrafo>Escritório de Contabilidade em {this.props.infos.cidade+' - '+this.props.infos.estado}</Paragrafo>
          <ServicosArea>
            {this.props.servicos.map((i, index) => (
              <Zoom>
                <Servico key={index} bgColor={this.props.infos.cor}>
                  <Titulo color={this.props.infos.cor}>{i.titulo}</Titulo>
                  <Descricao>{i.descricao}</Descricao>
                </Servico>
              </Zoom>
            ))}
          </ServicosArea>
          {this.props.contato &&
            <Link href='/contato' >
              <Lk>ENTRAR EM CONTATO</Lk>
            </Link>
          }
          {!this.props.contato && 
            <Link href={'/'+this.props.infos.slug+'/contato'}>
              <a><BtnAction bgColor={this.props.infos.cor}>SABER MAIS SOBRE NOSSOS SERVIÇOS</BtnAction></a>
            </Link>
          }
        </Container>
      </PageContainer>
    )
  }
}

export default Servicos;