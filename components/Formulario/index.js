import React, { Component } from 'react';
import Cookie from 'js-cookie';
import Link from 'next/link';
import Router from 'next/router';
import Loader from 'react-loader-spinner';
import { Alert, BtnAction, Bottom, Box, BoxForm, BoxIpt, Container, ContentArea, Content, ContentFlex, Ipt, IptDestak, Img, Items, Item, Label, LoadArea, Lk, PageContainer, PrecoArea, PrecoLegend, PrecoLegendBottom, Preco, Paragrafo, Riscado, Sm, SubTitle, Title, Top } from './styled';
import { FirstColor, SecondColor, ThirdColor } from '../MainStyled';
import { SubTitulo, Titulo } from '../Principal/styled';
import AlertaErro from '../AlertaErro';
import NumberFormat from 'react-number-format'; 
import ecommerceAPI from '../../services/ecommerceAPI'; 
import osAPI from '../../services/osAPI';

class Formulario extends Component {

  constructor(props){
    super(props);
    this.state={
        identifyVisible:true,
        complementaryInfosVisible:false,
        nome:'',
        sobrenome:'',
        email:'',
        emailConf:'',
        telefone:'',
        loading:false,
        cpf:'',
        contato:'',
        nomefantasia:'',
        hasNome:false,
        alertaErroVisible:false,
        alertaErroMsg:'',
        etapa:1
    }

    this.handleNomeFantasia = this.handleNomeFantasia.bind(this);
    this.closeAlertaErro = this.closeAlertaErro.bind(this);
    this.submit = this.submit.bind(this);
    this.submitEmail = this.submitEmail.bind(this);
  }

  componentDidMount(){
  }

  closeAlertaErro(){
    this.setState({alertaErroVisible:false})
  }
  
  showErrorAlert(e){
    this.setState({alertaErroVisible:true})
    this.setState({alertaErroMsg:e})
  
    setTimeout(
    () => this.setState({ alertaErroVisible: false }), 
        4000
    );
  
  }

  handleLogin(){
      Router.push('/login')
  }

  handleNomeFantasia(e){
    this.setState({nomefantasia:e})
    osAPI.checkNome(e)
    .then(r=>r.json())
    .then(json=>{
      this.setState({hasNome:json.hasNome})
    })
}
 
