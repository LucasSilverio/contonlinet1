import React, { Component } from 'react';
import Cookie from 'js-cookie';
import Router from 'next/router';
import Loader from 'react-loader-spinner';
import osAPI from '../../services/osAPI';
import Switch from "react-switch";
import { 
  Analise,
  BtnAction,
  Container, 
  LoaderArea,
  PageContainer,
  FormLabel,
  Info,
  Ipt,
  StatusArea,
} from './styled';
import PanelNavigation from '../PanelNavigation';
import { FirstColor, SecondColor, ThirdColor } from '../MainStyled';

class PanelInfos extends Component {

  constructor(props){
    super(props);
    this.state={
        loading:false,
        nomeloja:'',
        cnpj:'',
        dominio:'',
        hasDomain:false,
        checked:false,
        analise:false
    }
    this.getInfos = this.getInfos.bind(this);
    this.submit = this.submit.bind(this)
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.getInfos();
  }

  getInfos(){
    osAPI.getPanelInfos(Cookie.get('tk'))
    .then(r=>r.json())
    .then(json=>{
      if(json.success){
        this.setState({nomeloja:json.data.nomeloja})
        this.setState({nome:json.data.nome})
        this.setState({cnpj:json.data.cnpj})
        this.setState({dominio:json.data.dominio})
        this.setState({hasDomain:json.data.hasDomain})
        if(json.data.possuidominio == 1){
          this.setState({checked:true})
        }
        if(json.data.dominio != ''){
          this.setState({analise:true})
        }
      }
    })
  }

  handleInfos(){
    Router.push('/panel/infos');
  }

  handleDominio(){
  }

  handleChange(){
    this.setState({checked:!this.state.checked})
  }

  submit(e){
    e.preventDefault();
    this.props.setDominio(this.state.dominio, this.state.checked)
  }

  render(){ 
    console.log(this.props.dominio)
    return(
        <PageContainer bgColor={ThirdColor}>
            <PanelNavigation
              dest='/panel'
            />
            <Container>
              <StatusArea>
                <Switch 
                  onChange={this.handleChange} 
                  checked={this.state.checked} 
                  onColor="#5C6BF2"
                />
                {this.state.checked ? 'J?? possuo dom??nio pr??prio' : 'Ainda n??o possuo dom??nio pr??prio'}
              </StatusArea>
              {!this.state.checked &&
                <form onSubmit={this.submit}>
                  <FormLabel>Informe o dom??nio desejado para registro</FormLabel>
                  <Ipt type='text' disabled={this.state.analise ? true : false}  required value={this.state.dominio} onChange={e=>this.setState({dominio:e.target.value})} placeholder='sualoja.com.br'/>
                  <Info>* O dom??nio precisa estar dispon??vel para registro</Info>
                  <Info>* Ap??s consulta de disponibilidade, o dom??nio ser?? registrado e poder?? ser utilizado</Info>
                  {!this.props.loading &&
                    <BtnAction>Salvar</BtnAction>
                  }    
                  {this.props.loading &&
                    <LoaderArea>
                      <Loader
                        type='TailSpin'
                        color='#5C6BF2'
                        height={36}
                        width={36}
                      />
                    </LoaderArea>
                  }            
                </form>
              }
              {this.state.checked &&
                <form onSubmit={this.submit}>
                  <FormLabel>Informe o endere??o do seu dom??nio</FormLabel>
                  <Ipt type='text' disabled={this.state.analise ? true : false} required value={this.state.dominio} onChange={e=>this.setState({dominio:e.target.value})} placeholder='sualoja.com.br'/>
                  <Info>Caso j?? possua um dom??nio registrado, ser?? necess??rio alterar os nameservers do dom??nio para:</Info>
                  <Info>ns1.vercel-dns.com</Info>
                  <Info>ns2.vercel-dns.com</Info>
                  {!this.props.loading &&
                    <BtnAction>Salvar</BtnAction>
                  }    
                  {this.props.loading &&
                    <LoaderArea>
                      <Loader
                        type='TailSpin'
                        color='#5C6BF2'
                        height={36}
                        width={36}
                      />
                    </LoaderArea>
                  }            
                </form>
              }
              {this.state.analise &&
                <Analise>O dom??nio est?? sendo configurado. Em breve estar?? conclu??do.</Analise>
              }
            </Container>
        </PageContainer>
    )
  }
}

export default PanelInfos;