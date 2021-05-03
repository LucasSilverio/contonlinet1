import React, { Component } from 'react';
import Cookie from 'js-cookie';
import Link from 'next/link';
import Router from 'next/router';
import Loader from 'react-loader-spinner';
import { 
  Container, 
  Item,
  PageContainer,
  SideBar,
  SideBarLogo,
  SideBarLabel,
  SideBarTitle,
  SideBarRow
} from './styled';
import { FirstColor, SecondColor, ThirdColor } from '../MainStyled';
import { SubTitulo, Titulo } from '../Principal/styled';
import NumberFormat from 'react-number-format'; 
import ecommerceAPI from '../../services/ecommerceAPI'; 

class PanelAdmMaterias extends Component {

  constructor(props){
    super(props);
    this.state={
        loading:false,
    }
  }

  handleInfos(){
    Router.push('/admin/new-story');
  }

  handleAll(){
    Router.push('/admin/list');
  }

  render(){ 
    return(
        <PageContainer bgColor={ThirdColor}>
            <Container>
              {this.props.materias.map((i, index) => (
                <Link href={'/admin/'+i.slug}>
                  <Item>
                    {i.titulo}
                  </Item>
                </Link>
              ))}
            </Container>
        </PageContainer>
    )
  }
}

export default PanelAdmMaterias;