import React, { Component } from 'react';
import { withRouter } from 'next/router';
import Router from 'next/router';
import Loader from 'react-loader-spinner';
import NumberFormat from 'react-number-format'; 
import {  
    Container,
    Destaque,
    Fundo,
    ImagemArea,
    ImagemAreaTop,
    Imagem,
    ImagemLg,
    Ipt,
    InfoArea,
    InfoAllArea,
    InfoInputArea,
    InfoBotaoArea,
    Label,
    LoadArea,
    Salvar,
    Selector,
    TextoL,
    Texto
} from './styled';
import {FirstColor, SecondColor, ThirdColor} from '../MainStyled';
import ecommerceAPI from '../../services/ecommerceAPI';

class Modal extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
        nome:'',
        email:'',
        telefone:'',
        segmento:'',
        loading:false,
        concluido:false
    }
    this.actionClick = this.actionClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){   

  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({loading:true})
    if(this.state.nome !== '' && this.state.email !== ''){
        fetch(ecommerceAPI.BASE_URL_API+'users/newLead', {
            method:'POST',
            body:JSON.stringify({
                nome:this.state.nome,
                email:this.state.email,
                telefone:this.state.telefone,
            })
        })
        .then(r=>r.json())
        .then(json=>{
            // if(json.success){
            //     Router.push('/primeiracompra')
            // }
            this.actionClick();
            this.setState({loading:false})
            this.setState({concluido:true})
        })
    }
  }

  actionClick(){
    gtag('event', 'Formulario_Contato', {
      'event_category': 'Contato',
      'event_label': 'Modal',
      'value': 0
    });
  }

  render(){ 
    return(    
        <>
            <Fundo onClick={e=>this.props.closeModal()}>
                
            </Fundo> 
            <Container>
                {!this.state.concluido &&
                    <>
                        <ImagemArea>
                            <ImagemAreaTop>
                                <Imagem src='/woman.svg' />
                            </ImagemAreaTop>
                            {!this.props.contact &&
                                <>
                                    <Destaque>ESPERE!</Destaque>
                                    <Texto>Se tiver ficado alguma dúvida, nossos consultores podem te ajudar.</Texto>
                                    <Texto>Basta preencher o formulário ao lado que iremos entrar em contato para levar sua loja ao sucesso em vendas.</Texto>
                                </>
                            }
                            {this.props.contact &&
                                <>
                                    <Destaque>FALAR COM UM CONSULTOR</Destaque>
                                    <Texto>Preencha o formulário ao lado que um consultor irá entrar em contato para tirar todas as suas dúvidas.</Texto>
                                </>
                            }
                        </ImagemArea>
                        <InfoArea>
                            <form onSubmit={this.handleSubmit}>
                                <InfoInputArea>
                                    <Label>Nome:</Label>
                                    <Ipt required type='text' required value={this.state.nome} onChange={e=>this.setState({nome:e.target.value})} placeholder="Nome Completo"/>
                                    <Label>E-mail:</Label>
                                    <Ipt required type='email' required value={this.state.email} onChange={e=>this.setState({email:e.target.value})} placeholder="exemplo@gmail.com"/>
                                    <Label>Telefone:</Label>
                                    {/* <Ipt required type='telefone' required value={this.state.telefone} onChange={e=>this.setState({telefone:e.target.value})} placeholder="(DD)00000-0000"/> */}
                                    <NumberFormat customInput={Ipt} value={this.state.telefone} onChange={e=>this.setState({telefone:e.target.value})} format="(##)#####-####" placeholder='(DD)00000-0000'/>
                                </InfoInputArea>
                                <InfoBotaoArea>
                                    {!this.state.loading &&
                                        <Salvar>ENVIAR</Salvar>
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
                                </InfoBotaoArea>
                            </form>
                        </InfoArea>
                    </>
                }
                {this.state.concluido &&
                    <InfoAllArea>
                        <ImagemLg src='/concluido.svg' />
                        <Destaque>EXCELENTE!</Destaque>
                        <TextoL>Recebemos suas informações. Em breve um especialista de nossa equipe entrará em contato com você.</TextoL>
                        <Salvar onClick={e=>this.props.closeModal()}>FECHAR</Salvar>
                    </InfoAllArea>
                }
            </Container>
        </>
        
    )
  }
}



export default Modal;