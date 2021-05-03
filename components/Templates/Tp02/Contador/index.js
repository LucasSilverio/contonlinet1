import React, { Component } from 'react';
import Link from 'next/link';
import { Autor, Box, BtnAction, BoxContainer, Container, ContainerSlider, Desk, ElementoArea, Mob, MensagemArea, Img, PageContainer, Paragrafo, Sub_h2, ItensArea, Item, Titulo, Descricao, Row, TracoSm } from './styled';
import osAPI from '../../../../services/osAPI';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import Cookie from 'js-cookie';
import Zoom from 'react-reveal/Zoom';

class Contador extends Component {

  constructor(props){
    super(props);
    this.state={
      clientes:0,
      anos:0,
      cidades:0,
    }
    this.change = this.change.bind(this);
    this.process = this.process.bind(this);
  } 

  componentDidMount(){
    this.process();
    this.setState({endclientes:this.props.infos.numerosclientes})
    console.log(this.props.depoimentos)
  }

  change(time, value){
    this.setState({atual:value});
    // setTimeout(function() {
    //   this.setState({atual:value});
    // }.bind(this), time*value)
  }

  process(){
    for(let i = 0;i <= this.props.infos.numerosclientes;i++){      
      
      (function (i){
        setTimeout(function() {
          this.setState({atual:i});
        }.bind(this), (i/15000)*i)
      }.bind(this))(i);
      
    }

    for(let j = 0;j <= this.props.infos.cidadesatendidas;j++){      
      
      (function (j){
        setTimeout(function() {
          this.setState({cidades:j});
        }.bind(this), (j/15000)*j)
      }.bind(this))(j);
      
    }

    for(let k = 0;k <= this.props.infos.anosexperiencia;k++){     
      
      (function (k){
        setTimeout(function() {
          this.setState({anos:k});
        }.bind(this), (k/15000)*k)
      }.bind(this))(k);
      
    }
  }

  render(){
    return(
      <PageContainer>
        <Container> 
          <BoxContainer>
            <Box>
              <Sub_h2>Nossos números</Sub_h2>
              <TracoSm />
            </Box>
            <ItensArea>
              <Zoom>
                <Row>
                  <Item>
                    <Titulo>{'+'+this.state.atual}</Titulo>
                    <Descricao>Clientes Ativos</Descricao>
                  </Item>
                  <Item>
                    <Titulo>{'+'+this.state.cidades}</Titulo>
                    <Descricao>Cidades Atendidas</Descricao>
                  </Item>
                  <Item>
                    <Titulo>{'+'+this.state.anos}</Titulo>
                    <Descricao>Anos de experiência</Descricao>
                  </Item>
                </Row>
              </Zoom>
            </ItensArea>
          </BoxContainer>
          <BoxContainer>
            <Box>
              <Sub_h2>Opnião dos clientes</Sub_h2>
              <TracoSm />
            </Box>
            <ItensArea>
              <Zoom>
                <Row>
                  <Desk>
                    <CarouselProvider
                      naturalSlideWidth={0}
                      naturalSlideHeight={70}
                      totalSlides={this.props.depoimentos.length + 1}
                      visibleSlides={1}
                      step={1}
                      infinite={true}
                    > 
                      <ContainerSlider>
                        <Slider className='slider-area'>
                          {this.props.depoimentos.map((i, index) => (
                            <Slide index={index} className='slide-item'>
                              <ElementoArea> 
                                  <MensagemArea>
                                      <strong>"</strong>{i.depoimento}<strong>"</strong>
                                  </MensagemArea>
                                  <Autor>
                                    {i.nome+' - '+i.empresa}
                                    <Img src={i.imagem} />
                                  </Autor>
                              </ElementoArea>
                            </Slide>
                          ))}
                        </Slider>
                        <ButtonBack className='buttonBack'><img src='/prev.svg'/></ButtonBack>
                        <ButtonNext className='buttonNext'><img src='/next.svg'/></ButtonNext>
                      </ContainerSlider>
                    </CarouselProvider>
                  </Desk>
                  <Mob>
                    <CarouselProvider
                      naturalSlideWidth={0}
                      naturalSlideHeight={70}
                      totalSlides={this.props.depoimentos.length + 1}
                      visibleSlides={1}
                      step={1}
                      infinite={true}
                    > 
                      <ContainerSlider>
                        <Slider className='slider-area'>
                          {this.props.depoimentos.map((i, index) => (
                            <Slide index={index} className='slide-item'>
                              <ElementoArea> 
                                  <MensagemArea>
                                      <strong>"</strong>{i.depoimento}<strong>"</strong>
                                  </MensagemArea>
                                  <Autor>
                                    {i.nome+' - '+i.empresa}
                                    <Img src={i.imagem} />
                                  </Autor>
                              </ElementoArea>
                            </Slide>
                          ))}
                        </Slider>
                        <ButtonBack className='buttonBack'><img src='/prev.svg'/></ButtonBack>
                        <ButtonNext className='buttonNext'><img src='/next.svg'/></ButtonNext>
                      </ContainerSlider>
                    </CarouselProvider>
                  </Mob>
                </Row>
              </Zoom>
            </ItensArea>
          </BoxContainer>
        </Container>
      </PageContainer>
    )
  }
}

export default Contador;