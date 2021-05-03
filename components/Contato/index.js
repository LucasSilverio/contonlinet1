import React, { Component } from 'react';
import Link from 'next/link';
import Loader from 'react-loader-spinner';
import { BtnAction, Bottom, Container, ContentArea, Content, ContentFlex, Destaque, Ipt, Ta, LoadArea, Img, Items, Item, PageContainer, PeriodosArea, Periodo, PrecoArea, PrecoLegend, PrecoLegendBottom, Preco, PrecoSm, Paragrafo, Riscado, Sm, Sucesso, SubTitle, SubTitleSm, Top } from './styled';
import { FirstColor, SecondColor, ThirdColor } from '../MainStyled';
import { SubTitulo } from '../Principal/styled';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI'; 

class Contato extends Component {

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
                    <SubTitle dark={true}>Vamos começar uma história juntos?</SubTitle>
                    <SubTitleSm dark={true}>Preencha o formulário abaixo:</SubTitleSm>
                    <ContentArea>
                        <form onSubmit={this.submit}>
                            <Ipt type='text' value={this.state.nome} onChange={e=>this.setState({nome:e.target.value})} placeholder='Nome' />
                            <Ipt type='email' value={this.state.email} onChange={e=>this.setState({email:e.target.value})} placeholder='E-mail' />
                            <Ipt type='text' value={this.state.telefone} onChange={e=>this.setState({telefone:e.target.value})} placeholder='Telefone' />
                            <Ta value={this.state.mensagem} onChange={e=>this.setState({mensagem:e.target.value})} placeholder='Mensagem' />
                            {!this.state.loading &&
                                <BtnAction>ENVIAR MENSAGEM</BtnAction>
                            }
                            {/* {!this.state.loading && this.state.enviado &&
                                <Sucesso>Obrigado pelo contato! Iremos te contactar o mais breve possível para poder te auxiliar!</Sucesso>
                            }                              */}
                            {this.state.loading &&
                                <LoadArea>
                                    <Loader
                                        type="TailSpin"
                                        color="#F2A57C"
                                        height={50}
                                        width={50}
                                    />
                                </LoadArea>
                            }
                        </form>
                    </ContentArea>
                </Container>
            </PageContainer>
        </>
    )
  }
}

export default Contato;