import React, { Component } from 'react';
import Cookie from 'js-cookie';
import Link from 'next/link';
import Router from 'next/router';
import { Container, PageContainer, Paragrafo, Title, LinkBtn  } from './styled';
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
              <Title>Nós agradecemos e parabenizamos você pela escolha de adentrar ao digital com a <strong>cartb</strong></Title>
              <Paragrafo>Nós enviamos um e-mail para você com algumas informações importantes para darmos inicio na jornada rumo ao sucesso do seu e-commerce.</Paragrafo>
              <Paragrafo>Cheque seu e-mail, e qualquer dúvida, não exite em entrar em contato conosco.</Paragrafo>
              {Cookie.get('bill') != undefined &&
                <Link href={Cookie.get('bill')} prefetch={false} passHref={true}>
                    <LinkBtn target="_blank" rel="noreferrer">
                        Visualizar Boleto
                    </LinkBtn>
                </Link>
              }
              {Cookie.get('bill') == undefined &&
                <Paragrafo>Boleto enviado por e-mail.</Paragrafo>
              }
            </Container>
        </PageContainer>
    )
  }
}

export default Obrigado;