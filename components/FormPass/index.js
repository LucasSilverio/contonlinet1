import React, { Component } from 'react';
import Cookie from 'js-cookie';
import Link from 'next/link';
import Router from 'next/router';
import zxcvbn from 'zxcvbn';
import Loader from 'react-loader-spinner';
import { BtnAction, Bottom, BoxForm, Container, ContentArea, Content, ContentFlex, Ipt, Img, Items, Item, LoadArea, PassLabel, PageContainer, PrecoArea, PrecoLegend, PrecoLegendBottom, Preco, Paragrafo, Riscado, Sm, SubTitle, Title, Top } from './styled';
import { FirstColor, SecondColor, ThirdColor } from '../MainStyled';
import { SubTitulo, Titulo } from '../Principal/styled';
import NumberFormat from 'react-number-format'; 
import ecommerceAPI from '../../services/ecommerceAPI'; 

class FormPass extends Component {

  constructor(props){
    super(props);
    this.state={
        identifyVisible:true,
        complementaryInfosVisible:false,
        pass:'',
        passconfirmation:'',
        loading:false,
        score:0,
        alert:'',
        successAlert:'',
    }

    this.submit = this.submit.bind(this);
  }

    submit(e){
        e.preventDefault();
        this.setState({loading:true});
        const r = zxcvbn(this.state.pass);
        if(r.score >= 2){
            if(this.state.pass === this.state.passconfirmation){
                fetch(ecommerceAPI.BASE_URL_API+'register/setPass', {
                    method:'POST',
                    body:JSON.stringify({
                        token:this.props.token,
                        pass:this.state.pass,
                        passconfirm:this.state.passconfirmation
                    })
                })
                .then(r=>r.json())
                .then(json=>{
                    if(json.error == '' && json.success){
                    //   this.handleLogin();
                        this.setState({successAlert:'Senha alterada com sucesso! Você será redirecionado para a página de login em instantes!'});
                        // this.setState({error:''});
                        // this.props.handleSignIn();
                        // Cookie.set('token', json.jwt, {expires: 2});
                        // Router.replace('/account') 
                        this.setState({loading:false});
                        setTimeout(this.redirect, 3000);
                    }else{
                        this.setState({error:json.error})
                        this.setState({loading:false});
                    }
                })
            }else{
                this.setState({error:'As senhas não conferem!'});
                this.setState({loading:false});
            }
        }else{
            this.setState({error:'A senha escolhida deve estar no nível bom de segurança!'})
            this.setState({loading:false});
        }

    } 

    redirect(){
        Router.push('/login');
    }

    passwordLevel(e){
        switch (e) {
            case 0:
            return 'Fraca';
            case 1:
            return 'Fraca';
            case 2:
            return 'Bom';
            case 3:
            return 'Bom';
            case 4:
            return 'Forte';
            default:
            return 'Fraca';
        }
    }

  render(){
    const r = zxcvbn(this.state.pass);
    return(
        <>
            <PageContainer bgColor={ThirdColor}>
                <Container>
                    {this.state.identifyVisible &&
                        <>
                            <Title>Defina sua senha de acesso ao portal do cliente</Title>
                            <BoxForm>
                                <form onSubmit={this.submit}>
                                    <Ipt type='password' required value={this.state.pass} onChange={e=>this.setState({pass:e.target.value})} placeholder='SENHA'/>
                                    <Ipt type='password' required value={this.state.passconfirmation} onChange={e=>this.setState({passconfirmation:e.target.value})} placeholder='CONFIRMAR SENHA'/>
                                    {this.state.alert == '' &&
                                    <PassLabel score={r.score}>Força da senha:{' '+this.passwordLevel(r.score)}</PassLabel>
                                    }                    
                                    <PassLabel score={1}>{this.state.error}</PassLabel>
                                    {this.state.alert != '' &&
                                    <PassLabel score={1}>{this.state.alert}</PassLabel>
                                    }
                                    {this.state.successAlert != '' &&
                                    <PassLabel score={2}>{this.state.successAlert}</PassLabel>
                                    }
                                    {!this.state.loading &&
                                        <BtnAction bgColor={SecondColor}>SALVAR</BtnAction>
                                    }
                                    {this.state.loading &&
                                        <LoadArea>
                                            <Loader
                                                type="TailSpin"
                                                color="#20704E"
                                                height={50}
                                                width={50}
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

export default FormPass;