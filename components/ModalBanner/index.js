import React, { Component } from 'react';
import moment from 'moment'; 
import { 
    BackArea,
    Container,
    HistoricoArea,
    Item,
    Ipt,
    Label,
    LoaderArea,
    Opcao,
    Row,
    Salvar,
    Selector,
    TituloModal,
    TextArea
} from './styled';
import Upload from '../UploadBanner';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';

class ModalBanner extends Component {
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
    if(this.props.acao != '' && this.props.mobile >= 0){
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
                <Label>URL de destino - <small>Para onde o cliente será direcionado ao clicar no banner</small></Label>
                <Ipt type='text' value={this.props.acao} onChange={e=>this.props.changeAcao(e.target.value)} />
                {this.props.mobile == 1 &&
                  <Opcao onClick={e=>this.props.changeMobile(0)}>Este é um banner para dispositivos móveis - Clique para alterar para padrão</Opcao>
                }
                {this.props.mobile == 0 &&
                  <Opcao onClick={e=>this.props.changeMobile(1)}>Este é um banner padrão - Clique para alterar para mobile</Opcao>
                }
                <Salvar>Salvar Alterações</Salvar>
              </form>
              <Label>Alterar imagem</Label>
              <Upload 
                  data={this.props.id}
                  error={this.state.error}
                  alert={this.state.alert}
                  getAll={this.props.getAll}
              />
              Recomendação:
              Banner Padrão:1920px x 600px
              Banner Mobile:717px x 946px
              
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

export default ModalBanner;