import React, { Component } from 'react';
import moment from 'moment'; 
import Loader from 'react-loader-spinner';
import { 
    BackArea,
    BtnDel,
    Container,
    HistoricoArea,
    Item,
    Ipt,
    Label,
    LoaderArea,
    Row,
    Salvar,
    Selector,
    TituloModal,
    TextArea
} from './styled';
import Upload from '../Upload';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';

class Modal extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      loading:false,
      titulo:'',
      slug:'',
      status:'',
      codRastreio:'',
      sendMail:false
    } 
    
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this);
    
  }

  componentDidMount(){
  }

  handleSubmit(e){
    e.preventDefault();;
    let sm = 0;
    if(this.props.titulo != '' && this.props.descricao != ''){
      this.props.handleSubmit();
    }
  } 

  handleDelete(e){
    e.preventDefault();
    this.props.handleDelete();
  } 
  
  render(){     
    
    return(   
        <>
          <BackArea visible={this.props.visible} onClick={this.props.handleModal}/>
          <Container visible={this.props.visible}>
            <TituloModal>Editar Informações</TituloModal>
            <HistoricoArea>
              <form onSubmit={this.handleSubmit}>
                <Label>Título</Label>
                <Ipt type='text' value={this.props.titulo} onChange={e=>this.props.changeTitulo(e.target.value)} />
                <Label>Descrição</Label>
                <TextArea value={this.props.descricao} onChange={e=>this.props.changeDescricao(e.target.value)} />
                {!this.props.loading &&
                  <Salvar>Salvar Alterações</Salvar>
                }
                {this.props.loading &&
                  <LoaderArea>
                    <Loader
                        type="TailSpin"
                        color="#1976D2"
                        height={24}
                        width={24}
                    />
                  </LoaderArea>
                }
              </form>
              {!this.props.hideImgInput &&
                <>
                  <Label>Alterar imagem</Label>
                  <Upload 
                      data={this.props.iditem}
                      error={this.state.error}
                      alert={this.state.alert}
                      getValores={this.props.getValores}
                  />
                </>
              }
              {this.props.showDelete &&
                <form onSubmit={this.handleDelete}>
                  <BtnDel>DELETAR</BtnDel>
                </form>
              }
              
            </HistoricoArea>       
          </Container>
        </>
    )
  }
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default Modal;