import React, { Component } from 'react';
import Link from 'next/link';
import Cookie from 'js-cookie';
import Loader from 'react-loader-spinner';
import { withRouter } from 'next/router';
import Router from 'next/router';
import { 
    Container,
    Drawer,
    Line,
    Lk,
    LineSoft,
    Logo,
    PageArea,
    Suporte
} from './styled';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';

class TopBar extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      slug:''
    }
    this.getInfos = this.getInfos.bind(this);
  }

  componentDidMount(){  
    this.getInfos();
  }

  getInfos(){
    osAPI.getInfosPanel(Cookie.get('token'))
    .then(r=>r.json())
    .then(json=>{
      this.setState({slug:json.data.slug})
    })
  }

  handleLogout(){
    Cookie.remove('token');
    Router.replace('/login');
  }

  render(){     
 
    return(   
      <PageArea> 
        <Container>
          <Logo src='/logoteste.svg' />
            <ul className='produtosArea'>
              <Lk icon={'produtos.png'}>Menu</Lk>
              <ul className='subProdutos'>
                <LineSoft />
                  <Link href='/painel'>
                    <Lk>
                      <li>Início</li>
                    </Lk>
                  </Link>
                <LineSoft />
                <Lk onClick={this.handleLogout}>
                  <li>Sair</li>
                </Lk>
                <LineSoft />
              </ul>
            </ul>
          <Line />
            <ul className='vendasArea'>
              <Link href={'/'+this.state.slug}>
                <a target={"_blank"}>Acessar o site</a>
              </Link>
              {/* <ul className='subVendas'>
                <LineSoft />
                  <Link href='/pedidos'>
                    <a>
                      <li>Pedidos Realizados</li>
                    </a>
                  </Link>
                  <LineSoft />
                  <Link href='/clientes'>
                    <a>
                      <li>Clientes</li>
                    </a>
                  </Link>
              </ul> */}
            </ul>
          <Line />
          {/* <Suporte></Suporte> */}
        </Container>
      </PageArea>
    )
  }
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default TopBar;