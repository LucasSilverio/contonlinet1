import React, { Component } from 'react';
import Link from 'next/link';
import Loader from 'react-loader-spinner';
import {  Container, ContentArea, PageContainer,  SubTitle, SubTitleSm } from './styled';
import { FirstColor, SecondColor, ThirdColor } from '../MainStyled';
import { SubTitulo } from '../Principal/styled';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI'; 

class ObrigadoComponente extends Component {

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
                    <SubTitle dark={true}>Obrigado Pelo Contato</SubTitle>
                    <ContentArea>
                        <SubTitleSm dark={true}>Em breve nossa equipe de consultores entrará em contato com você.</SubTitleSm>                        
                        <SubTitleSm dark={true}>Enquanto isso, você pode conhecer nossos <Link href='/modelos'><a>modelos de site de alta conversão</a></Link> ou voltar para a <Link href='/'><a>página inicial</a></Link></SubTitleSm>       
                    </ContentArea>
                </Container>
            </PageContainer>
        </>
    )
  }
}

export default ObrigadoComponente;