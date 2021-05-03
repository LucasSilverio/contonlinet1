import React, { Component } from 'react';
import Cookie from 'js-cookie';
import Link from 'next/link';
import Router from 'next/router';
import Loader from 'react-loader-spinner';
import { BtnAction, Bottom, BoxForm, BoxInput, BoxInputSm, Container, ContentArea, Content, ContentFlex, ColumnBox, ColumnBoxSm, Desc, FormBox, Ipt, IptForm, IptFormSm, Img, Items, Item, Label, LoadArea, PageContainer, PaymentImg, PaymentItem, PrecoArea, PrecoLegend, PrecoLegendBottom, PaymentMethod, Preco, Paragrafo, ResumoMob, ResumoTitle, ResumoItemTitle, ResumoItemPic, ResumoItems, ResumoItem, Row, Riscado, Sm, Select, SubTitle, SeloProtegido, Salvar, Title, Top } from './styled';
import { FirstColor, SecondColor, ThirdColor } from '../MainStyled';
import { SubTitulo, Titulo } from '../Principal/styled';
import NumberFormat from 'react-number-format'; 
import ecommerceAPI from '../../services/ecommerceAPI'; 
import osAPI from '../../services/osAPI';

class FormularioPagamento extends Component {

  constructor(props){
    super(props);
    this.state={
        alertaE:'',
        alertaM:'',
        id:'',
        identifyVisible:true,
        complementaryInfosVisible:false,
        amount:0,
        frete:0,
        nome:'',
        cpf:'',
        telefone:'',
        cartao:'',
        cvv:'',
        maxCVV:0,
        cardBand:'',
        validadeM:'',
        validadeY:'',
        parc:[],
        parcelas:'',
        loading:false,
        pagamentoCartao:true,
        pagamentoBoleto:false,
        dataNascimento:'',
        frequency:1
    }
    
    this.changeCartao = this.changeCartao.bind(this);
    this.changeTelefone = this.changeTelefone.bind(this);
    this.getParcelamentos = this.getParcelamentos.bind(this);
    this.handleCartao = this.handleCartao.bind(this);
    this.handleBoleto = this.handleBoleto.bind(this);
    this.submit = this.submit.bind(this);
    this.handleSubmitBoleto = this.handleSubmitBoleto.bind(this);
  }

  componentDidMount(){
    window.bandeira = '';

    osAPI.getSessionCode()
    .then(r=>r.json())
    .then(json=>{
        // console.log(json);
        this.setState({session:json.sessionCode});
        this.scriptLoaded(json.sessionCode);
    });

    const script = document.createElement("script");
    // script.src = "https://stc.sandbox.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js"; 
    script.src = "https://stc.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js";
    script.async = true;
    
    document.body.appendChild(script);
    this.pcitInfo();
  }

  pcitInfo(){
      osAPI.pcitInfo(Cookie.get('pcit'))
      .then(r=>r.json())
      .then(json=>{
        this.setState({amount:json.data.valorpromocional})
        this.setState({frequency:json.data.frequencia})
      })
  }

  changeSegmento(e){
    this.setState({segmento:e})
  } 

  changeCpf(c){
    let e = c.replace(/\D/g, '');
    this.setState({cpf:e});
  }

  changeTelefone(c){
    let e = c.replace(/\D/g, '');
    this.setState({telefone:e});
  }

  changeMes(c){
    let e = c.replace(/\D/g, '');
    if(e < 13){
        this.setState({validadeM:e});
    }    
  }

  changeAno(c){
    let e = c.replace(/\D/g, '');
    this.setState({validadeY:e});
  }

  changeCartao(c){
    let e = c.replace(/\D/g, ''); 
    this.setState({cartao:e});
    if(this.state.cartao.length == 6){
        PagSeguroDirectPayment.getBrand({
            cardBin:this.state.cartao,
            success:function(r){
                window.bandeira = r.brand.name;
                this.setState({maxCVV:r.brand.cvvSize});
                
            }.bind(this),
            error:function(r){
                // console.log(r);
            },
            complete:function(r){}
        })
    }
    this.setState({cardBand:bandeira});
    if(this.state.cardBrand !== '' && this.state.cartao.length == 8){
        this.getParcelamentos(bandeira);
    }
  }

  changeCvv(e){
    this.setState({cvv:e});
  }

  getParcelamentos(bandeira){
    // let band = this.state.cardBand;
    let band = bandeira;
    let st = 0;
    PagSeguroDirectPayment.getInstallments({
        amount:this.state.amount,
        // brand:this.state.cardBand,
        brand:bandeira,
        maxInstallmentNoInterest:this.state.frequency,
        success:function(r){
            if(r.error == false){
                // console.log(r.installments[band]);
                this.setState({parc:r.installments[band]});
                this.setState({loadingInput:false})
            }
        }.bind(this),
        error:function(r){
            // console.log(r);
            // console.log('deu erro');
        },
        complete:function(r){}

    });
  }  

