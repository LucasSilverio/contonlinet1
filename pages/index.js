import App from 'next/app';
import React, { Component } from 'react';
import Head from 'next/head'
import Link from 'next/link';
import Cookie from 'js-cookie';
import Router from 'next/router';
import companyInfos from '../services/companyInfos';

import {AreaSite} from '../components/MainStyled';
import Bottom from '../components/Bottom';
import BottomForm from '../components/BottomFormCliente';
import MenuFixed from '../components/MenuFixed'; 
import WhatsApp from '../components/WhatsApp';
// Template 01 **********
  import AtencaoContato from '../components/Templates/Tp01/AtencaoContato';
  import Banner from '../components/Templates/Tp01/Banner';
  import Contador from '../components/Templates/Tp01/Contador';
  import Depoimentos from '../components/Templates/Tp01/Depoimentos';
  import Faq from '../components/Templates/Tp01/Faq';
  import Servicos from '../components/Templates/Tp01/Servicos';
  import Valores from '../components/Templates/Tp01/Valores';
// ************************

// Template 02 **********
  import BannerTp02 from '../components/Templates/Tp02/Banner';
  import ContadorTp02 from '../components/Templates/Tp02/Contador';
  import SobreTp02 from '../components/Templates/Tp02/Sobre';
  import ServicosTp02 from '../components/Templates/Tp02/Servicos';
  import FaleConoscoTp02 from '../components/Templates/Tp02/FaleConosco';
// ************************

// Template 03 **********
  import BannerTp03 from '../components/Templates/Tp03/Banner';
  import MenuFixedTp03 from '../components/Templates/Tp03/MenuFixed'; 
  import ContadorTp03 from '../components/Templates/Tp03/Contador';
  import DepoimentosTp03 from '../components/Templates/Tp03/Depoimentos';
  import SobreTp03 from '../components/Templates/Tp03/Sobre';
  import ServicosTp03 from '../components/Templates/Tp03/Servicos';
  import FaleConoscoTp03 from '../components/Templates/Tp03/FaleConosco';
  import TopBarTp03 from '../components/Templates/Tp03/TopBar';
// ************************





// import BannerCat from '../components/BannerCat';
// import Destaques from '../components/Destaques';
// import Feed from '../components/Feed';
// import Menu from '../components/Menu';
// import ModalNewsLetter from '../components/ModalNewsLetter';
// import NewsLetter from '../components/NewsLetter';
// import SubBanner from '../components/SubBanner';
// import TopBar from '../components/TopBar';
// import WhatsApp from '../components/WhatsApp';
// import { FirstColor } from '../components/MainStyled'; 

import osAPI from '../services/osAPI';


class Categoria extends Component {

  constructor(props){
    super(props);
    this.state={
      logged:0,
      exibirModal:false,
      titulo:'',
      subtitulo:'',
      altura_atual:0,
      userContact:false
    }
    this.handleModal = this.handleModal.bind(this);
    this.handleContact = this.handleContact.bind(this);   
    this.scrollTest = this.scrollTest.bind(this)
  } 

  static async getInitialProps({query, res, req}) {
    // let el = query.cat
    let el = companyInfos.companySlug;

    const resi = await osAPI.getInfosSite(el);
    const info = await resi.json();
    if(req){
      if(!info.success){
        res.writeHead(301, {
          Location:'/'
        });
        res.end();
      }
    }else{
      if(!info.success){
        Router.push('/')
      }
    }   

    const reqservicos = await osAPI.getServicos(el);
    const servicos = await reqservicos.json();

    const reqvalores = await osAPI.getValores(el);
    const valores = await reqvalores.json();

    const reqdepoimentos = await osAPI.getDepoimentos(el);
    const depoimentos = await reqdepoimentos.json();

    const reqfaq = await osAPI.getFaq(el);
    const faq = await reqfaq.json();
    
 
    return {
      info:info.data,
      teste:info,
      el,
      servicos,
      valores,
      depoimentos,
      faq,
      // res
      // data:json.data,
      // hasPromo:json.hasPromo,
      // query,
      // filter:optRes,
      // subBanners:subbanners.data,
      // pinfos:j,
      // cp,
      // cat:c,
      // fbpx:fbpx.data,
      // gtag1:Analytic.data.gtag1,
      // gtag2:Analytic.data.gtag2
    }
  }
  
 
  componentDidMount(){
    // import('react-facebook-pixel')
    // .then((x) => x.default)
    // .then((ReactPixel) => {
    //   ReactPixel.init(this.props.fbpx);
    //   ReactPixel.track('ViewContent',{
    //     content_name:this.props.cat
    //   })

    //   Router.events.on('routeChangeComplete', () => {
        
    //   });
    // });

    Cookie.set('slug', this.props.el, {expires:0.005});
    window.addEventListener('scroll', this.scrollTest);
  }

