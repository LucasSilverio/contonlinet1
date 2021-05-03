import React, { Component } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Router from 'next/router';
import Cookie from 'js-cookie';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';
import Modal from '../Modal';
import ModalNew from '../ModalNew'; 
import { 
    BotaoArea,
    Botao,
    BotaoLegenda,
    Container,
    Column,
    Descricao,
    ItemsArea,
    Item,
    Icone,
    ItemIcon,
    Label,
    OpcoesArea,
    Titulo,
    TitlePage,

} from './styled';
 
class ServicosPainel extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      servicos:[],
      modalVisible:false,
      modalNewVisible:false,
      imagem:'',
      titulo:'',
      descricao:'',
      iditem:''
    }
    this.cleanStates = this.cleanStates.bind(this);
    this.changeTitulo = this.changeTitulo.bind(this);
    this.changeDescricao = this.changeDescricao.bind(this);
    this.getServicos = this.getServicos.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleModalNew = this.handleModalNew.bind(this);
    this.handleItem = this.handleItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitNew = this.handleSubmitNew.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

componentDidMount(){
  this.getServicos();  
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

getServicos(){
  osAPI.getServicosPainel(Cookie.get('token'))
  .then(r=>r.json())
  .then(json=>{
    this.setState({servicos:json.data})
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

handleModalNew(){
  this.cleanStates();
  this.setState({modalNewVisible:!this.state.modalNewVisible});
}

handleSubmit(){
  this.setState({loading:true})
  fetch(ecommerceAPI.BASE_URL_API+'company/editservicos', {
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
          this.getServicos();
          this.setState({loading:false})
        }
        this.setState({loading:false})
    })
}

handleDelete(){
  fetch(ecommerceAPI.BASE_URL_API+'company/deleteServico', {
    method:'POST',
    body:JSON.stringify({
        // jwt:Cookie.get('token'),
        item:this.state.iditem
    })
    })
    .then(r=>r.json())
    .then(json=>{
        if(json.success){   
          alert("Alterações realizadas com sucesso!");
          this.getServicos();
          this.handleModal();
        }
    })
}

handleSubmitNew(){
  this.setState({loading:true})
  fetch(ecommerceAPI.BASE_URL_API+'company/newServico', {
    method:'POST',
    body:JSON.stringify({
        jwt:Cookie.get('token'),
        titulo:this.state.titulo,
        descricao:this.state.descricao,
    })
    })
    .then(r=>r.json())
    .then(json=>{
        if(json.success){   
          alert("Alterações realizadas com sucesso!");
          this.getServicos();
          this.handleModalNew();
          this.setState({loading:false})
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
          getServicos={this.getServicos}
          handleSubmit={this.handleSubmit}
          visible={this.state.modalVisible} 
          iditem={this.state.iditem}
          titulo={this.state.titulo}
          descricao={this.state.descricao}
          imagem={this.state.imagem}
          hideImgInput={true}
          showDelete={true}
          handleDelete={this.handleDelete}
          loading={this.state.loading}
        />
        <ModalNew 
          handleModal={this.handleModalNew}
          changeTitulo={this.changeTitulo}
          changeDescricao={this.changeDescricao}
          getServicos={this.getServicos}
          handleSubmit={this.handleSubmitNew}
          visible={this.state.modalNewVisible} 
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
          <BotaoArea onClick={this.handleModalNew}>
            <Botao>
              <Icone src='/novo.png' />
            </Botao>
            <BotaoLegenda>
              Novo
            </BotaoLegenda>
          </BotaoArea>
        </OpcoesArea>
        <TitlePage>Serviços oferecidos</TitlePage>
        <ItemsArea>
          {this.state.servicos.map((i, index) => (
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

export default ServicosPainel;