  handleCartao(){
    this.setState({pagamentoCartao:true})
    this.setState({pagamentoBoleto:false})
  }

  handleBoleto(){
    this.setState({pagamentoCartao:false})
    this.setState({pagamentoBoleto:true})
  }

  newPurchase(e){      
    fetch(ecommerceAPI.BASE_URL_API+'vendas/newPurchase', {
        method:'POST',
        body:JSON.stringify({
            jwt:Cookie.get('tk'),
            valor:parseFloat(this.state.amount),
            frete:this.state.frete,
            formapg:1,
            produto:Cookie.get('pcit'),
            idps:this.state.id,
            token:e,
            parcelas:this.state.parcelas,
            cardName:this.state.nome,
            cardCpf:this.state.cpf,
            cardTel:this.state.telefone,
            cardBirth:this.state.dataNascimento
        })
    })
    .then(r=>r.json())
    .then(json=>{
        if(json.error == '' && json.cod){
            this.setState({sellCode:json.cod});
            Cookie.set('conclude', 1, {expires:0.01});
            Cookie.remove('email');
            Cookie.remove('pcit')
            Cookie.remove('tk');

            Router.push('/add/obrigado');
        }
        this.setState({loading:false})        
    })

  } 

  newPurchaseBoleto(hash){      
    fetch(ecommerceAPI.BASE_URL_API+'vendas/newPurchaseBoleto', {
        method:'POST',
        body:JSON.stringify({
            jwt:Cookie.get('tk'),
            valor:parseFloat(this.state.amount),
            frete:this.state.frete,
            formapg:2,
            produto:Cookie.get('pcit'),
            idps:hash,
            cpf:this.state.cpf
        })
    })
    .then(r=>r.json())
    .then(json=>{
        // console.log(json.res)
        if(json.error == '' && json.cod){
            Cookie.set('conclude', 1, {expires:0.01});
            Cookie.set('bill', json.res, {expires:0.004});
            Cookie.remove('email');
            Cookie.remove('pcit')
            Cookie.remove('tk');

            Router.push('/add/obrigado');
        }else{
            this.setState({alertaE:true})
            this.setState({alertaM:json.error})
            this.setState({loading:false});
        }
        this.setState({loading:false})  
        
    })
    }

  scriptLoaded(e){
    PagSeguroDirectPayment.setSessionId(e);
  }

  submit(e){
    e.preventDefault();
    this.setState({loading:true})
    this.setState({id:PagSeguroDirectPayment.getSenderHash()}) ;
    if(this.state.cartao != '' && this.state.cvv != '' && this.state.validadeM != '' && this.state.validadeY != ''){
        PagSeguroDirectPayment.createCardToken({
            cardNumber:this.state.cartao,
            brand:this.state.cardBand,
            cvv:this.state.cvv,
            expirationMonth:this.state.validadeM,
            expirationYear:this.state.validadeY,
            success:function(r){
                // this.newPurchase(r.card.token);
            }.bind(this),
            erro:function(r){
                
            },
            complete:function(r){
                // console.log(r)
                // console.log('xxj')
                if(!r.error){
                    this.newPurchase(r.card.token);
                }else{
                    this.showError();
                }
                
            }.bind(this)
        });
    }
  }

  handleSubmitBoleto(e){
    e.preventDefault();
    let hash = PagSeguroDirectPayment.getSenderHash();
    this.setState({loading:true});
    this.setState({alertaE:false})
    this.setState({alertaM:''})
    this.setState({id:hash});
    this.newPurchaseBoleto(hash);
      
  }

