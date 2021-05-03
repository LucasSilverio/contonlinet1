import React, { Component } from 'react';
import Link from 'next/link';
import { Container, ContentArea, Content, Img, Item, ItemNumber, Line, LineR, LineL, PageContainer, Paragrafo, SubTitle, TopItem } from './styled';
import { FirstColor, SecondColor, ThirdColor } from '../MainStyled';
import Zoom from 'react-reveal/Zoom';

class Sobre extends Component {

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
                    <SubTitle dark={true}>Sobre</SubTitle>
                    <ContentArea>
                        <Content>
                            <Img src='/team.png' />
                        </Content>
                        <Content><Paragrafo>Mais de 10 anos de experiência em tecnologia deram origem à Contonline, uma startup criada com o foco
                            de multiplicar os resultados dos escritórios de contabilidade através da internet. Formada de pessoas apaixonadas em tecnologia, nossa equipe oferece o que há de mais moderno
                            aos nossos clientes para que esses se tornem destaque em suas cidades.</Paragrafo> </Content>
                    </ContentArea>
                </Container>
            </Zoom>
        </PageContainer>
)
  }
}

export default Sobre;