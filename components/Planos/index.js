import React, { Component } from 'react';
import Link from 'next/link';
import { BtnAction, Bottom, Container, ContentArea, Content, ContentFlex, Destaque, Img, Items, Item, PageContainer, PeriodosArea, Periodo, PrecoArea, PrecoLegend, PrecoLegendBottom, Preco, PrecoSm, Paragrafo, Riscado, Sm, SubTitle, SubTitleSm, Top } from './styled';
import { FirstColor, SecondColor, ThirdColor } from '../MainStyled';
import { SubTitulo } from '../Principal/styled';
import osAPI from '../../services/osAPI';

class Planos extends Component {

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
            <PageContainer bgColor={ThirdColor}>
                <Container>
                    <SubTitle dark={true}>Escolha a melhor opção para seu escritório</SubTitle>
                    {/* <SubTitleSm dark={true}>Tenha sua loja online em menos de 24 horas</SubTitleSm> */}
                    <PeriodosArea>
                        {/* <Periodo selected={this.state.periodo == 1 ? true : false} onClick={e=>this.setState({periodo:1})}>Pagamento Mensal</Periodo> */}
                    </PeriodosArea>
                    <ContentArea>
                        {values.map((i, index) => (
                            <>
                                {i.frequencia == this.state.periodo &&
                                    <Content destaque={i.destaque == 1 ? true : false}>
                                        <Destaque visible={i.destaque == 1 ? true : false}>Mais escolhido</Destaque>
                                        <Top>{i.descricao}</Top>
                                        <PrecoArea>
                                            <Riscado>{i.valor}</Riscado>
                                            <PrecoLegend>R$</PrecoLegend>
                                            <Preco>{this.state.periodo > 1 ? (parseFloat(i.valorpromocional) / parseInt(this.state.periodo)).toFixed(2) : i.valorpromocional}</Preco>
                                            <PrecoLegend>/mês</PrecoLegend>
                                        </PrecoArea>
                                        {this.state.periodo > 1 &&
                                            <PrecoArea>
                                                <PrecoLegend>Pagamento único de {'R$'+i.valorpromocional}</PrecoLegend>
                                            </PrecoArea>
                                        }
                                        <Items>
                                            {i.services.map((e, index) => (
                                                <Item tick={i.id == 1 && e.plano1 == 1 || i.id == 2 && e.plano2 == 1 || i.id == 3 && e.plano3 == 1 || i.id == 4 && e.plano4 == 1 ? true : false}>{e.descricao}</Item>
                                            ))}
                                        </Items>
                                        <Bottom>
                                            <Link href={{ pathname: '/add/'+i.id, query: { item:i.id } }} as={'/add/'+i.slug}>
                                                <BtnAction bgColor={'#F2A57C'}>COMEÇAR</BtnAction>
                                            </Link>
                                        </Bottom>
                                    </Content>
                                }
                            </>
                        ))}
                        <Content destaque={false}>
                            <Destaque visible={false}>Mais escolhido</Destaque>
                            <Top>{'Teste Grátis'}</Top>
                            <PrecoArea>
                                {/* <Riscado>{'i.valor'}</Riscado> */}
                                {/* <PrecoLegend>R$</PrecoLegend> */}
                                <PrecoSm>Todos os recursos por 7 dias</PrecoSm>
                                {/* <PrecoLegend>/7 dias</PrecoLegend> */}
                            </PrecoArea>
                            {this.state.periodo > 1 &&
                                <PrecoArea>
                                    <PrecoLegend>Pagamento único de</PrecoLegend>
                                </PrecoArea>
                            }
                            <Items>
                                {/* {i.services.map((e, index) => (
                                    <Item tick={i.id == 1 && e.plano1 == 1 || i.id == 2 && e.plano2 == 1 || i.id == 3 && e.plano3 == 1 || i.id == 4 && e.plano4 == 1 ? true : false}>{e.descricao}</Item>
                                ))} */}
                            </Items>
                            <Bottom>
                                <Link href={{ pathname: '/add/teste-gratis', query: { item:3 } }} as={'/add/teste-gratis'}>
                                    <BtnAction bgColor={'#F2A57C'}>QUERO TESTAR</BtnAction>
                                </Link>
                            </Bottom>
                        </Content>
                    </ContentArea>
                </Container>
            </PageContainer>
        </>
    )
  }
}

export default Planos;