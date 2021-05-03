import React, { Component } from 'react';
import Link from 'next/link';
import { Container, ContentArea, Content, Img, Item, ItemNumber, Line, LineR, LineL, PageContainer, Paragrafo, SubTitle, TopItem } from './styled';
import { FirstColor, SecondColor, ThirdColor } from '../MainStyled';
import Zoom from 'react-reveal/Zoom';

class Etapas extends Component {

  constructor(props){
    super(props);
    this.state={
    }
  }

  render(){
    return(
        <PageContainer bgColor={ThirdColor}>
            <Zoom>
                <Container>
                    <SubTitle dark={true}>Veja como é simples montar o site do seu escritório contabil com a ContOnline</SubTitle>
                    <ContentArea>
                        <Item>
                            <TopItem>
                                <LineR />
                                <ItemNumber>1</ItemNumber>
                            </TopItem>
                            <Paragrafo>
                                Você escolhe plano, ou solicita a demonstração gratuita
                            </Paragrafo>
                        </Item>
                        <Item>
                            <TopItem>
                                <Line />
                                <ItemNumber>2</ItemNumber>
                            </TopItem>
                            <Paragrafo>
                                Você escolhe o layout preferido do seu site e preenche as informações do seu escritório
                            </Paragrafo>
                        </Item>
                        {/* <Item>
                            <TopItem>
                                <Line />
                                <ItemNumber>3</ItemNumber>
                            </TopItem>
                            <Paragrafo>
                            Realize o cadastro dos produtos, banners, promoções para deixar sua loja pronta para receber os clientes.
                            </Paragrafo>
                        </Item> */}
                        <Item>
                            <TopItem>
                                <LineL />
                                <ItemNumber end={true}><Img src='/tickW.png' /></ItemNumber>
                            </TopItem>
                            <Paragrafo>
                                Tudo pronto! Em menos de 20 minutos seu site estará no ar. E você ainda conta com um consultor para te ajudar sempre que precisar.
                            </Paragrafo>
                        </Item>
                        {/* <Content>
                            <Paragrafo dark={false}>Está na hora de trazer sua empresa para internet.</Paragrafo>
                            <Paragrafo dark={false}>Com a Cartb você cria um site e rapidamente pode começar a <strong>vender muito.</strong>.</Paragrafo>
                            <Paragrafo dark={false}>A Cartb é para você que não tem muita prática com e-commerce, ou que, até já tem um site, mas não consegue <strong>atrair clientes e gerar vendas</strong> através dele.</Paragrafo>
                            <Paragrafo dark={false}>Com a Cartb você não precisa mais se preocupar com isso, pois irá nunca mais irá ficar sem vendas. Todos os nossos clientes contam com um <strong>especialista dedicado a acompanhar o crescimento de sua loja</strong>, apontando erros e soluções para você <strong>nunca mais ficar sem vender.</strong></Paragrafo>
                        </Content> */}
                        {/* <Content>
                            <Img src='/etapas.png' />
                        </Content> */}
                    </ContentArea>
                </Container>
            </Zoom>
        </PageContainer>
)
  }
}

export default Etapas;