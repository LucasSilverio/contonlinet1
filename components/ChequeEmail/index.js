import React, { Component } from 'react';
import Cookie from 'js-cookie';
import Link from 'next/link';
import Router from 'next/router';
import { BtnAction, Bottom, BoxForm, Container, PageContainer, Title } from './styled';
import { FirstColor, SecondColor, ThirdColor } from '../MainStyled';

class ChequeEmail extends Component {

  constructor(props){
    super(props);
    this.state={
        identifyVisible:true,
    }
    
  }

  render(){
    return(
        <>
            <PageContainer bgColor={ThirdColor}>
                <Container>
                    {this.state.identifyVisible &&
                        <>
                            <Title>Cheque seu e-mail para continuar</Title>
                            <BoxForm>
                                Para continuar, acesse seu e-mail e cadastre uma senha de acesso ao painel do site clicando no link que enviaremos.
                            </BoxForm>
                        </>
                    }
                </Container>
            </PageContainer>
        </>
    )
  }
}

export default ChequeEmail;