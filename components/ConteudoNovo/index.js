import React, { Component } from 'react';
import Link from 'next/link';
import { Box, BtnAction, Container, Detalhes, Icone, Lk, PageContainer, Paragrafo, Sub_h2, SubTitle, ServicosArea, Servico, Titulo, Descricao, TracoSm } from './styled';
import Cookie from 'js-cookie';
import Zoom from 'react-reveal/Zoom';

class ConteudoNovo extends Component {

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
          <SubTitle dark={true}>Por que Escritórios com Site de Alta Conversão Conseguem mais Clientes?</SubTitle>
          <ServicosArea>
            <Zoom>
              <Servico color={'#00f'} > 
                <Icone src='/clientColor.svg' />
                <Titulo color={'#CCC'}>Multiplique seus Clientes</Titulo>
                <Descricao>Atraia e conquiste leads, e converta-os em cliente com um site profissional de alta conversão.</Descricao>
              </Servico>
              <Servico color={'#00f'} > 
                <Icone src='/worldColor.svg' />
                <Titulo color={'#CCC'}>Consolide a Marca do Seu Escritório</Titulo>
                <Descricao>Sua marca fica mais forte no mercado em relação à concorrência. Há inúmeras pesquisas comprovando que clientes preferem consumir serviços em escritórios aos quais enxergam mais valor e credibilidade. </Descricao>
              </Servico>
              <Servico color={'#00f'} > 
                <Icone src='/strategyColor.svg' />
                <Titulo color={'#CCC'}>Muito mais do que um Site. Defina sua Estratégia.</Titulo>
                <Descricao>Nossa equipe é especializada em desenvolver sites de alta conversão. Você define qual das estratégias o site deverá seguir.</Descricao>
              </Servico>
              <Servico color={'#00f'} > 
                <Icone src='/googleColor.svg' />
                <Titulo color={'#CCC'}>Seja Sempre Encontrado no Goole</Titulo>
                <Descricao>Certamente seu público-alvo está procurando por escritório de contabilidade na internet, mas ao invés de encontrar sua empresa, está encontrando a concorrencia que possui um site. Vamos te ajudar a mudar isso!</Descricao>
              </Servico>
              <Servico color={'#00f'} > 
                <Icone src='/listColor.svg' />
                <Titulo color={'#CCC'}>Mostre com detalhes como seu escritório pode ajudar seus clientes</Titulo>
                <Descricao>Mostre aos visitantes como seu escritório pode atendê-lo com os serviços oferecidos.</Descricao>
              </Servico>
              <Servico color={'#00f'} > 
                <Icone src='/clockColor.svg' />
                <Titulo color={'#CCC'}>Exposição da Sua Marca 24 horas por dia</Titulo>
                <Descricao>Seu escritório estará online 24 horas por dia, podendo ser encontrado através de pesquisas por potênciais clientes, independente da hora e do lugar, através de um computador ou celular, fortalecendo sua marca frente aos concorrentes.</Descricao>
              </Servico>
            </Zoom>
          </ServicosArea>
        </Container>
      </PageContainer>
    )
  }
}

export default ConteudoNovo;