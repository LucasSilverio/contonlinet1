import React, { Component } from 'react';
import Link from 'next/link';
import { Box, BtnAction, Container, Img, PageContainer, Paragrafo, Sub_h2, ItensArea, Item, Titulo, Descricao, Row, TracoSm } from './styled';
import osAPI from '../../../../services/osAPI';
import Cookie from 'js-cookie';
import Zoom from 'react-reveal/Zoom';

class AtencaoContato extends Component {

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
            <Sub_h2 color={this.props.infos.cor}>Receba um orçamento sem compromisso</Sub_h2>
            <TracoSm color={this.props.infos.cor}/>
          </Box>
          <ItensArea>
            <Zoom>
              <Row>
                <Item>
                  <Link href={'/'+this.props.infos.slug+'/contato'}>
                    <BtnAction bgColor={this.props.infos.cor}>Entre em Contato</BtnAction>
                  </Link>
                </Item>
              </Row>
            </Zoom>
          </ItensArea>
        </Container>
      </PageContainer>
    )
  }
}

export default AtencaoContato;