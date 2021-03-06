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
                    <Mensagem>Ol??, seja bem-vindo! Parab??ns por ter feito a escolha certa e reservar seu lugar na internet.</Mensagem>
                    <Mensagem>Vou auxiliar voc?? a colocar seu site no ar. Leva menos de 15 minutos.</Mensagem>
                  </>
                }
                {this.state.sup === 1 && this.state.sup !== '' &&
                  <>
                    <Mensagem>Come??e pelas informa????es do site.</Mensagem>
                    <Mensagem>Clique no bot??o <strong>Informa????es</strong> e preencha as informa????es de contato do seu escrit??rio.</Mensagem>.
                  </>
                }
                {this.state.sup == 2 &&
                  <>
                    <Mensagem>??timo!</Mensagem>
                    <Mensagem>O segundo bot??o ?? onde voc?? pode editar/adicionar banners para seu site. Por padr??o, fornecemos 1 banner gratuito para seu escrit??rio. Caso queira adionar novos, clique em <strong>Banners</strong>.</Mensagem>.
                  </>
                }
                {this.state.sup == 3 &&
                  <>
                    <Mensagem>Excelente!</Mensagem>
                    <Mensagem>O tereiro bot??o ?? onde voc?? deve editar os valores do seu escrit??rio de contabilidade, como miss??o, valores e vis??o, por exemplo. Clique em <strong>Valores da Empresa</strong> para editar.</Mensagem>.
                  </>
                }
                {this.state.sup == 4 &&
                  <>
                    <Mensagem>??timo!</Mensagem>
                    <Mensagem>Agora voc?? pode editar os depoimentos positivos de seus principais clientes. Clique em <strong>Depoimentos</strong> para editar.</Mensagem>.
                  </>
                }
                {this.state.sup == 5 &&
                  <>
                    <Mensagem>Excelente!</Mensagem>
                    <Mensagem>Agora ?? hora de voc?? informar quais servi??os seu escrit??rio oferece ??s empresas. Clique em <strong>Servi??os Oferecidos</strong> para editar.</Mensagem>.
                  </>
                }
                {this.state.sup == 6 &&
                  <>
                    <Mensagem>??timo!</Mensagem>
                    <Mensagem>Agora ?? hora de voc?? informar quais servi??os seu escrit??rio oferece ??s empresas. Clique em <strong>Servi??os Oferecidos</strong> para editar.</Mensagem>.
                  </>
                }
                {this.state.sup == 7 &&
                  <>
                    <Mensagem>Excelente!</Mensagem>
                    <Mensagem>Para finalizar, Clique em <strong>Perguntas frequentes</strong> e insira as principais d??vidas relacionadas aos servi??os oferecidos aos seus clientes.</Mensagem>.
                  </>
                }
                {this.state.sup == 8 &&
                  <>
                    <Mensagem>Pronto!</Mensagem>
                    <Mensagem>Seu site est?? completo para ser divulgado e encontrado na internet. Qualquer d??vida, basta nos chamar no chat ou pelo Whatsapp.</Mensagem>.
                  </>
                }
                {this.state.sup < 8 &&
                  <BtnAction bgColor={'#00AE9D'} onClick={this.handleProximo}>Pr??ximo</BtnAction>
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