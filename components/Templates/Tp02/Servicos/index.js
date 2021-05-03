import React, { Component } from 'react';
import Link from 'next/link';
import { Box, BtnAction, Container, Detalhes, Lk, PageContainer, Paragrafo, Sub_h2, ServicosArea, Servico, Titulo, Descricao, TracoSm } from './styled';
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
              <Sub_h2>Nossos serviços</Sub_h2>
              <TracoSm />
            </Box>
          </Zoom>
          <Paragrafo>Escritório de Contabilidade em {this.props.infos.cidade+' - '+this.props.infos.estado}</Paragrafo>
          <ServicosArea>
            {this.props.servicos.map((i, index) => (
              <Zoom>
                <Link href={'/'+this.props.cliente+'/contato'}>
                  <a>
                    <Servico color={this.props.infos.cor} key={index}> 
                      <Titulo color={this.props.infos.cor}>{i.titulo}</Titulo>
                      <Descricao>{i.descricao}</Descricao>
                      <Detalhes color={this.props.infos.cor}>Mais Informações</Detalhes>
                    </Servico>
                  </a>
                </Link>
              </Zoom>
            ))}
          </ServicosArea>
          {this.props.contato &&
            <Link href={'/'+this.props.cliente+'/contato'}>
              <Lk>ENTRAR EM CONTATO</Lk>
            </Link>
          }
          {!this.props.contato && 
            <Link href={'/'+this.props.cliente+'/contato'}>
              <a><BtnAction bgColor={this.props.infos.cor}>SABER MAIS SOBRE NOSSOS SERVIÇOS</BtnAction></a>
            </Link>
          }
        </Container>
      </PageContainer>
    )
  }
}

export default Servicos;