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
    Imagem,
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
 
class LayoutPainel extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      infos:[],
      loading:false
    }

    this.getInfos = this.getInfos.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

componentDidMount(){
  this.getInfos();  
} 

changeTemplate(e){
  fetch(ecommerceAPI.BASE_URL_API+'company/changeTemplate', {
    method:'POST',
    body:JSON.stringify({
        jwt:Cookie.get('token'),
        template:e
    })
    })
    .then(r=>r.json())
    .then(json=>{
        if(json.success){   
          alert("Alterações realizadas com sucesso!");
          this.getInfos();
          this.setState({loading:false})
        }
        this.setState({loading:false})
    })
}

getInfos(){
  osAPI.getInfosPanel(Cookie.get('token'))
  .then(r=>r.json())
  .then(json=>{
    this.setState({infos:json.data})
  })
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
        <TitlePage>Templates para seu site</TitlePage>
        <ItemsArea>
          <Item>
            <Imagem src='/t1.jpg' />
            <Titulo>C-100</Titulo>
            <Link href='/c-100'>
              <a>
                Ver Template
              </a>
            </Link>
            {this.state.infos.template != 1 &&
              <Botao onClick={e=>this.changeTemplate(1)}>Aplicar ao meu site</Botao>
            }            
          </Item>
          <Item>
            <Imagem src='/t2.jpg' />
            <Titulo>C-200</Titulo>
            <Link href='/c-200'>
              <a>
                Ver Template
              </a>
            </Link>
            {this.state.infos.template != 2 &&
              <Botao onClick={e=>this.changeTemplate(2)}>Aplicar ao meu site</Botao>
            }
            {this.state.infos.template == 2 &&
              <Titulo>Aplicado</Titulo>
            }
          </Item>
        </ItemsArea>
      </Container>
    )
  }
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default LayoutPainel;