  submit(e){
      e.preventDefault();
      this.setState({loading:true})
      if(this.state.nome !== '' && this.state.email !== '' && this.state.telefone !== '' && this.state.nomefantasia && !this.state.hasNome){
        if(this.state.email == this.state.emailConf){
            fetch(ecommerceAPI.BASE_URL_API+'company/newCompany', {
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
                    this.setState({loading:false})
                    Cookie.set('tk', json.data, {expires:0.05});
                    Cookie.set('pcit', this.props.item, {expires:0.05});
                    Router.replace('/add/checkout');
                }else{
                    this.setState({loading:false})
                }
            })
        }else{
            this.showErrorAlert('Atenção! O e-mail não confere.');
            this.setState({loading:false})
        }
        
      }else{
          this.setState({loading:false})
      }
  }

  submitEmail(e){
    e.preventDefault();
    this.setState({loading:true})

    osAPI.checkEmail(this.state.email)
    .then(r=>r.json())
    .then(json=>{
        if(json.data){
            this.setState({etapa:10});
            this.setState({loading:false})
        }else{
            this.setState({etapa:2});
            this.setState({loading:false})
        }
    })


    // if(this.state.email != ''){
    //   fetch(ecommerceAPI.BASE_URL_API+'company/checkEmail', {
    //       method:'POST',
    //       body:JSON.stringify({
    //           email:this.state.email,
    //       })
    //   })
    //   .then(r=>r.json())
    //   .then(json=>{
    //       if(json.success){
    //           Cookie.set('email', this.state.email, {expires:0.05});
    //           Cookie.set('pcit', this.props.item, {expires:0.05});
    //           Cookie.set('tk', json.tk, {expires:0.05});
    //           this.setState({identifyVisible:false});
    //           Router.push('/add/comp');
    //       }else{
    //           this.setState({loading:false})
    //       }
    //   })
    // }
}


  render(){
    return(
        <>
            <PageContainer bgColor={ThirdColor}>
                <Container>
                    <AlertaErro 
                        visible={this.state.alertaErroVisible}
                        alertaMsg={this.state.alertaErroMsg}
                        closeAlerta={this.closeAlertaErro}
                    />
                    {this.state.identifyVisible &&
                        <>
                            
                            {/* {this.state.etapa == 2 &&
                                <BoxForm>
                                    <form onSubmit={this.submit}>
                                        <Ipt type='text' required value={this.state.nome} onChange={e=>this.setState({nome:e.target.value})} placeholder='NOME'/>

                                        <Ipt type='text' required value={this.state.sobrenome} onChange={e=>this.setState({sobrenome:e.target.value})} placeholder='SOBRENOME'/>

                                        <Ipt type='email' required value={this.state.email} onChange={e=>this.setState({email:e.target.value})} placeholder='E-MAIL'/>

                                        <NumberFormat customInput={Ipt} value={this.state.telefone} onChange={e=>this.setState({telefone:e.target.value})} format="(##) #####-####" placeholder='TELEFONE'/>
                                        {!this.state.loading &&
                                            <BtnAction bgColor={SecondColor}>PROSSEGUIR PARA CHECKOUT</BtnAction>
                                        }
                                        {this.state.loading &&
                                            <LoadArea>
                                                <Loader
                                                    type="TailSpin"
                                                    color="#101759"
                                                    height={50}
                                                    width={50}
                                                />
                                            </LoadArea>
                                        }
                                    </form>
                                </BoxForm>
                            } */}
                            {this.state.etapa == 1 &&
                                <>
                                    <Title>Precisamos de algumas informações antes de continuar</Title>
                                    <BoxForm>
                                        <form onSubmit={this.submitEmail}>
                                            <Label>INFORME SEU E-MAIL</Label>
                                            <Ipt type='email' required value={this.state.email} onChange={e=>this.setState({email:e.target.value})} placeholder='E-MAIL'/>
                                            <BtnAction bgColor={SecondColor}>CONTINUAR</BtnAction>
                                        </form>
                                    </BoxForm>
                                </>
                            }
                            {this.state.etapa == 2 &&
                                <>
                                    <Title>Precisamos de algumas informações antes de continuar</Title>
                                    <BoxForm>
                                        <form onSubmit={this.submit}>
                                            <Label>Nome do escritório (nome fantasia)</Label>
                                            <IptDestak type='text' correct={this.state.hasNome ? false : true} required value={this.state.nomefantasia} onChange={e=>this.handleNomeFantasia(e.target.value)} placeholder='Ex: idealcontabilidade'/>     
                                            <Alert correct={this.state.hasNome ? false : true}>{this.state.hasNome ? 'Este nome não está disponível!' : 'Nome disponível!'}</Alert>                              
                                            <BoxIpt>
                                                <Box>
                                                    <Label>Seu nome</Label>
                                                    <Ipt type='text' required value={this.state.nome} onChange={e=>this.setState({nome:e.target.value})} placeholder='NOME'/>
                                                </Box>
                                                <Box>
                                                    <Label>Seu sobrenome</Label>
                                                    <Ipt type='text' required value={this.state.sobrenome} onChange={e=>this.setState({sobrenome:e.target.value})} placeholder='SOBRENOME'/>
                                                </Box>
                                            </BoxIpt>
                                            <Label>Seu e-mail</Label>
                                            <Ipt type='email' required value={this.state.email} onChange={e=>this.setState({email:e.target.value})} placeholder='E-MAIL'/>
                                            <Label>Confirme o seu e-mail</Label>
                                            <Ipt type='email' required value={this.state.emailConf} onChange={e=>this.setState({emailConf:e.target.value})} placeholder='CONFIRME SEU E-MAIL'/>
                                            <Label>Telefone</Label>
                                            <NumberFormat customInput={Ipt} required value={this.state.telefone} onChange={e=>this.setState({telefone:e.target.value})} format="(##) #####-####" placeholder='(00)00000-0000'/>
                                            {!this.state.loading &&
                                                <>
                                                    <BtnAction bgColor={'#716FF2'}>PROSSEGUIR PARA CHECKOUT</BtnAction>
                                                    <Link href='/contato'>
                                                        <Lk bgColor={'#F2A57C'}>
                                                            PREFIRO QUER UM CONSULTOR ENTRE EM CONTATO COMIGO
                                                        </Lk>
                                                    </Link>
                                                </>
                                            }
                                            {this.state.loading &&
                                                <LoadArea>
                                                    <Loader
                                                        type="TailSpin"
                                                        color="#101759"
                                                        height={50}
                                                        width={50}
                                                    />
                                                </LoadArea>
                                            }
                                        </form>
                                    </BoxForm>
                                </>
                            }
                            {this.state.etapa == 10 &&
                                <>
                                    <Title>Já existe uma conta com este e-mail registrado. <br/>Clique no botão abaixo para continuar:</Title>
                                    <BoxForm>                                    
                                        <BtnAction bgColor={SecondColor} onClick={this.handleLogin}>FAZER LOGIN</BtnAction>
                                    </BoxForm>
                                </>
                            }
                            
                        </>
                    }
                </Container>
            </PageContainer>
        </>
    )
  }
}

export default Formulario;