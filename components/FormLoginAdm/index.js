import React, { Component } from 'react';
import Cookie from 'js-cookie';
import Link from 'next/link';
import Router from 'next/router';
import Loader from 'react-loader-spinner';
import { BtnAction, Bottom, BoxForm, Container, ContentArea, Content, ContentFlex, Ipt, Img, Items, Item, LoadArea, PageContainer, PrecoArea, PrecoLegend, PrecoLegendBottom, Preco, Paragrafo, Riscado, Sm, SubTitle, Title, Top } from './styled';
import { FirstColor, SecondColor, ThirdColor } from '../MainStyled';
import { SubTitulo, Titulo } from '../Principal/styled';
import NumberFormat from 'react-number-format'; 
import ecommerceAPI from '../../services/ecommerceAPI'; 

class Formulario extends Component {

  constructor(props){
    super(props);
    this.state={
        email:'',
        pass:'',
        loading:false,
    }
    this.submit = this.submit.bind(this);
  }

  submit(e){
      e.preventDefault();
      this.setState({loading:true})
      if(this.state.nome !== '' && this.state.pass !== ''){
        fetch(ecommerceAPI.BASE_URL_API+'users/panelLoginAdm', {
            method:'POST',
            body:JSON.stringify({
                email:this.state.email,
                pass:this.state.pass
            })
        })
        .then(r=>r.json())
        .then(json=>{
            if(json.success && json.jwt != ''){
              Cookie.set('tk', json.jwt);
              Router.push('/admin');
            }
            this.setState({loading:false})            
        })
      }
  }

  render(){
    return(
        <>
            <PageContainer bgColor={ThirdColor}>
                <Container>
                        <>
                            <Title>LOGIN</Title>
                            <BoxForm>
                                <form onSubmit={this.submit}>
                                  <Ipt type='email' required value={this.state.email} onChange={e=>this.setState({email:e.target.value})} placeholder='E-MAIL'/>
                                  <Ipt type='password' required value={this.state.pass} onChange={e=>this.setState({pass:e.target.value})} placeholder='SENHA'/>
                                  {!this.state.loading &&
                                    <BtnAction bgColor={SecondColor}>ENTRAR</BtnAction>
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
                </Container>
            </PageContainer>
        </>
    )
  }
}

export default Formulario;