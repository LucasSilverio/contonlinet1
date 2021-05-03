import React, { Component } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Router from 'next/router';
import Cookie from 'js-cookie';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';
import Modal from '../ModalDepoimento';
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
    SubTitlePage

} from './styled';
 
class DepoimentosPainel extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      depoimentos:[],
      modalVisible:false,
      imagem:'',
      nome:'',
      depoimento:'',
      empresa:'',
      iditem:''
    }
    this.cleanStates = this.cleanStates.bind(this);
    this.changeNome = this.changeNome.bind(this);
    this.changeDepoimento = this.changeDepoimento.bind(this);
    this.changeEmpresa = this.changeEmpresa.bind(this);
    this.getDepoimentos = this.getDepoimentos.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleItem = this.handleItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

componentDidMount(){
  this.getDepoimentos();  
}

cleanStates(){
  this.setState({imagem:''})
  this.setState({nome:''})
  this.setState({depoimento:''})
  this.setState({empresa:''})
  this.setState({iditem:''})
}

changeNome(e){
  this.setState({nome:e})
}

changeDepoimento(e){
  this.setState({depoimento:e})
}

changeEmpresa(e){
  this.setState({empresa:e})
}

getDepoimentos(){
  osAPI.getDepoimentosPainel(Cookie.get('token'))
  .then(r=>r.json())
  .then(json=>{
    this.setState({depoimentos:json.data})
  })
}

handleItem(id, imagem, nome, depoimento, empresa){
  this.cleanStates();
  this.setState({iditem:id})
  this.setState({nome:nome})
  this.setState({depoimento:depoimento})
  this.setState({empresa:empresa})
  this.setState({imagem:imagem})
  this.handleModal();
}

handleModal(){
  this.setState({modalVisible:!this.state.modalVisible});
}

handleSubmit(){
  this.setState({loading:true})
  fetch(ecommerceAPI.BASE_URL_API+'company/editDepoimentos', {
    method:'POST',
    body:JSON.stringify({
        // jwt:Cookie.get('token'),
        item:this.state.iditem,
        nome:this.state.nome,
        depoimento:this.state.depoimento,
        empresa:this.state.empresa
    })
    })
    .then(r=>r.json())
    .then(json=>{
        if(json.success){   
          alert("Alterações realizadas com sucesso!");
          this.getDepoimentos();
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
          changeNome={this.changeNome}
          changeDepoimento={this.changeDepoimento}
          changeEmpresa={this.changeEmpresa}
          getDepoimentos={this.getDepoimentos}
          handleSubmit={this.handleSubmit}
          visible={this.state.modalVisible} 
          iditem={this.state.iditem}
          nome={this.state.nome}
          depoimento={this.state.depoimento}
          empresa={this.state.empresa}
          imagem={this.state.imagem}
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
        <TitlePage>Cadastre depoimentos de clientes</TitlePage>
        <SubTitlePage>Exiba até três depoimentos de clientes elogiando o trabalho da sua empresa.</SubTitlePage>
        <ItemsArea>
          {this.state.depoimentos.map((i, index) => (
            <Item key={index} onClick={e=>this.handleItem(i.id, i.imagem, i.nome, i.depoimento, i.empresa)}>
              <Column>
                <ItemIcon src={i.imagem} />
              </Column>
              <Column>
                <Titulo>{i.nome+' - '+i.empresa}</Titulo>
                <Descricao>{i.depoimento}</Descricao>
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

export default DepoimentosPainel;