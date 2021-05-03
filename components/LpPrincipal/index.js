import React, { Component } from 'react';
import Link from 'next/link';
import Loader from 'react-loader-spinner';
import {  BtnAction, Container, ContentArea, PageContainer,  SubTitle, SubTitleSm } from './styled';
import { FirstColor, SecondColor, ThirdColor } from '../MainStyled';
import { SubTitulo } from '../Principal/styled';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI'; 
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';   

class LpPrincipal extends Component {

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
    scroll.scrollTo(550);
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
                    <SubTitle dark={true}>Existem 2 tipos de empresas segundo Bill Gates, "as que fazem negócio pela internet e as que estão fora dos negócios", qual é a sua?</SubTitle>
                    <SubTitle dark={true}>Criamos sites de alta conversão que vão <a>multiplicar o número de clientes</a> no seu escritório de contabilidade.</SubTitle>
                    <BtnAction onClick={this.sBottom}>TESTAR GRATUITAMENTE POR 7 DIAS</BtnAction>
                    {/* <ContentArea>
                        <SubTitleSm dark={true}>Em breve nossa equipe de consultores entrará em contato com você.</SubTitleSm>                        
                        <SubTitleSm dark={true}>Enquanto isso, você pode conhecer nossos <Link href='/modelos'><a>modelos de site de alta conversão</a></Link> ou voltar para a <Link href='/'><a>página inicial</a></Link></SubTitleSm>       
                    </ContentArea> */}
                </Container>
            </PageContainer>
        </>
    )
  }
}

export default LpPrincipal;