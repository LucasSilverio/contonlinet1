import React, { Component } from 'react';
import Link from 'next/link';
import { AvaliacaoImg, BtnAction, Container, ContentArea, Content, ContentStars, ContentBox, ContentFlex, ContentFlexMob, Img, PageContainer, Paragrafo, ParagrafoSm, SubTitle, Star } from './styled';
import { FirstColor, SecondColor, ThirdColor } from '../MainStyled';
import { SubTitulo } from '../Principal/styled';

class Depoimentos extends Component {

  constructor(props){
    super(props);
    this.state={
        nota:5
    }
  }

  render(){
    return(
        <>
            <PageContainer bgColor={SecondColor}>
                <Container>
                    <SubTitle dark={false}>Junte-se a dezenas de empreendedoras de sucesso e crie sua loja virtual com a Cartb</SubTitle>
                    <AvaliacaoImg src='/estrelas.png' />
                    <ContentArea>
                        <ContentFlex>
                            <Img src='/cleide.png' />
                        </ContentFlex>
                        <ContentFlexMob>
                            <Img src='/cleide.png' />
                        </ContentFlexMob>
                        <ContentBox>
                            <Content>
                                <Paragrafo dark={false} right={false}>Estou muito contente com o resultado da minha loja. Em poucos dias já estava tudo funcionando e o retorno foi rápido do que eu imaginava.</Paragrafo>
                            </Content>
                            <ContentStars left={true}>
                                <Star src='/estrelaOn.svg' />
                                <Star src='/estrelaOn.svg' />
                                <Star src='/estrelaOn.svg' />
                                <Star src='/estrelaOn.svg' />
                                <Star src='/estrelaOn.svg' />
                            </ContentStars>
                            <ContentStars left={true} column={true}>
                                <ParagrafoSm left={true}><strong>Cleide</strong></ParagrafoSm>
                                <ParagrafoSm left={true}>Semijoias</ParagrafoSm>
                            </ContentStars>
                        </ContentBox>
                    </ContentArea>
                    <ContentArea>
                        <ContentFlexMob>
                            <Img src='/valeria.png' />
                        </ContentFlexMob>
                        <ContentBox>
                            <Content>
                                <Paragrafo dark={false} right={true}>Antes de conhecer a Beuty E-commerce eu já tinha me decepcionado algumas vezes com vendas online, pois eu tinha o site mas realizava poucas vendas e não sabia como fazer para vender mais. Depois que migrei para a Beuty , meu site de roupas online ficou lindo e eu consigo vender todos os dias.</Paragrafo>
                            </Content>
                            <ContentStars left={false}>
                                <Star src='/estrelaOn.svg' />
                                <Star src='/estrelaOn.svg' />
                                <Star src='/estrelaOn.svg' />
                                <Star src='/estrelaOn.svg' />
                                <Star src='/estrelaOn.svg' />
                            </ContentStars>
                            <ContentStars left={false} column={true}>
                                <ParagrafoSm left={false}><strong>Veléria</strong></ParagrafoSm>
                                <ParagrafoSm left={false}>Roupas Infantis</ParagrafoSm>
                            </ContentStars>
                        </ContentBox>
                        <ContentFlex>
                            <Img src='/valeria.png' />
                        </ContentFlex>
                    </ContentArea>
                    <ContentArea>
                        <ContentFlex>
                            <Img src='/leticia.png' />
                        </ContentFlex>
                        <ContentFlexMob>
                            <Img src='/leticia.png' />
                        </ContentFlexMob>
                        <ContentBox>
                            <Content>
                                <Paragrafo dark={false} right={false}>A melhor escolha que fiz foi contratar a plataforma da Beuty E-commerce. Com o acompanhamento da equipe, em poucos meses minha loja online estava faturando o dobro da loja física.</Paragrafo>
                            </Content>
                            <ContentStars left={true}>
                                <Star src='/estrelaOn.svg' />
                                <Star src='/estrelaOn.svg' />
                                <Star src='/estrelaOn.svg' />
                                <Star src='/estrelaOn.svg' />
                                <Star src='/estrelaOn.svg' />
                            </ContentStars>
                            <ContentStars left={true} column={true}>
                                <ParagrafoSm left={true}><strong>Letícia</strong></ParagrafoSm>
                                <ParagrafoSm left={true}>Vestuário Feminino</ParagrafoSm>
                            </ContentStars>
                        </ContentBox>
                    </ContentArea>
                </Container>
            </PageContainer>
        </>
    )
  }
}

export default Depoimentos;