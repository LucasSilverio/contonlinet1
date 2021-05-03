import React, { Component } from 'react';
import Link from 'next/link';
import { BtnAction, BoxItem, Column, Container, Descricao, Img, Item, Icone, ItemDesc, ItemTop, ItemColumnIcon, ItemColumnDesc, PageContainer, ServicosArea, SubTitle,  } from './styled';
import Cookie from 'js-cookie';
import Zoom from 'react-reveal/Zoom';

class Vantagens extends Component {

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
          <SubTitle dark={true}>O que você ganha quando cria seu site com a Contonline</SubTitle>
          <ServicosArea>
            <Zoom>
              <Column>
                <Item>Tempo de Mercado</Item>
              </Column>
              <Column>
                <ItemDesc>
                  <ItemTop color='#57F2EB'>Contonline</ItemTop>
                  <BoxItem>
                    <ItemColumnIcon>
                      <Icone src='/positive.svg' />                      
                    </ItemColumnIcon>
                    <ItemColumnDesc>Nossa equipe atua a quase 10 anos com desenvolvimento de aplicações de alta performance.</ItemColumnDesc>
                  </BoxItem>
                </ItemDesc>
              </Column>
              <Column>
                <ItemDesc>
                  <ItemTop color='#F25757'>Outras empresas</ItemTop>
                  <BoxItem>
                    <ItemColumnIcon>
                      <Icone src='/negative.svg' />
                    </ItemColumnIcon>
                    <ItemColumnDesc>Algumas empresas podem ter pouca experiência com desenvolvimento, além de não atuarem com sites focados em alta conversão.</ItemColumnDesc>
                  </BoxItem>
                </ItemDesc>
              </Column>
            </Zoom>
          </ServicosArea>
          <ServicosArea>
            <Zoom>
              <Column>
                <Item>Suporte Dedicado</Item>
              </Column>
              <Column>
                <ItemDesc>
                  <ItemTop color='#57F2EB'>Contonline</ItemTop>
                  <BoxItem>
                    <ItemColumnIcon>
                      <Icone src='/positive.svg' />                      
                    </ItemColumnIcon>
                    <ItemColumnDesc>Na Contonline, atendemos nossos clientes de forma rápida, através de e-mail, chat e Whatsapp sempre que precisar.</ItemColumnDesc>
                  </BoxItem>
                </ItemDesc>
              </Column>
              <Column>
                <ItemDesc>
                  <ItemTop color='#F25757'>Outras empresas</ItemTop>
                  <BoxItem>
                    <ItemColumnIcon>
                      <Icone src='/negative.svg' />
                    </ItemColumnIcon>
                    <ItemColumnDesc>Algumas empresas oferecem suporte apenas via e-mail, com elevado tempo de espera.</ItemColumnDesc>
                  </BoxItem>
                </ItemDesc>
              </Column>
            </Zoom>
          </ServicosArea>
          <ServicosArea>
            <Zoom>
              <Column>
                <Item>Processo Simplificado</Item>
              </Column>
              <Column>
                <ItemDesc>
                  <ItemTop color='#57F2EB'>Contonline</ItemTop>
                  <BoxItem>
                    <ItemColumnIcon>
                      <Icone src='/positive.svg' />                      
                    </ItemColumnIcon>
                    <ItemColumnDesc>Na Contonline somos espacialisatas em sites de alta conversão para Escritórios Contábeis. Por isso desenvolvemos um método ágil onde você pode ter seu site disponível no mesmo dia.</ItemColumnDesc>
                  </BoxItem>
                </ItemDesc>
              </Column>
              <Column>
                <ItemDesc>
                  <ItemTop color='#F25757'>Outras empresas</ItemTop>
                  <BoxItem>
                    <ItemColumnIcon>
                      <Icone src='/negative.svg' />
                    </ItemColumnIcon>
                    <ItemColumnDesc>Algumas empresas podem exigir semanas para entregar um projeto, que na maioria das vezes não terá o resultado esperado.</ItemColumnDesc>
                  </BoxItem>
                </ItemDesc>
              </Column>
            </Zoom>
          </ServicosArea>
          <ServicosArea>
            <Zoom>
              <Column>
                <Item>Preços</Item>
              </Column>
              <Column>
                <ItemDesc>
                  <ItemTop color='#57F2EB'>Contonline</ItemTop>
                  <BoxItem>
                    <ItemColumnIcon>
                      <Icone src='/positive.svg' />                      
                    </ItemColumnIcon>
                    <ItemColumnDesc>A Contonline oferece um dos melhores custo benefício para Escritórios de Contabilidade.</ItemColumnDesc>
                  </BoxItem>
                </ItemDesc>
              </Column>
              <Column>
                <ItemDesc>
                  <ItemTop color='#F25757'>Outras empresas</ItemTop>
                  <BoxItem>
                    <ItemColumnIcon>
                      <Icone src='/negative.svg' />
                    </ItemColumnIcon>
                    <ItemColumnDesc>Algumas empresas podem cobrar um valor alto para desenvolver seu site. Mesmo sem contar com o suporte dedicado.</ItemColumnDesc>
                  </BoxItem>
                </ItemDesc>
              </Column>
            </Zoom>
          </ServicosArea>
          {/* <BtnAction onClick={this.sBottom}>Receba o contato de um consultor pelo Whatsapp</BtnAction> */}
        </Container>
      </PageContainer>
    )
  }
}

export default Vantagens;