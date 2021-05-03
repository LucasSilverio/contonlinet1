import React, { Component } from 'react';
import Link from 'next/link';
import { Area, BtnAction, Bottom, Container, ContentArea, Content, ContentFlex, Destaque, Img, Items, Item, PageContainer, PeriodosArea, Periodo, PrecoArea, PrecoLegend, PrecoLegendBottom, Preco, PrecoSm, Paragrafo, Riscado, Sm, SubTitle, SubTitleSm, Top } from './styled';
import { FirstColor, SecondColor, ThirdColor } from '../MainStyled';
import { SubTitulo } from '../Principal/styled';
import LayoutComponent from '../LayoutComponent';
import osAPI from '../../services/osAPI';

class Modelos extends Component {

  constructor(props){
    super(props);
    this.state={
        planos:[],
        periodo:1
    }
  }

  componentDidMount(){
      osAPI.getPlanos()
      .then(r=>r.json())
      .then(json=>{
        this.setState({planos:json.data})
      })
  }

  render(){
    let obj = this.state.planos;
    let values = Object.keys(obj).map(function(e) {
        return obj[e]
    })
    return(
        <>
            <PageContainer bgColor={'#FFF'}>
                <Container>
                    <SubTitle dark={true}>Modelos</SubTitle>
                    {/* <SubTitleSm dark={true}>Escolha um entre nossos modelos de site personalizaveis.</SubTitleSm> */}
                    <Area>
                        <SubTitleSm dark={true}>Escolha um entre nossos modelos personalizaveis. </SubTitleSm>
                        <SubTitleSm dark={true}>Nossos templates são desenvolvidos com foco nos mecanismos de busca, proporcionando mais resultados e aumento no número de leads e clientes para nossos clientes.</SubTitleSm>
                    </Area>
                    <PeriodosArea>
                        {/* <Periodo selected={this.state.periodo == 1 ? true : false} onClick={e=>this.setState({periodo:1})}>Pagamento Mensal</Periodo> */}
                    </PeriodosArea>
                    <ContentArea>
                        <LayoutComponent/>
                        {/* <Content destaque={false}>
                        </Content> */}
                    </ContentArea>
                </Container>
            </PageContainer>
        </>
    )
  }
}

export default Modelos;