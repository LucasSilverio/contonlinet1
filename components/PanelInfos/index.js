import React, { Component } from 'react';
import Cookie from 'js-cookie';
import Link from 'next/link';
import Router from 'next/router';
import Loader from 'react-loader-spinner';
import osAPI from '../../services/osAPI';
import { 
  BtnAction,
  Container, 
  LoaderArea,
  Opcao,
  OpcaoIcon,
  OpcaoLabel,
  PageContainer,
  FormLabel,
  Ipt,
  SideBarRow
} from './styled';
import PanelNavigation from '../PanelNavigation';
import { FirstColor, SecondColor, ThirdColor } from '../MainStyled';
import { SubTitulo, Titulo } from '../Principal/styled';
import NumberFormat from 'react-number-format'; 
import ecommerceAPI from '../../services/ecommerceAPI'; 

class PanelInfos extends Component {

  constructor(props){
    super(props);
    this.state={
        loading:false,
        nomeloja:'',
        cnpj:''
    }
    this.getInfos = this.getInfos.bind(this);
    this.submit = this.submit.bind(this)
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
      }
    })
  }

  handleInfos(){
    Router.push('/panel/infos');
  }

  submit(e){
    e.preventDefault();
    this.props.updateInfos(this.state.nomeloja, this.state.cnpj)
  }

  render(){ 
    console.log('comp: '+this.props.nomeloja)
    return(
        <PageContainer bgColor={ThirdColor}>
            <PanelNavigation
              dest='/panel'
            />
            <Container>
              <form onSubmit={this.submit}>
                <FormLabel>Nome da loja</FormLabel>
                  <Ipt type='text' required value={this.state.nomeloja} onChange={e=>this.setState({nomeloja:e.target.value})} />
                <FormLabel>Cnpj</FormLabel>
                  <NumberFormat customInput={Ipt} value={this.state.cnpj} onChange={e=>this.setState({cnpj:e.target.value})} format="##.###.###/####-##" placeholder='CNPJ'/>
                  {/* <Ipt type='text' value={this.state.cnpj} onChange={e=>this.setState({cnpj:e.target.value})} /> */}
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
            </Container>
        </PageContainer>
    )
  }
}

export default PanelInfos;