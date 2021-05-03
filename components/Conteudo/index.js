import React, { Component } from 'react';
import Link from 'next/link';
import { BtnAction, Container, ContentArea, Content, ContentFlex, ContentFlexMob, Img, Line, PageContainer, Paragrafo, ParagrafoTick, Tick, SubTitle, SubTitulo } from './styled';
import { FirstColor, SecondColor, ThirdColor } from '../MainStyled';
import Zoom from 'react-reveal/Zoom';

class Conteudo extends Component {

  constructor(props){
    super(props);
    this.state={
    }
  }

  render(){
    return(
        <> 
            <PageContainer bgColor={SecondColor}>
                <Container>
                    <Zoom>
                        <SubTitle color={SecondColor} dark={false}>Gere mais oportunidades de negócio tendo um site profissional na internet</SubTitle>
                        <ContentArea>
                            <Content>
                                <Paragrafo dark={false}>Está na hora de trazer sua empresa para internet.</Paragrafo>
                                <Paragrafo dark={false}>Sites profissionais muitas vezes são complexos de serem desenvolvidos e geralmente demandam semanas para irem ao ar. Com a Contonline você cria um site profissional rapidamente para seu escritório de contabilidade de forma simples e descomplicada em menos de 20 minutos. E ainda conta com o suporte de toda nossa equipe sempre a disposição.</Paragrafo>
                            </Content>
                            <Content>
                                <Img src='/internet.svg' />
                            </Content> 
                        </ContentArea>
                    </Zoom>                    
                </Container>
            </PageContainer>
            <PageContainer bgColor={ThirdColor}>
                <Container>
                    <Zoom>
                        <SubTitle dark={true}>Como funciona a Contonline:</SubTitle>
                        <ContentArea>
                            <Content>
                                {/* <Paragrafo dark={true}>Através do nosso painel, você escolhe o layout para seu site profissinal que mais lhe agrade. Em seguida é só inserir as informações como, logomarca, nome, endereço, serviços oferecidos, depoimentos de clientes <strong>alta taxa de conversão.</strong></Paragrafo> */}
                                <Paragrafo dark={true}>Nossa plataforma oferece os recursos para você criar o site do seu escritório de forma simples e rápida.</Paragrafo>
                                <Paragrafo dark={true}>Em poucos minutos você tem um site profissional e otimizado para as pesquisas do Google</Paragrafo>
                                {/* <Paragrafo dark={true}>O foco da nossa equipe é fazer você vender utilizando estratégias e marketing digital, como SEO, tráfego pago, inbound entre outros.</Paragrafo> */}
                            </Content>
                            <ContentFlex>
                                <Img src='/comofunciona.svg' />
                            </ContentFlex>
                        </ContentArea>
                    </Zoom>
                </Container>
            </PageContainer>
            <Line />
            <PageContainer bgColor={ThirdColor}>
                <Container>
                    <Zoom>
                        <SubTitle dark={true}>Vantagens em possuir um site profissional</SubTitle>
                        <ContentArea>
                            <ContentFlexMob>
                                <Img src='/fortaleca.svg' />
                            </ContentFlexMob>
                            <Content>
                                <SubTitulo>Fortaleça a marca da sua empresa</SubTitulo>
                                <ParagrafoTick dark={true}>Existem vários caminhos e pontos a serem tratados quando se fala em ter uma marca forte no mercado. Um desses caminhos é ter um site profissional. Sua marca fica mais forte no mercado junto a concorrência já que clientes preferem consumir em empresas as quais enxergam mais valor e credibilidade. </ParagrafoTick>
                            </Content>
                            <ContentFlex>
                                <Img src='/fortaleca.svg' />
                            </ContentFlex>
                        </ContentArea>
                    </Zoom>
                    <Zoom>
                        <ContentArea>
                            <ContentFlex>
                                <Img src='/busca.svg' />
                            </ContentFlex>
                            <ContentFlexMob>
                                <Img src='/busca.svg' />
                            </ContentFlexMob>
                            <Content>
                                <SubTitulo>Seu escritório passa a ser encontrado nas pesquisas do Google</SubTitulo>
                                    <ParagrafoTick dark={true}>O Google é maior buscador do mundo e é responsável por milhões de pesquisas todos os dias. Certamente seu público-alvo está procurando por escritório de contabilidade na internet, mas ao invés de encontrar sua empresa, está encontrando a concorrencia que possui um site.</ParagrafoTick>
                            </Content>
                        </ContentArea>
                    </Zoom>
                    <Zoom>
                        <ContentArea>
                            <ContentFlexMob>
                                <Img src='/detalhes.svg' />
                            </ContentFlexMob>
                            <Content>
                                <SubTitulo>Mostre com detalhes os serviços que seu escritório oferece</SubTitulo>
                                <ParagrafoTick dark={true}>Ao acessar seu site contábil, as pessoas vão saber com detalhes os serviços oferecidos. Para uma pessoa que está procurando um escritório que atenda MEI, por exemplo, teria uma probabilidade muito alta de encontrar seu site e virar um novo cliente.</ParagrafoTick>
                            </Content>
                            <ContentFlex>
                                <Img src='/detalhes.svg' />
                            </ContentFlex>
                        </ContentArea>
                    </Zoom>
                    <Zoom>
                        <ContentArea>
                            <ContentFlex>
                                <Img src='/noite.svg' />
                            </ContentFlex>
                            <ContentFlexMob>
                                <Img src='/noite.svg' />
                            </ContentFlexMob>
                            <Content>
                                <SubTitulo>Exposição da sua marca 24 horas por dia 7 dias por semana</SubTitulo>
                                    <ParagrafoTick dark={true}>Seu escritório estará online 24 horas por dia, podendo ser encontrado através de pesquisas por potênciais clientes, independente da hora e do lugar, através de um computador ou celular, fortalecendo sua marca frente aos concorrentes.</ParagrafoTick>
                            </Content>
                        </ContentArea>
                    </Zoom>
                </Container>
            </PageContainer>
        </>
    )
  }
}

export default Conteudo;