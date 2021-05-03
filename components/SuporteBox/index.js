import React, { Component } from 'react';
import Router from 'next/router';
import Cookie from 'js-cookie';
import { BtnAction, Container, Item, Lk, Logo, Mensagem, ItemLogin, PageContainer } from './styled';
import { FirstColor, SecondColor } from '../MainStyled';
import Link from 'next/link';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import ecommerceAPI from '../../services/ecommerceAPI';
import osAPI from '../../services/osAPI';

class SuporteBox extends Component {

  constructor(props){
    super(props);
    this.state={
      sup:''
    }
    this.getInfos = this.getInfos.bind(this);
    this.handleProximo = this.handleProximo.bind(this);
    this.handleConluir = this.handleConluir.bind(this);
  }

  componentDidMount(){
    this.getInfos();    
  }

  getInfos(){
    osAPI.getInfosPanel(Cookie.get('token'))
    .then(r=>r.json())
    .then(json=>{
      if(json.data.sup == 1){
        this.setState({sup:9});
      }else{
        if(Cookie.get('sup') != undefined){
          this.setState({sup:Cookie.get('sup')})
        }else{
          this.setState({sup:1})
        }
      }
    })
  }

  handleLogo(){
    Router.push('/')
  }

  handleProximo(){
    if(Cookie.get('sup') != undefined){
      Cookie.set('sup', parseInt(Cookie.get('sup')) + 1)
      this.setState({sup:Cookie.get('sup')});
    }else{
      Cookie.set('sup', 1)
      // alert('iniciou o suporte');
    }
  }

  handleConluir(){
    fetch(ecommerceAPI.BASE_URL_API+'company/concluirSuporte', {
      method:'POST',
      body:JSON.stringify({
          jwt:Cookie.get('token')
      })
    })
    .then(r=>r.json())
    .then(json=>{
      this.setState({sup:9});

    })
  }

  sBottom(){
    // scroll.scrollToBottom();
    scroll.scrollTo(5100);
  }

  render(){
    return(
      <>
        {this.state.sup <= 8 &&
          <PageContainer bgColor={'#1976D2'} altura={this.props.altura}>
              <Container>
                {Cookie.get('sup') == undefined &&
                  <>
                    <Mensagem>Olá, seja bem-vindo! Parabéns por ter feito a escolha certa e reservar seu lugar na internet.</Mensagem>
                    <Mensagem>Vou auxiliar você a colocar seu site no ar. Leva menos de 15 minutos.</Mensagem>
                  </>
                }
                {this.state.sup === 1 && this.state.sup !== '' &&
                  <>
                    <Mensagem>Começe pelas informações do site.</Mensagem>
                    <Mensagem>Clique no botão <strong>Informações</strong> e preencha as informações de contato do seu escritório.</Mensagem>.
                  </>
                }
                {this.state.sup == 2 &&
                  <>
                    <Mensagem>Ótimo!</Mensagem>
                    <Mensagem>O segundo botão é onde você pode editar/adicionar banners para seu site. Por padrão, fornecemos 1 banner gratuito para seu escritório. Caso queira adionar novos, clique em <strong>Banners</strong>.</Mensagem>.
                  </>
                }
                {this.state.sup == 3 &&
                  <>
                    <Mensagem>Excelente!</Mensagem>
                    <Mensagem>O tereiro botão é onde você deve editar os valores do seu escritório de contabilidade, como missão, valores e visão, por exemplo. Clique em <strong>Valores da Empresa</strong> para editar.</Mensagem>.
                  </>
                }
                {this.state.sup == 4 &&
                  <>
                    <Mensagem>Ótimo!</Mensagem>
                    <Mensagem>Agora você pode editar os depoimentos positivos de seus principais clientes. Clique em <strong>Depoimentos</strong> para editar.</Mensagem>.
                  </>
                }
                {this.state.sup == 5 &&
                  <>
                    <Mensagem>Excelente!</Mensagem>
                    <Mensagem>Agora é hora de você informar quais serviços seu escritório oferece às empresas. Clique em <strong>Serviços Oferecidos</strong> para editar.</Mensagem>.
                  </>
                }
                {this.state.sup == 6 &&
                  <>
                    <Mensagem>Ótimo!</Mensagem>
                    <Mensagem>Agora é hora de você informar quais serviços seu escritório oferece às empresas. Clique em <strong>Serviços Oferecidos</strong> para editar.</Mensagem>.
                  </>
                }
                {this.state.sup == 7 &&
                  <>
                    <Mensagem>Excelente!</Mensagem>
                    <Mensagem>Para finalizar, Clique em <strong>Perguntas frequentes</strong> e insira as principais dúvidas relacionadas aos serviços oferecidos aos seus clientes.</Mensagem>.
                  </>
                }
                {this.state.sup == 8 &&
                  <>
                    <Mensagem>Pronto!</Mensagem>
                    <Mensagem>Seu site está completo para ser divulgado e encontrado na internet. Qualquer dúvida, basta nos chamar no chat ou pelo Whatsapp.</Mensagem>.
                  </>
                }
                {this.state.sup < 8 &&
                  <BtnAction bgColor={'#00AE9D'} onClick={this.handleProximo}>Próximo</BtnAction>
                }
                {this.state.sup == 8 &&
                  <BtnAction bgColor={'#00AE9D'} onClick={this.handleConluir}>Fechar</BtnAction>
                }
              </Container>
          </PageContainer>
        }
      </>
    )
  }
}

export default SuporteBox;