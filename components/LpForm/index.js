import React, { Component } from 'react';
import Link from 'next/link';
import Loader from 'react-loader-spinner';
import Cookie from 'js-cookie';
import {  BtnAction, Container, ContentArea, Ipt, LoaderArea, PageContainer,  SubTitle, SubTitleSm } from './styled';
import { FirstColor, SecondColor, ThirdColor } from '../MainStyled';
import { SubTitulo } from '../Principal/styled';
import osAPI from '../../services/osAPI';
import Router from 'next/router';
import NumberFormat from 'react-number-format'; 
import ecommerceAPI from '../../services/ecommerceAPI'; 
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';   

class LpForm extends Component {

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

  sBottom(){
    scroll.scrollTo(5100);
  }

  submit(e){
    e.preventDefault();
    this.setState({loading:true})
    fetch(ecommerceAPI.BASE_URL_API+'users/newLeadLp', {
        method:'POST',
        body:JSON.stringify({
            nome:this.state.nome,
            email:this.state.email,
            telefone:this.state.telefone,
        })
    })
    .then(r=>r.json())
    .then(json=>{
        if(json.success){
            this.setState({loading:false})
            Cookie.set('name', this.state.nome, {expires:0.05});
            Cookie.set('email', this.state.email, {expires:0.05});
            Cookie.set('tel', this.state.telefone, {expires:0.05});
            Router.push('/teste-gratis-lp');
            
        }else{
            this.setState({loading:false})
        }
    })
  }

  render(){
    return(
        <>
            <PageContainer bgColor={'#FFF'}>
                <Container>
                    <SubTitle dark={true}>Preencha o formulário abaixo se você tem um <a>ESCRITÓRIO DE CONTABILIDADE</a> e acredita que pode multiplicar seus leads e clientes com um site profissional</SubTitle>
                    {/* <BtnAction onClick={this.sBottom}>QUERO CRIAR MEU SITE DE ALTA CONVERSÃO</BtnAction> */}
                    <ContentArea>
                        <form onSubmit={this.submit}>
                            <Ipt type='text' required value={this.state.nome} onChange={e=>this.setState({nome:e.target.value})} placeholder='SEU NOME'/>
                            <Ipt type='email' required value={this.state.email} onChange={e=>this.setState({email:e.target.value})} placeholder='SEU EMAIL'/>   
                            <NumberFormat customInput={Ipt} required value={this.state.telefone} onChange={e=>this.setState({telefone:e.target.value})} format="(##) #####-####" placeholder='(00)00000-0000'/>
                            {this.state.loading &&
                                <LoaderArea>
                                    <Loader
                                        type="TailSpin"
                                        color="#5C6BF2"
                                        height={36}
                                        width={36}
                                    />
                                </LoaderArea>
                            }
                            {!this.state.loading &&
                                <BtnAction>QUERO CRIAR MEU SITE DE ALTA CONVERSÃO</BtnAction>
                            }
                        </form>
                        {/* <SubTitleSm dark={true}>Em breve nossa equipe de consultores entrará em contato com você.</SubTitleSm>                        
                        <SubTitleSm dark={true}>Enquanto isso, você pode conhecer nossos <Link href='/modelos'><a>modelos de site de alta conversão</a></Link> ou voltar para a <Link href='/'><a>página inicial</a></Link></SubTitleSm>        */}
                    </ContentArea>
                </Container>
            </PageContainer>
        </>
    )
  }
}

export default LpForm;