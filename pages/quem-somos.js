import React, { Component } from 'react';
import Head from 'next/head'
import Cookie from 'js-cookie';
import Router from 'next/router';
import osAPI from '../../services/osAPI';

import {AreaSite} from '../../components/MainStyled';
import Bottom from '../../components/Bottom';
import MenuFixed from '../../components/MenuFixed';
import QuemSomos from '../../components/Templates/Tp01/QuemSomos';
import Depoimentos from '../../components/Templates/Tp01/Depoimentos';
import Contador from '../../components/Templates/Tp01/Contador';

class Contato extends Component {

  constructor(props){
    super(props);
    this.state={
      logged:0,
      exibirModal:false,
      popup:false,
    }
  }
 
  static async getInitialProps({query}) {
    let el = query.cat
    const res = await osAPI.getInfos(el);
    const info = await res.json();

    const reqdepoimentos = await osAPI.getDepoimentos(el);
    const depoimentos = await reqdepoimentos.json();
    return {
      info:info.data,
      depoimentos,
      el
    }
  } 

  componentDidMount(){
  }

  checkPopup(){
  }

  handleModal(){

  }

  render(){
    return(
      <>
        <Head>
        <meta charset='utf-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
        <meta name='description' content={'Escritório de contabilidade em Frutal-Mg.'}/>
        <meta name='keywords' content='Keywords' />
        <title>{'Renove Escritório de Contabilidade | Contato'}</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content={'#FFF'}/>
       </Head>
       <AreaSite onMouseLeave={e=>this.handleModal()}>
            <MenuFixed 
             infos={this.props.info}  
             clientslug={this.props.el}
            />
            <QuemSomos
             infos={this.props.info}  
            />
            <Depoimentos
              depoimentos={this.props.depoimentos.data}
              infos={this.props.info} 
            />
            <Contador
             infos={this.props.info}       
            />
            <Bottom
              infos={this.props.info}
            />
       </AreaSite>
      </>
    )
  }
} 

export default Contato;
 