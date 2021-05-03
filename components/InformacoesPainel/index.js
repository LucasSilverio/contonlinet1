import React, { Component } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Router from 'next/router';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';
import NumberFormat from 'react-number-format';
import Cookie from 'js-cookie';
import { decimal, preco, onlyNumbers } from '../../services/formMask';
import Alerta from '../Alerta';
import Upload from '../UploadLogo';
import { 
    BoxIpt,
    Container,
    Column,
    Descricao,
    ItemsArea,
    Item,
    ItemIcon,
    Ipt,
    Label,
    Logo,
    Row,
    Salvar,
    Selector,
    TextArea,
    Titulo,
    TitlePage,
    OpcoesArea,
    BotaoArea,
    Botao,
    Icone,
    BotaoLegenda,


} from './styled';
// import { Title } from '../Formulario copy/styled';
 
class InformacoesPainel extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      infos:[],
      modalVisible:false,
      logradouro:'',
      numero:'',
      bairro:'',
      cidade:'',
      estado:'',
      cep:'',
      telefone:'',
      clientes:0,
      cidades:0,
      experiencia:0,
      nomefantasia:'',
      alertaVisible:false,
      alertaMsg:'',
      sobre:'',
      whatsapp:''
    }
    this.cleanStates = this.cleanStates.bind(this);
    this.changeTitulo = this.changeTitulo.bind(this);
    this.changeDescricao = this.changeDescricao.bind(this);
    this.getInfos = this.getInfos.bind(this);
    this.handleItem = this.handleItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showAlert = this.showAlert.bind(this);
    this.closeAlerta = this.closeAlerta.bind(this);
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
  osAPI.getInfosPanel(Cookie.get('token'))
  .then(r=>r.json())
  .then(json=>{
    this.setState({infos:json.data})
    this.setState({nomefantasia:json.data.nomefantasia})
    this.setState({logradouro:json.data.logradouro})
    this.setState({numero:json.data.numero})
    this.setState({bairro:json.data.bairro})
    this.setState({estado:json.data.estado})
    this.setState({cidade:json.data.cidade})
    this.setState({telefone:json.data.telefonecontato})
    this.setState({whatsapp:json.data.whatsapp})
    this.setState({clientes:json.data.numerosclientes})
    this.setState({cidades:json.data.cidadesatendidas})
    this.setState({experiencia:json.data.anosexperiencia})
    this.setState({facebook:json.data.facebook})
    this.setState({instagram:json.data.instagram})
    this.setState({sobre:json.data.sobre})
    this.setState({logo:json.data.logo})
  })
}

handleItem(id, imagem, titulo, descricao){
  this.cleanStates();
  this.setState({iditem:id})
  this.setState({titulo:titulo})
  this.setState({descricao:descricao})
  this.setState({imagem:imagem})
  // this.handleModal();
}

handleSubmit(e){
  e.preventDefault();
  fetch(ecommerceAPI.BASE_URL_API+'company/editInfos', {
    method:'POST',
    body:JSON.stringify({
        jwt:Cookie.get('token'),
        nome:this.state.nomefantasia,
        logradouro:this.state.logradouro,
        numero:this.state.numero,
        bairro:this.state.bairro,
        estado:this.state.estado,
        cidade:this.state.cidade,
        telefone:this.state.telefone,
        clientes:this.state.clientes,
        cidades:this.state.cidades,
        experiencia:this.state.experiencia,
        facebook:this.state.facebook,
        instagram:this.state.instagram,
        sobre:this.state.sobre,
        whatsapp:this.state.whatsapp
    })
    })
    .then(r=>r.json())
    .then(json=>{
        if(json.success){   
          this.showAlert("Alterações realizadas com sucesso!");
          this.getInfos();
          Cookie.set('sup', 2);
          Router.push('/painel');
        }
    })
}

showAlert(e){
  this.setState({alertaVisible:true})
  this.setState({alertaMsg:e})

  setTimeout(
  () => this.setState({ alertaVisible: false }), 
      4000
  );

}

