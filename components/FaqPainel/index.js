import React, { Component } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Router from 'next/router';
import Cookie from 'js-cookie';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';
import Modal from '../Modal';
import { 
    Container,
    Column,
    Descricao,
    ItemsArea,
    Item,
    ItemIcon,
    Label,
    Titulo,
    TitlePage,
    OpcoesArea,
    BotaoArea,
    Botao,
    Icone,
    BotaoLegenda,

} from './styled';
 
class FaqPainel extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      faq:[],
      modalVisible:false,
      imagem:'',
      titulo:'',
      descricao:'',
      iditem:'',
      loading:false
    }
    this.cleanStates = this.cleanStates.bind(this);
    this.changeTitulo = this.changeTitulo.bind(this);
    this.changeDescricao = this.changeDescricao.bind(this);
    this.getFaq = this.getFaq.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleItem = this.handleItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

componentDidMount(){
  this.getFaq();  
} 

cleanStates(){
  this.setState({imagem:''})
  this.setState({titulo:''})
  this.setState({descricao:''})
  this.setState({iditem:''})
}

changeTitulo(e){
  this.setState({titulo:e})
}

changeDescricao(e){
  this.setState({descricao:e})
}

getFaq(){
  osAPI.getFaqPainel(Cookie.get('token'))
  .then(r=>r.json())
  .then(json=>{
    this.setState({faq:json.data})
  })
}

handleItem(id, imagem, titulo, descricao){
  this.cleanStates();
  this.setState({iditem:id})
  this.setState({titulo:titulo})
  this.setState({descricao:descricao})
  this.setState({imagem:imagem})
  this.handleModal();
}

handleModal(){
  this.setState({modalVisible:!this.state.modalVisible});
}

handleSubmit(){
  this.setState({loading:true})
  fetch(ecommerceAPI.BASE_URL_API+'company/editfaq', {
    method:'POST',
    body:JSON.stringify({
        // jwt:Cookie.get('token'),
        item:this.state.iditem,
        titulo:this.state.titulo,
        descricao:this.state.descricao,
    })
    })
    .then(r=>r.json())
    .then(json=>{
        if(json.success){   
          alert("Alterações realizadas com sucesso!");
          this.getFaq();
          this.setState({loading:false})
          this.handleModal();
        }
        this.setState({loading:false})
    })
}

  render(){    
    return(    
      <Container>
        <Modal 
          handleModal={this.handleModal}
          changeTitulo={this.changeTitulo}
          changeDescricao={this.changeDescricao}
          getFaq={this.getFaq}
          handleSubmit={this.handleSubmit}
          visible={this.state.modalVisible} 
          iditem={this.state.iditem}
          titulo={this.state.titulo}
          descricao={this.state.descricao}
          imagem={this.state.imagem}
          hideImgInput={true}
          loading={this.state.loading}
        />
        <OpcoesArea>
          <Link href='/painel'>
            <a>
              <BotaoArea>
                <Botao>
                  <Icone src='/back.png' />
                </Botao>
                <BotaoLegenda>
                  Voltar
                </BotaoLegenda>
              </BotaoArea>
            </a>
          </Link>
        </OpcoesArea>
        <TitlePage>Perguntas Frequêntes</TitlePage>
        <ItemsArea>
          {this.state.faq.map((i, index) => (
            <Item key={index} onClick={e=>this.handleItem(i.id, i.imagem, i.titulo, i.descricao)}>
              <Column>
                <Titulo>{i.titulo}</Titulo>
                <Descricao>{i.descricao}</Descricao>
              </Column>
            </Item>
          ))}
        </ItemsArea>
      </Container>
    )
  }
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default FaqPainel;