  render(){
      console.log(this.state.nome) 
    return(
        <>
            <PageContainer bgColor={ThirdColor}>
                <Container>
                    {this.state.identifyVisible &&
                        <>
                            <Title>Escolha a forma de pagamento</Title>
                            <PaymentMethod color={'#FFF'}>
                                <PaymentItem selected={this.state.pagamentoCartao} onClick={this.handleCartao}>
                                    <PaymentImg src='/cartao.png' />
                                    Cartão
                                </PaymentItem>
                                <PaymentItem selected={this.state.pagamentoBoleto} onClick={this.handleBoleto}>
                                    <PaymentImg src='/barcode.png' />
                                    Boleto
                                </PaymentItem>
                                <SeloProtegido src='/protegido.png' />
                            </PaymentMethod>
                            {this.state.pagamentoCartao &&
                                <form onSubmit={this.submit}>
                                    <FormBox>
                                        <BoxInput>
                                            <Label>Nome</Label>
                                            <IptForm type='text' required value={this.state.nome} onChange={e=>this.setState({nome:e.target.value})} placeholder='COMO NO CARTÃO'/>
                                        </BoxInput>
                                        <BoxInput>
                                            <Label>CPF</Label>
                                            <NumberFormat customInput={IptForm} value={this.state.cpf} onChange={e=>this.setState({cpf:e.target.value})} format="###.###.###-##" placeholder='CPF DO TITULAR DO CARTÃO'/>
                                        </BoxInput>
                                        <BoxInput>
                                            <Label>DATA DE NASCIMENTO (TITULAR)</Label>
                                            <IptForm type='date' value={this.state.dataNascimento} onChange={e=>this.setState({dataNascimento:e.target.value})} placeholder='DATA DE NASCIMENTO' />
                                        </BoxInput>
                                    </FormBox>
                                    <FormBox>
                                        {!this.state.loadingInput &&
                                            <BoxInput>
                                                <Label>NÚMERO DO CARTÃO</Label>
                                                <NumberFormat customInput={IptForm} autoFocus value={this.state.cartao} onChange={e=>this.changeCartao(e.target.value)} format="#### #### #### ####" placeholder='NÚMERO DO CARTÃO'/>
                                            </BoxInput>
                                        }
                                        {this.state.loadingInput&&
                                            <Loader
                                                type="TailSpin"
                                                color={FirstColor}
                                                height={24}
                                                width={24}
                                            />
                                        }
                                        <BoxInput>
                                            <Label>CÓDIGO DE SEGURANÇA (CVV)</Label>
                                            <IptForm type='text' required value={this.state.cvv} maxLength={this.state.maxCVV} onChange={e=>this.changeCvv(e.target.value)} placeholder='CVV'/>
                                        </BoxInput>
                                    </FormBox>
                                    <FormBox>
                                        <BoxInput>
                                            <Label>VALIDADE (MÊS)</Label>
                                            <IptForm type='text' required value={this.state.mes} maxLength={2} onChange={e=>this.changeMes(e.target.value)} placeholder='MÊS DE VALIDADE (MM)'/>
                                        </BoxInput>
                                        <BoxInput>
                                            <Label>VALIDADE (ANO)</Label>
                                            <IptForm type='text' required value={this.state.ano} maxLength={4} onChange={e=>this.changeAno(e.target.value)} placeholder='ANO DE VALIDADE (AAAA)'/>
                                        </BoxInput>
                                    </FormBox>
                                    <FormBox>
                                        <select onChange={e=>this.setState({parcelas:e.target.value})} required >
                                            <option value='' disabled selected>PARCELAMENTO</option>
                                            {this.state.parc != undefined &&
                                            this.state.parc.map((i, index)=>(
                                                <>
                                                    {i.installmentAmount >= 10 && i.quantity <= this.state.frequency &&
                                                        <option key={index} value={i.quantity+';'+i.installmentAmount+';'+(i.interestFree ? 'true' : 'false')}>{i.interestFree ? i.quantity+'x de R$ '+i.installmentAmount.toFixed(2)+' S/JUROS' : i.quantity+'x de R$ '+i.installmentAmount.toFixed(2)}</option>
                                                    }
                                                </>
                                            ))}
                                        </select>
                                    </FormBox>
                                    <FormBox>
                                        <ColumnBox>
                                            {!this.state.loading &&
                                                <Salvar bgColor={SecondColor}>FINALIZAR COMPRA</Salvar>
                                            }
                                            {this.state.loading &&
                                                <Loader
                                                    type="TailSpin"
                                                    color={SecondColor}
                                                    height={24}
                                                    width={24}
                                                />
                                            }
                                        </ColumnBox>                                    
                                    </FormBox>                            
                                </form>
                            }
                            {this.state.pagamentoBoleto &&
                                // <form onSubmit={this.handleSubmitBoleto}>
                                    <FormBox>
                                        <ColumnBoxSm>
                                            <Desc>
                                                O boleto será gerado e poderá ser impresso para pagamento em qualquer agência bancária, ou poderá utilizar o número para realizar o pagamento via telefone ou internet.
                                            </Desc>
                                            {!this.state.loading &&
                                            <>
                                                {/* <SeloProtegido src='/protegido.png' /> */}
                                                <form onSubmit={this.handleSubmitBoleto}>
                                                    <BoxInputSm>
                                                        {/* <Label>CPF</Label> */}
                                                        <NumberFormat customInput={IptFormSm} required value={this.state.cpf} onChange={e=>this.setState({cpf:e.target.value})} format="###.###.###-##" placeholder='INFORME SEU CPF'/>
                                                    </BoxInputSm>
                                                    <Salvar bgColor={SecondColor}>FINALIZAR COMPRA</Salvar>
                                                </form>
                                            </>
                                            }
                                            {this.state.loading &&
                                                <Loader
                                                    type="TailSpin"
                                                    color={SecondColor}
                                                    height={24}
                                                    width={24}
                                                />
                                            }
                                        </ColumnBoxSm>
                                    </FormBox>
                                // </form>
                            }
                        </>
                    }
                </Container>
            </PageContainer>
        </>
    )
  }
}

export default FormularioPagamento;