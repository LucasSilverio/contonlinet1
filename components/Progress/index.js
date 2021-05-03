import React, { Component } from 'react';
import Cookie from 'js-cookie';
import Link from 'next/link';
import Router from 'next/router';
import Loader from 'react-loader-spinner';
import { 
  Container, 
  Item,
  Icon,
  IconNext,
  Label,
  PageContainer,
} from './styled';
import { FirstColor, SecondColor, ThirdColor } from '../MainStyled';
import { SubTitulo, Titulo } from '../Principal/styled';
import NumberFormat from 'react-number-format'; 
import ecommerceAPI from '../../services/ecommerceAPI'; 

class Progress extends Component {

  constructor(props){
    super(props);
    this.state={
        loading:false,
    }
  }

  handleInfos(){
    Router.push('/panel/infos');
  }

  render(){ 
    return(
        <PageContainer bgColor={ThirdColor}>
            <Container>
                <Item>
                    <Icon src='/confirm.png' />
                    <Label>Cadastro Concluído</Label>
                </Item>
                <IconNext src='/next.png' />
                <Item>
                    {this.props.statuspg != 3 &&
                        <>
                            <Icon src='/notconfirm.png' />
                            <Label>Pagamento em análise</Label>
                        </>
                    }
                    {this.props.statuspg == 3 &&
                        <>
                            <Icon src='/confirm.png' />
                            <Label>Pagamento aprovado</Label>
                        </>
                    }
                </Item>
                <IconNext src='/next.png' />
                <Item>
                    {this.props.dominioconfigurado == 0 &&
                        <>
                            <Icon src='/notconfirm.png' />
                            <Label>Configurar Domínio</Label>
                        </>
                    }
                    {this.props.dominioconfigurado == 1 &&
                        <>
                            <Icon src='/confirm.png' />
                            <Label>Domínio Configurado</Label>
                        </>
                    }
                </Item>
                <IconNext src='/next.png' />
                <Item>
                    {this.props.dominioconfigurado == 0 &&
                        <>
                            <Icon src='/notconfirm.png' />
                            <Label>Configurando Acesso ao Painel</Label>
                        </>
                    }
                    {this.props.dominioconfigurado == 1 &&
                        <>
                            <Icon src='/confirm.png' />
                            <Label>Configurando Acesso ao Painel</Label>
                        </>
                    }
                </Item>
                 <IconNext src='/next.png' />
                <Item>
                    {this.props.acessoliberado &&
                        <>
                            <Icon src='/notconfirm.png' />
                            <Label>Acessar Painel da Loja</Label>
                        </>
                    }
                    {this.props.acessoliberado == 1 &&
                        <>
                            <Icon src='/confirm.png' />
                            <Label>Acessar Painel da Loja</Label>
                        </>
                    }
                </Item>
                {/*<IconNext src='/next.png' />
                <Item>
                    <Icon src='/notconfirm.png' />
                    <Label>Configurar Meios de Pagamento</Label>
                </Item>
                <IconNext src='/next.png' />
                <Item>
                    <Icon src='/notconfirm.png' />
                    <Label>Configurar Domínio Próprio</Label>
                </Item>
                <IconNext src='/next.png' />
                <Item>
                    <Icon src='/notconfirm.png' />
                    <Label>Configurar Frete</Label>
                </Item>
                <IconNext src='/next.png' />
                <Item>
                    <Icon src='/notconfirm.png' />
                    <Label>Cadastrar Produtos</Label>
                </Item> */}
            </Container>
        </PageContainer>
    )
  }
}

export default Progress;