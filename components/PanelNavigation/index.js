import React, { Component } from 'react';
import Cookie from 'js-cookie';
import Link from 'next/link';
import Router from 'next/router';
import Loader from 'react-loader-spinner';
import { 
  Container, 
  Lk,
  PageContainer
} from './styled';
import { FirstColor, SecondColor, ThirdColor } from '../MainStyled';
import { SubTitulo, Titulo } from '../Principal/styled';
import NumberFormat from 'react-number-format'; 
import ecommerceAPI from '../../services/ecommerceAPI'; 

class PanelNavigation extends Component {

  constructor(props){
    super(props);
    this.state={
        loading:false,
    }
  }

  componentDidMount(){
    this.setState({nomeloja:this.props.nomeloja})
  }

  handleInfos(){
    Router.push('/panel/infos');
  }

  render(){ 
    return(
        <PageContainer bgColor={ThirdColor}>
            <Container>
              <Link href={this.props.dest}>
                <Lk>Voltar</Lk>
              </Link>
            </Container>
        </PageContainer>
    )
  }
}

export default PanelNavigation;