closeAlerta(){
  this.setState({alertaVisible:false})
}

  render(){    
    return(    
      <Container>
        <Alerta 
            visible={this.state.alertaVisible}
            alertaMsg={this.state.alertaMsg}
            closeAlerta={this.closeAlerta}
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
        <TitlePage>Informações do escritório	</TitlePage>
        <ItemsArea>
          <form onSubmit={this.handleSubmit}>
            <Label>Nome fantasia(*)</Label>
            <Ipt required type='text' value={this.state.nomefantasia} onChange={e=>this.setState({nomefantasia:e.target.value})} />
            <Row>
              <BoxIpt>
                <Label>Endereço(*)</Label>
                <Ipt required type='text' value={this.state.logradouro} onChange={e=>this.setState({logradouro:e.target.value})}/>
              </BoxIpt>
              <BoxIpt>
                <Label>Número(*)</Label>
                <Ipt required type='text' value={this.state.numero} onChange={e=>this.setState({numero:e.target.value})}/>
              </BoxIpt>
            </Row>
            <Row>
              <BoxIpt>
                <Label>Bairro(*)</Label>
                <Ipt required type='text' value={this.state.bairro} onChange={e=>this.setState({bairro:e.target.value})}/>
              </BoxIpt>
              <BoxIpt>
                <Label>Estado(*)</Label>
                <Selector required onChange={e=>this.setState({estado:e.target.value})}>
                  <option value='' disabled selected>SELECIONE</option>
                  <option value='AC' selected={this.state.estado == 'AC' ? true : false}>AC</option>
                  <option value='AL' selected={this.state.estado == 'AL' ? true : false}>AL</option>
                  <option value='AP' selected={this.state.estado == 'AP' ? true : false}>AP</option>
                  <option value='AM' selected={this.state.estado == 'AM' ? true : false}>AM</option>
                  <option value='BA' selected={this.state.estado == 'BA' ? true : false}>BA</option>
                  <option value='CE' selected={this.state.estado == 'CE' ? true : false}>CE</option>
                  <option value='DF' selected={this.state.estado == 'DF' ? true : false}>DF</option>
                  <option value='ES' selected={this.state.estado == 'ES' ? true : false}>ES</option>
                  <option value='GO' selected={this.state.estado == 'GO' ? true : false}>GO</option>
                  <option value='MA' selected={this.state.estado == 'MA' ? true : false}>MA</option>
                  <option value='MT' selected={this.state.estado == 'MT' ? true : false}>MT</option>
                  <option value='MS' selected={this.state.estado == 'MS' ? true : false}>MS</option>
                  <option value='MG' selected={this.state.estado == 'MG' ? true : false}>MG</option>
                  <option value='PA' selected={this.state.estado == 'PA' ? true : false}>PA</option>
                  <option value='PB' selected={this.state.estado == 'PB' ? true : false}>PB</option>
                  <option value='PR' selected={this.state.estado == 'PR' ? true : false}>PR</option>
                  <option value='PE' selected={this.state.estado == 'PE' ? true : false}>PE</option>
                  <option value='PI' selected={this.state.estado == 'PI' ? true : false}>PI</option>
                  <option value='RJ' selected={this.state.estado == 'RJ' ? true : false}>RJ</option>
                  <option value='RN' selected={this.state.estado == 'RN' ? true : false}>RN</option>
                  <option value='RS' selected={this.state.estado == 'RS' ? true : false}>RS</option>
                  <option value='RO' selected={this.state.estado == 'RO' ? true : false}>RO</option>
                  <option value='RR' selected={this.state.estado == 'RR' ? true : false}>RR</option>
                  <option value='SC' selected={this.state.estado == 'SC' ? true : false}>SC</option>
                  <option value='SP' selected={this.state.estado == 'SP' ? true : false}>SP</option>
                  <option value='SE' selected={this.state.estado == 'SE' ? true : false}>SE</option>
                  <option value='TO' selected={this.state.estado == 'TO' ? true : false}>TO</option>
                </Selector>
              </BoxIpt>
              <BoxIpt>
                <Label>Cidade(*)</Label>
                <Ipt required type='text' value={this.state.cidade} onChange={e=>this.setState({cidade:e.target.value})}/>
              </BoxIpt>
            </Row>
            <Row>
              <BoxIpt>
                <Label>whatsapp(*)</Label>
                <NumberFormat customInput={Ipt} value={this.state.whatsapp} required onChange={e=>this.setState({whatsapp:e.target.value})} required format="(##)#####-####" placeholder='(00)00000-0000'/> 
              </BoxIpt>
              <BoxIpt>
                <Label>Telefone de Contato(*)</Label>
                <NumberFormat customInput={Ipt} value={this.state.telefone} required onChange={e=>this.setState({telefone:e.target.value})} required format="(##)#####-####" placeholder='(00)00000-0000'/> 
              </BoxIpt>
              <BoxIpt>
                <Label>Número de Clientes(*)</Label>
                <Ipt type='text' required value={this.state.clientes} onChange={e=>this.setState({clientes:onlyNumbers(e.target.value)})}/>
              </BoxIpt>
              <BoxIpt>
                <Label>Número de Cidades Atendidas(*)</Label>
                <Ipt type='text' required value={this.state.cidades} onChange={e=>this.setState({cidades:onlyNumbers(e.target.value)})}/>
              </BoxIpt>
              <BoxIpt>
                <Label>Anos de Experiência(*)</Label>
                <Ipt type='text' required value={this.state.experiencia} onChange={e=>this.setState({experiencia:onlyNumbers(e.target.value)})}/>
              </BoxIpt>
            </Row>
            <Row>
              <BoxIpt>
                <Label>Facebook</Label>
                <Ipt type='text' value={this.state.facebook} onChange={e=>this.setState({facebook:e.target.value})} placeholder={'https://facebook.com/suaconta'}/>
              </BoxIpt>
              <BoxIpt>
                <Label>Instagram</Label>
                <Ipt type='text' value={this.state.instagram} onChange={e=>this.setState({instagram:e.target.value})} placeholder={'https://instagram.com/suaconta'}/>
              </BoxIpt>
            </Row>
            <Row>
              <BoxIpt>
                <Label>Pequeno texto sobre a empresa</Label>
                <TextArea value={this.state.sobre} onChange={e=>this.setState({sobre:e.target.value})} />
              </BoxIpt>
            </Row>
            <Salvar>Salvar</Salvar>
          </form>
        </ItemsArea>
        <TitlePage>Logo</TitlePage>
        <Logo src={this.state.logo} />
        <Upload 
            data={this.props.iditem}
            error={this.state.error}
            alert={this.state.alert}
            getInfos={this.getInfos}
        />
      </Container>
    )
  }
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default InformacoesPainel;