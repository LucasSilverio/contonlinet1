import React, { Component } from 'react';
import Cookie from 'js-cookie';
import Link from 'next/link';
import Router from 'next/router';
import { Container, PageContainer, Paragrafo, Title  } from './styled';
import { FirstColor, SecondColor, ThirdColor } from '../MainStyled';
import { SubTitulo, Titulo} from '../Principal/styled';
import NumberFormat from 'react-number-format'; 
import ecommerceAPI from '../../services/ecommerceAPI'; 
import osAPI from '../../services/osAPI';

class Obrigado extends Component {

  constructor(props){
    super(props);
    this.state={}    
  }  

  render(){ 
    return(
        <PageContainer bgColor={ThirdColor}>
            <Container>
              <Title>Nós agradecemos e parabenizamos você pela escolha de adentrar ao digital com a <strong>ContOnline</strong></Title>
              <Paragrafo>Seu pagamento está sendo processado pela PagSeguro, e em breve enviaremos um e-mail para você com maiores informações.</Paragrafo>
              <Paragrafo>Nós enviamos um e-mail para você com algumas informações importantes para darmos inicio na jornada rumo ao sucesso do seu escritório de contabilidade.</Paragrafo>
              <Paragrafo>Cheque seu e-mail, e qualquer dúvida, não exite em entrar em contato conosco.</Paragrafo>
            </Container>
        </PageContainer>
    )
  }
}

export default Obrigado;