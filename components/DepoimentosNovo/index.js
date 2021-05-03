import React, { Component } from 'react';
import Link from 'next/link';
import { Box, BtnAction, BtnActionMob, Container, Empresa, Detalhes, Icone, Lk, PageContainer, Paragrafo, Sub_h2, ServicosArea, Servico,SubTitle, Titulo, Descricao, TracoSm } from './styled';
import Cookie from 'js-cookie';
import Zoom from 'react-reveal/Zoom';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';   

class DepoimentosNovo extends Component {

  constructor(props){
    super(props);
    this.state={
      banners:[]
    }
  } 

  componentDidMount(){
  }
  
  sBottom(e){
    scroll.scrollTo(e);
  }

  render(){
    return(
      <PageContainer>
        <Container>
          <SubTitle dark={true}>Dezenas de Escritórios impactados logo nos primeiros meses</SubTitle>
          <ServicosArea>
            <Zoom>
              <Servico color={'#00f'} > 
                <Icone src='/aspas.svg' />
                <Descricao>"Antes nosso escritório tinha um site com outra empresa mas que nunca deu resultado. Depois que iniciei essa parceria com o Lucas da Contonline, pude ver a diferença. Hoje a grande maioria dos clientes que entram em contato via WhatsApp devido ao nosso site acabam fechando negócio."</Descricao>
                <Empresa>Global Empresarial</Empresa>
              </Servico>
              <Servico color={'#00f'} > 
                <Icone src='/aspas.svg' />
                <Descricao>"Nossa experiência com a Contonline tem sido fantastica. Suporte e atendimento acima da média. Temos essa parceria com o Lucas há 6 meses e os resultados tem sido ótimos." </Descricao>
                <Empresa>TN Empresarial </Empresa>
              </Servico>
              <Servico color={'#00f'} > 
                <Icone src='/aspas.svg' />
                <Descricao>Gosto muito do atendimento da equipe, e principalmente do Lucas, que mantém um contato direto conosco. Estamos muito satisfeitos com os resultados!!</Descricao>
                <Empresa>Confiar Contabilidade </Empresa>
              </Servico>
              <Servico color={'#00f'} > 
                <Icone src='/aspas.svg' />
                <Descricao>Antes eu achava que seria algo complicado, mas o pessoal da Contonline realmente facilita muito o processo! Em poucos minutos eu criei o site do escritório e sempre que precisamos de suporte, fomos muito bem atendidos! Nota 1000!</Descricao>
                <Empresa>Gest Contabilidade e Consultoria </Empresa>
              </Servico>
              <Servico color={'#00f'} > 
                <Icone src='/aspas.svg' />
                <Descricao>"Antes de conhecer o Lucas e a Contonline, eu estava muito receiosa pois tinha vindo de uma experiência ruim com outra empresa. Apesar disso, em pouco tempo fui surpreendida pela excelencia no atendimento e pelos resultados obtidos. Espero continuar essa parceria por muitoo tempo!"</Descricao>
                <Empresa>Contabil Mais</Empresa>
              </Servico>
              <Servico color={'#00f'} > 
                <Icone src='/aspas.svg' />
                <Descricao>"A equipe da Contonline é especialmente qualificada e sociável. Estamos muito satisfeitos com nossa relação profissional e pessoal".</Descricao>
                <Empresa>Ideal Contábil</Empresa>
              </Servico>
            </Zoom>
          </ServicosArea>
          <BtnAction onClick={e=>this.sBottom(550)}>Solicite agora um TESTE de 7 dias GRÁTIS <small> *não precisa informar cartão de crédito</small></BtnAction>
          <BtnActionMob onClick={e=>this.sBottom(800)}>Solicite agora um TESTE de 7 dias GRÁTIS <small> *não precisa informar cartão de crédito</small></BtnActionMob>
        </Container>
      </PageContainer>
    )
  }
}

export default DepoimentosNovo;