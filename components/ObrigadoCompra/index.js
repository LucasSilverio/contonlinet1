import React, { Component } from 'react';
import Link from 'next/link';
import Loader from 'react-loader-spinner';
import {  Container, ContentArea, PageContainer,  SubTitle, SubTitleSm } from './styled';
import { FirstColor, SecondColor, ThirdColor } from '../MainStyled';
import { SubTitulo } from '../Principal/styled';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI'; 

class ObrigadoCompra extends Component {

  constructor(props){
    super(props);
    this.state={
        nome:'',
        email:'',
        telefone:'',
        mensagem:'',
        loading:false,
        enviado:true
    }
    this.submit = this.submit.bind(this)
  }

  componentDidMount(){
  }

  submit(e){
    e.preventDefault();
    this.setState({loading:true})
    fetch(ecommerceAPI.BASE_URL_API+'users/newLead', {
        method:'POST',
        body:JSON.stringify({
            nome:this.state.nome,
            email:this.state.email,
            telefone:this.state.telefone,
            mensagem:this.state.mensagem
        })
    })
    .then(r=>r.json())
    .then(json=>{
        if(json.success){
            this.setState({loading:false})
            Router.push('/obrigado-pelo-contato');
            
        }else{
            this.setState({loading:false})
        }
    })
}

  render(){
    return(
        <>
            <PageContainer bgColor={ThirdColor}>
                <Container>
                    <SubTitle dark={true}>Parabéns. Você fez uma ótima escolha.</SubTitle>
                    <ContentArea>
                        <SubTitleSm dark={true}>Já recebemos suas informações. Em breve você receberá um e-mail com instruções para criar sua senha de acesso.</SubTitleSm>                        
                        <SubTitleSm dark={true}>Um de nossos consultores também entrará em contato para se apresentar e se colocar a disposição para prestar todo auxílio necessário.</SubTitleSm>
                        <SubTitleSm dark={true}>Enquanto isso, você pode voltar para nossa <Link href='/'><a>página incial</a></Link></SubTitleSm>       
                    </ContentArea>
                </Container>
            </PageContainer>
        </>
    )
  }
}

export default ObrigadoCompra;