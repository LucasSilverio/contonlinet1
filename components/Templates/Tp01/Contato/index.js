import React, { Component } from 'react';
import Link from 'next/link';
import { Box, BtnAction, BoxIpt, Container, Label, LoadArea, Ipt, PageContainer, Paragrafo, Row, Sub_h2, TextArea, ServicosArea, Servico, Titulo, Descricao, TracoSm } from './styled';
import osAPI from '../../../../services/osAPI';
import Cookie from 'js-cookie';
import NumberFormat from 'react-number-format';
import ecommerceAPI from '../../../../services/ecommerceAPI'
import Loader from 'react-loader-spinner';

class Contato extends Component {

  constructor(props){
    super(props);
    this.state={
      banners:[],
      nome:'',
      email:'',
      empresa:'',
      telefone:'',
      mensagem:'',
      loading:false,
      concluido:false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  } 

  componentDidMount(){
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({loading:true})
    if(this.state.nome !== '' && this.state.email !== '' && this.state.telefone != '' && this.state.mensagem != ''){
        fetch(ecommerceAPI.BASE_URL_API+'register/newLead', {
            method:'POST',
            body:JSON.stringify({
                nome:this.state.nome,
                email:this.state.email,
                telefone:this.state.telefone,
                mensagem:this.state.mensagem,
                empresa:this.state.empresa
            })
        })
        .then(r=>r.json())
        .then(json=>{
            // if(json.success){
            //     Router.push('/primeiracompra')
            // }
            this.setState({loading:false})
            this.setState({concluido:true})
        })
    }
  }

  render(){
    return(
      <PageContainer>
        <Container>
          <Box>
            <Sub_h2>Preencha suas informações</Sub_h2>
            <TracoSm />
          </Box>
          <Paragrafo>Entraremos em contato o mais breve possível</Paragrafo>
          <ServicosArea>
            <form onSubmit={this.handleSubmit}>
              <Row>
                <BoxIpt>
                  <Label>Nome</Label>
                  <Ipt type='text' required value={this.state.nome} onChange={e=>this.setState({nome:e.target.value})} />
                </BoxIpt>
                <BoxIpt>
                  <Label>E-mail</Label>
                  <Ipt type='email' required value={this.state.email} onChange={e=>this.setState({email:e.target.value})} />
                </BoxIpt>
              </Row>
              <Row>
                <BoxIpt>
                  <Label>Empresa</Label>
                  <Ipt type='text' value={this.state.empresa} onChange={e=>this.setState({empresa:e.target.value})} />
                </BoxIpt>
                <BoxIpt>
                  <Label>Telefone</Label>
                  <NumberFormat customInput={Ipt} value={this.state.telefone} required onChange={e=>this.setState({telefone:e.target.value})} required format="(##)#####-####" placeholder='(00)00000-0000'/> 
                </BoxIpt>
              </Row>
              <Row>
                <BoxIpt>
                  <Label>Mensagem</Label>
                  <TextArea value={this.state.mensagem} onChange={e=>this.setState({mensagem:e.target.value})} />
                </BoxIpt>
              </Row>
              {!this.state.loading && !this.state.concluido &&
                <BtnAction>ENVIAR</BtnAction>
              }
              {!this.state.loading && this.state.concluido &&
                <>Mensagem enviada com sucesso! Entraremos em contato com você o mais breve possível.</>
              }
              {this.state.loading &&
                <LoadArea>
                    <Loader
                        type="TailSpin"
                        color="#0A3A31"
                        height={50}
                        width={50}
                    />
                </LoadArea>
                }
              </form>
            
          </ServicosArea>
          
        </Container>
      </PageContainer>
    )
  }
}

export default Contato;