import React, { Component } from 'react';
import Link from 'next/link';
import { Box, BtnAction, Container, Img, PageContainer, Paragrafo, Sub_h2, ItensArea, Item, Titulo, Descricao, Row, TracoSm } from './styled';
import osAPI from '../../../../services/osAPI';
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
    console.log(this.props.infos)
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
        </Container>
      </PageContainer>
    )
  }
}

export default Contador;