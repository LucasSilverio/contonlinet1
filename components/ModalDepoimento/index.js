import React, { Component } from 'react';
import moment from 'moment'; 
import Loader from 'react-loader-spinner';
import { 
    BackArea,
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
import Upload from '../UploadCliente';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';

class ModalDepoimento extends Component {
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
  
  render(){     
    
    return(  
        <>
          <BackArea visible={this.props.visible} onClick={this.props.handleModal}/>
          <Container visible={this.props.visible}>
            <TituloModal>Editar Informações</TituloModal>
            <HistoricoArea>
              <form onSubmit={this.handleSubmit}>
                <Label>Nome</Label>
                <Ipt type='text' value={this.props.nome} onChange={e=>this.props.changeNome(e.target.value)} />
                <Label>Empresa</Label>
                <Ipt type='text' value={this.props.empresa} onChange={e=>this.props.changeEmpresa(e.target.value)} />
                <Label>Descrição</Label>
                <TextArea value={this.props.depoimento} onChange={e=>this.props.changeDepoimento(e.target.value)} />
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
              <Label>Alterar imagem</Label>
              <Upload 
                  data={this.props.iditem}
                  error={this.state.error}
                  alert={this.state.alert}
                  getDepoimentos={this.props.getDepoimentos}
              />
              
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

export default ModalDepoimento;