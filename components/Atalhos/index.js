import React, { Component } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Router from 'next/router';;
import { 
    Container,
    ItemsArea,
    Item,
    ItemIcon,
    Label,
    TitlePage,

} from './styled';
 
class Atalhos extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      
    }
    
  }

componentDidMount(){

}

    render(){     
      
        return(    
          <Container>
            <TitlePage>Atalhos Rápidos</TitlePage>
            <ItemsArea>
              <Link href='/conteudo/informacoes'>
                <Item>
                  <ItemIcon src='/infos.png' />
                  <Label>Informações</Label>
                </Item>
              </Link>
              <Link href='/conteudo/banners'>
                <Item>
                  <ItemIcon src='/monitor.png' />
                  <Label>Banners</Label>
                </Item>
              </Link>
              <Link href='/conteudo/valores'>
                <Item>
                  <ItemIcon src='/valores.png' />
                  <Label>Valores da Empresa</Label>
                </Item>
              </Link>
              <Link href='/conteudo/depoimentos'>
                <Item>
                  <ItemIcon src='/depoimentos.png' />
                  <Label>Depoimentos</Label>
                </Item>
              </Link>
              <Link href='/conteudo/servicos'>
                <Item>
                  <ItemIcon src='/servicos.png' />
                  <Label>Serviços Oferecidos</Label>
                </Item>
              </Link>
              <Link href='/conteudo/faq'>
                <Item>
                  <ItemIcon src='/faq.png' />
                  <Label>Perguntas Frequêntes</Label>
                </Item>
              </Link>
              <Link href='/conteudo/blog'>
                <Item>
                  <ItemIcon src='/blogIcon.svg' />
                  <Label>Blog</Label>
                </Item>
              </Link>
              <Link href='/conteudo/layout'>
                <Item>
                  <ItemIcon src='/template.svg' />
                  <Label>Template do Site</Label>
                </Item>
              </Link>
            </ItemsArea>
          </Container>
        )
    }
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default Atalhos;