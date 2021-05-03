import React, { Component } from 'react';
import moment from 'moment'; 
import Loader from 'react-loader-spinner';
import NumberFormat from 'react-number-format'; 
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
    SubTituloModal,
    TextArea
} from './styled';
import Upload from '../Upload';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';
import Cookies from 'js-cookie';

class ModalLead extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      loading:false,
      titulo:'',
      slug:'',
      status:'',
      codRastreio:'',
      sendMail:false,
      nome:'',
      telefone:'',
      email:''
    } 
    
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this);
    
  }

  componentDidMount(){
    
  }

  exibir(){
    alert('oi');
  }

  handleSubmit(e){
    e.preventDefault();;
    this.setState({loading:true})
    fetch(ecommerceAPI.BASE_URL_API+'users/newLeadLp', {
        method:'POST',
        body:JSON.stringify({
            nome:this.state.nome,
            email:this.state.email,
            telefone:this.state.telefone,
        })
    })
    .then(r=>r.json())
    .then(json=>{
        if(json.success){
            this.setState({loading:false});
            this.props.closeModal();
            // Router.push('/teste-gratis-lp');
            
        }else{
            this.setState({loading:false})
        }
    })
  } 

  handleDelete(e){
    e.preventDefault();
    this.props.handleDelete();
  } 
  
  render(){     
    
    return(   
        <>
          <BackArea visible={this.props.visible} onClick={this.props.closeModal}/>
          <Container visible={this.props.visible}>
            <TituloModal>Quer Saber o Passo a Passo para Escalar seu Escritório na Internet?</TituloModal>
            <SubTituloModal>Receba uma consultoria gratuita pelo Whatsapp</SubTituloModal>
            <HistoricoArea>
              <form onSubmit={this.handleSubmit}>
                <Label>Nome</Label>
                <Ipt type='text' value={this.state.nome} onChange={e=>this.setState({nome:e.target.value})} />
                <Label>Telefone</Label>
                <NumberFormat customInput={Ipt} required value={this.state.telefone} onChange={e=>this.setState({telefone:e.target.value})} format="(##) #####-####" placeholder='(00)00000-0000'/>
                <Label>Seu E-mail</Label>
                <Ipt type='email' value={this.props.email} onChange={e=>this.setState({email:e.target.value})} />
                {this.state.loading &&
                  <LoaderArea>
                    <Loader
                        type="TailSpin"
                        color="#FFF"
                        height={24}
                        width={24}
                    />
                  </LoaderArea>
                }
                {!this.state.loading &&
                  <Salvar>QUERO UMA CONSULTORIA GRÁTIS</Salvar>
                }
              </form>
              
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

export default ModalLead;