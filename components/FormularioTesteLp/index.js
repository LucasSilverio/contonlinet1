import React, { Component } from 'react';
import Cookie from 'js-cookie';
import Link from 'next/link';
import Router from 'next/router';
import Loader from 'react-loader-spinner';
import { Alert, BtnAction, Bottom, BoxForm, Container, ContentArea, Content, ContentFlex, Ipt, IptDestak, Img, Items, Item, Label, LoadArea, PageContainer, PrecoArea, PrecoLegend, PrecoLegendBottom, Preco, Paragrafo, Riscado, Sm, SubTitle, Title, Top } from './styled';
import { FirstColor, SecondColor, ThirdColor } from '../MainStyled';
import { SubTitulo, Titulo } from '../Principal/styled';
import NumberFormat from 'react-number-format'; 
import ecommerceAPI from '../../services/ecommerceAPI'; 
import osAPI from '../../services/osAPI';

class FormularioTesteLp extends Component {

  constructor(props){
    super(props);
    this.state={
        identifyVisible:true,
        complementaryInfosVisible:false,
        nome:'',
        sobrenome:'',
        email:'',
        telefone:'',
        loading:false,
        cpf:'',
        sobrenome:'',
        nomefantasia:'',
        hasNome:false,
        alert:'',
        slug:''
    }

    this.handleNomeFantasia = this.handleNomeFantasia.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleNomeFantasia(e){
      this.setState({nomefantasia:e})
      osAPI.checkNome(e)
      .then(r=>r.json())
      .then(json=>{
        this.setState({hasNome:json.hasNome})
        this.setState(({slug:json.slug}))
      })
  }

  componentDidMount(){
      if(Cookie.get('name') != undefined){
          this.setState({nome:Cookie.get('name')})
          this.setState({email:Cookie.get('email')})
          this.setState({telefone:Cookie.get('tel')})
      }
  }

  submit(e){
      e.preventDefault();
      this.setState({loading:true})
      if(this.state.nome !== '' && this.state.email !== '' && this.state.contato !== '' && this.state.nomefantasia && !this.state.hasNome){
        fetch(ecommerceAPI.BASE_URL_API+'company/newTest', {
            method:'POST',
            body:JSON.stringify({
                nomefantasia:this.state.nomefantasia,
                nome:this.state.nome,
                email:this.state.email,
                contato:this.state.telefone,
                sobrenome:this.state.sobrenome
            })
        })
        .then(r=>r.json())
        .then(json=>{
            if(json.success){
                // Cookie.set('email', this.state.email, {expires:0.05});
                // Cookie.set('pcit', this.props.item, {expires:0.05});
                // Cookie.set('tk', json.tk, {expires:0.05});
                // this.setState({identifyVisible:false}); 
                Router.replace('/teste-gratis-lp-obrigado');
            }else{
                this.setState({loading:false})
            }
        })
      }
  }

  render(){
    return(
        <>
            <PageContainer bgColor={ThirdColor}>
                <Container>
                    {this.state.identifyVisible &&
                        <>
                            <Title>Teste Gratuitamente po 7 dias</Title>
                            <SubTitle dark={true}>Após preencher as informações abaixo, você receberá um e-mail com as informações para acesso ao painel. Um consultor entrará em contato para prestar auxílio caso haja dúvidas.</SubTitle>
                            <BoxForm>
                                <form onSubmit={this.submit}>
                                    <Label>Nome do escritório</Label>
                                    <IptDestak type='text' correct={this.state.hasNome ? false : true} required value={this.state.nomefantasia} onChange={e=>this.handleNomeFantasia(e.target.value)} placeholder='Ex: idealcontabilidade'/>     
                                    <Alert correct={this.state.hasNome ? false : true}>{this.state.hasNome ? 'Este nome não está disponível!' : 'https://contonline.com.br/'+this.state.slug}</Alert>                              
                                    <Label>Seu nome</Label>
                                    <Ipt type='text' required value={this.state.nome} onChange={e=>this.setState({nome:e.target.value})} placeholder='NOME'/>
                                    <Label>Seu sobrenome</Label>
                                    <Ipt type='text' required value={this.state.sobrenome} onChange={e=>this.setState({sobrenome:e.target.value})} placeholder='SOBRENOME'/>
                                    <Label>E-mail</Label>
                                    <Ipt type='email' required value={this.state.email} onChange={e=>this.setState({email:e.target.value})} placeholder='E-MAIL'/>
                                    <Label>Telefone</Label>
                                    <NumberFormat customInput={Ipt} required value={this.state.telefone} onChange={e=>this.setState({telefone:e.target.value})} format="(##) #####-####" placeholder='(00)00000-0000'/>
                                    {!this.state.loading &&
                                        <BtnAction bgColor={'#F2A57C'}>CONTINUAR</BtnAction>
                                    }
                                    {this.state.loading &&
                                        <LoadArea>
                                            <Loader
                                                type="TailSpin"
                                                color="#5C6BF2"
                                                height={36}
                                                width={36}
                                            />
                                        </LoadArea>
                                    }
                                </form>
                            </BoxForm>
                        </>
                    }
                </Container>
            </PageContainer>
        </>
    )
  }
}

export default FormularioTesteLp;