  handleModal(){
    if(Cookie.get('mp') == undefined && this.state.popup){
      this.setState({exibirModal:!this.state.exibirModal});
      Cookie.set('mp', 1, { expires: 0.2 });
    }
  }

  handleContact(){
    this.setState({userContact:true});
    this.setState({exibirModal:!this.state.exibirModal});
  }

  scrollTest(){
    this.setState({altura_atual:window.scrollY});
  }

  // closeModal(){
  //   this.setState({exibirModal:false});
  // }

  render(){
    // let obj = this.props.data;
    // let values = Object.keys(obj).map(function(e) {
    //     return obj[e]
    // })
    return(
      <>
        <Head>
        {/* <script
          async
          src={this.props.gtag1}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: this.props.gtag2,
          }}
        /> */}
         <meta charset='utf-8' />
         <meta http-equiv='X-UA-Compatible' content='IE=edge' />
         <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
         <meta name='description' content='Description' />
         <meta name='keywords' content='Keywords' />
         <title>{this.props.info.nomefantasia+' Escritório de Contabilidade em '+this.props.info.cidade}</title>
         <link rel="manifest" href="/manifest.json" />
         <meta name="theme-color" content={'#00f'}/>
       </Head>
       <AreaSite onMouseLeave={e=>this.handleModal()}>
        
        {this.props.info.template == 1 &&
          <>
            <MenuFixed
              infos={this.props.info}
              clientslug={this.props.el}
            /> 
            <Banner 
              cliente={this.props.el}
            />  
            <BottomForm
              infos={this.props.info}
              altura={this.state.altura_atual}
              handleContact={this.handleContact}
              convertion={1} //1 - Telefone; 2 - Email; 3 - Whatsapp;
            /> 
            <Servicos
              servicos={this.props.servicos.data}
              infos={this.props.info}
            />   
            <Valores
              valores={this.props.valores.data}
              infos={this.props.info}
            /> 
            <Contador
              infos={this.props.info}       
            />
            <Depoimentos
              depoimentos={this.props.depoimentos.data}
              infos={this.props.info}
            />
            <AtencaoContato
              infos={this.props.info}       
            />
            <Faq
              faq={this.props.faq.data}
            />
          </>
        }
        {this.props.info.template == 2 &&
          <>
            <MenuFixed
              infos={this.props.info}
              clientslug={this.props.el}
            /> 
            <BannerTp02 
              cliente={this.props.el}
            /> 
            <BottomForm
              infos={this.props.info}
              altura={this.state.altura_atual}
              handleContact={this.handleContact}
              convertion={2} //1 - Telefone; 2 - Email; 3 - Whatsapp;
            /> 
            <SobreTp02
              infos={this.props.info}
              cliente={this.props.el}
            />
            <ServicosTp02
              infos={this.props.info} 
              cliente={this.props.el}
              servicos={this.props.servicos.data}
            /> 
            <ContadorTp02
              infos={this.props.info}   
              depoimentos={this.props.depoimentos.data}    
            />             
            <FaleConoscoTp02
              depoimentos={this.props.depoimentos.data}
              infos={this.props.info} 
              cliente={this.props.el}
            />
          </>
        }
        {this.props.info.template == 3 &&
          <>
            <TopBarTp03
              infos={this.props.info}
              clientslug={this.props.el}
            />
            <MenuFixedTp03
              infos={this.props.info}
              clientslug={this.props.el}
            /> 
            <BannerTp03 
              cliente={this.props.el}
            /> 
            <DepoimentosTp03
              depoimentos={this.props.depoimentos.data}
              infos={this.props.info}
            />
            <BottomForm
              infos={this.props.info}
              altura={this.state.altura_atual}
              handleContact={this.handleContact}
              convertion={2} //1 - Telefone; 2 - Email; 3 - Whatsapp;
            /> 
            <SobreTp03
              infos={this.props.info}
              cliente={this.props.el}
            />
            <ServicosTp03
              infos={this.props.info} 
              cliente={this.props.el}
              servicos={this.props.servicos.data}
            /> 
            <ContadorTp03
              infos={this.props.info}   
              depoimentos={this.props.depoimentos.data}    
            />             
            <FaleConoscoTp03
              depoimentos={this.props.depoimentos.data}
              infos={this.props.info} 
              cliente={this.props.el}
            />
          </>
        }
        <Bottom 
          infos={this.props.info}
          clientslug={this.props.el}
        />
        <WhatsApp />
       </AreaSite>
      </>
    )
  }
}

export default Categoria;
