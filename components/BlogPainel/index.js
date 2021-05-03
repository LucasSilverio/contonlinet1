import React, { Component } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Router from 'next/router';
import Cookie from 'js-cookie';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';
import Modal from '../Modal';
import ModalNew from '../ModalNew'; 
import moment from 'moment';
import { 
    BotaoArea,
    Botao,
    BotaoLegenda,
    BoxItem,
    Container,
    Column,
    Descricao,
    Delete,
    ItemsArea,
    Item,
    Icone,
    Img,
    ItemIcon,
    Label,
    OpcoesArea,
    Titulo,
    TitlePage,

} from './styled';
 
class BlogPainel extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      servicos:[],
      modalVisible:false,
      modalNewVisible:false,
      imagem:'',
      titulo:'',
      descricao:'',
      iditem:'',
      materias:[]
    }
    this.cleanStates = this.cleanStates.bind(this);
    this.changeTitulo = this.changeTitulo.bind(this);
    this.changeDescricao = this.changeDescricao.bind(this);
    this.getInfos = this.getInfos.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleModalNew = this.handleModalNew.bind(this);
    this.handleItem = this.handleItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitNew = this.handleSubmitNew.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
 
componentDidMount(){
  this.getInfos();  
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

getInfos(){
  osAPI.getMateriasPainel(Cookie.get('token'))
  .then(r=>r.json())
  .then(json=>{
      this.setState({materias:json.data})
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
  // this.cleanStates();
  // this.setState({modalNewVisible:!this.state.modalNewVisible});
  Router.push('/conteudo/new-story')
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

handleDelete(materia){
  fetch(ecommerceAPI.BASE_URL_API+'blog/deletePostCliente', {
    method:'POST',
    body:JSON.stringify({
        jwt:Cookie.get('token'),
        materia
    })
    })
    .then(r=>r.json())
    .then(json=>{
        if(json.success){   
          alert("Alterações realizadas com sucesso!");
          this.getInfos();
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
        <TitlePage>Gerêncie o conteúdo do Blog do seu escritório</TitlePage>
        <ItemsArea>
          {this.state.materias.map((i, index) => (
            <BoxItem>
              <Link key={index} href={{ pathname: '/conteudo/'+i.id, query: { item:i.id } }} as={'/conteudo/'+i.id}>
                <Item key={index}>
                  <Column>
                    <Img src={i.img} />
                    <Titulo>{i.titulo}</Titulo>
                    <Descricao>{i.previa}</Descricao>
                    <Descricao><small>{moment(i.dataenvio).format('DD/MM/YY')}</small></Descricao>
                  </Column>
                </Item>
              </Link>
              <Delete onClick={e=>this.handleDelete(i.id)}>Excluir</Delete>
            </BoxItem>
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

export default BlogPainel;