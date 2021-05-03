import React, { Component } from 'react';
import Cookie from 'js-cookie';
import Link from 'next/link';
import Router from 'next/router';
import Loader from 'react-loader-spinner';
import { BtnAction, Bottom, BoxForm, Container, ContentArea, Content, ContentFlex, Ipt, Img, Items, Item, LoadArea, PageContainer, PrecoArea, PrecoLegend, PrecoLegendBottom, Preco, Paragrafo, Row, Riscado, Sm, Select, SubTitle, Title, Top } from './styled';
import { FirstColor, SecondColor, ThirdColor } from '../MainStyled';
import { SubTitulo, Titulo } from '../Principal/styled';
import NumberFormat from 'react-number-format'; 
import ecommerceAPI from '../../services/ecommerceAPI'; 
import osAPI from '../../services/osAPI';

class FormularioComp extends Component {

  constructor(props){
    super(props);
    this.state={
        identifyVisible:true,
        complementaryInfosVisible:false,
        segmento:'',
        cep:'',
        endereco:'',
        numero:'',
        complemento:'',
        bairro:'',
        cidade:'',
        estado:'',
        nomeLoja:'',
        cepError:false,
        segmentos:[],
        loading:false
    }

    this.changeSegmento = this.changeSegmento.bind(this);
    this.changeCep = this.changeCep.bind(this);
    this.getSegmentos = this.getSegmentos.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount(){
    this.getSegmentos();
  }

  changeCep(c){
    let e = c.replace(/\D/g, '');
    this.setState({cep:e});
    if(e.length === 8){
      osAPI.consultaCep(e)
      .then(r=>r.json())
      .then(json=>{
          console.log(json)
          if(!json.erro){
              this.setState({endereco:json.logradouro});
              this.setState({bairro:json.bairro});
              this.setState({estado:json.uf});
              this.setState({cidade:json.localidade});
              this.setState({cepError:false});
          }else{
              this.setState({cepError:true});
          }
          
      })
    }    
  }

  changeSegmento(e){
    this.setState({segmento:e})
  } 

  getSegmentos(){
    osAPI.getSegmentos()
    .then(r=>r.json())
    .then(json=>{
        this.setState({segmentos:json.data});
    })
  }

  submit(e){
      e.preventDefault();
      this.setState({loading:true});
      if(this.state.cep !== '' && this.state.endereco !== '' && this.state.numero !== '' && this.state.bairro !== '' && this.state.cidade !== '' && this.state.estado !== '' && this.state.nomeloja !== '' && Cookie.get('tk') != undefined){
        fetch(ecommerceAPI.BASE_URL_API+'register/update', {
            method:'POST',
            body:JSON.stringify({
                token:Cookie.get('tk'),
                plano:Cookie.get('pcit'),
                cep:this.state.cep,
                endereco:this.state.endereco,
                numero:this.state.numero,
                bairro:this.state.bairro,
                cidade:this.state.cidade,
                estado:this.state.estado,
                nomeloja:this.state.nomeLoja,
                segmento:this.state.segmento
            })
        })
        .then(r=>r.json())
        .then(json=>{
            if(json.success){
                // Cookie.set('email', this.state.email, {expires:0.1});
                // Cookie.set('pcit', this.props.item, {expires:0.1});
                // this.setState({identifyVisible:false});
                Router.push('/add/checkout');
            }
        })
        this.setState({loading:false});
      }
      this.setState({loading:false});
  }

  render(){ 
    return(
        <>
            <PageContainer bgColor={ThirdColor}> 
                <Container>
                    {this.state.identifyVisible &&
                        <>
                            <Title>Precisamos de mais algumas informações antes de continuar</Title>
                            <BoxForm>
                                <form onSubmit={this.submit}>
                                    <Row>
                                        <NumberFormat customInput={Ipt} required value={this.state.cep} onChange={e=>this.changeCep(e.target.value)} format="#####-###" placeholder='CEP'/>
                                        <Ipt type='text' s='2' required value={this.state.endereco} onChange={e=>this.setState({endereco:e.target.value})} placeholder='ENDEREÇO'/>
                                        <Ipt type='text' s='1' required value={this.state.numero} onChange={e=>this.setState({numero:e.target.value})} placeholder='NÚMERO'/>
                                    </Row>
                                    <Row>
                                        <Ipt type='text' s='1' value={this.state.complemento} onChange={e=>this.setState({complemento:e.target.value})} placeholder='COMPLEMENTO'/>
                                        <Ipt type='text' s='2' required value={this.state.bairro} onChange={e=>this.setState({bairro:e.target.value})} placeholder='BAIRRO'/>
                                        <Ipt type='text' s='2' required value={this.state.cidade} onChange={e=>this.setState({cidade:e.target.value})} placeholder='CIDADE'/>
                                        <Ipt type='text' s='1' required value={this.state.estado} onChange={e=>this.setState({estado:e.target.value})} placeholder='ESTADO'/>
                                    </Row>
                                    <Row>
                                        <Ipt type='text' s='2' required value={this.state.nomeLoja} onChange={e=>this.setState({nomeLoja:e.target.value})} placeholder='NOME DA LOJA' />
                                        <Select s='2' onChange={e=>this.changeSegmento(e.target.value)}>
                                            <option value='' disabled selected>SEGMENTO</option>
                                            {this.state.segmentos.map((i, index) => (
                                                <option value={i.id}>{i.nome}</option>
                                            ))}
                                        </Select>
                                    </Row>
                                    {!this.state.loading &&
                                        <BtnAction bgColor={SecondColor}>PROSSEGUIR PARA CHECKOUT</BtnAction>
                                    }
                                    {this.state.loading &&
                                        <LoadArea>
                                            <Loader
                                                type="TailSpin"
                                                color="#101759"
                                                height={50}
                                                width={50}
                                            />
                                        </LoadArea>
                                    }
                                </form>
                            </BoxForm>
                        </>
                    }
                </Container>
            </PageContainer>
        </>
    )
  }
}

export default FormularioComp;