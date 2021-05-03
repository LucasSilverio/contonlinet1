import React, { Component } from 'react';
import Link from 'next/link';
import Cookie from 'js-cookie';
import Loader from 'react-loader-spinner';
import { withRouter } from 'next/router';
import Router from 'next/router';
import DataTable, { createTheme } from 'react-data-table-component';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import moment from 'moment';
import { 
    AtualPage,
    AlertArea,
    AreaBotoes,
    Botao,
    BotaoC,
    BotaoArea,
    BotaoLegenda,
    BannerImg,
    BannerArea,
    BtnDel,
    Btn,
    Container,
    ContainerMob,
    Filtro,
    ImageTable,
    ImageMob,
    ItemArea,
    ItemInfoArea,
    ItemInfoAreaBtn,
    ItemTitle,
    ImagemArea,
    Icone,
    IconeBtn,
    LoaderArea,
    Page,
    Preco,
    Referencia,
    SubHeader,
    OptionBtn,
    OpcoesArea,
    TableArea
} from './styled';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';
import ModalBanner from '../ModalBanner';
import ModalNewBanner from '../ModalNewBanner';
import Banner from '../Banner';

class Banners extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
        prods:[],
        filterProds:[],
        prodsPag:[],
        filtro:'',
        offset:0,
        limit:4,
        loadingMob:false,
        banners:[],
        cuponsPag:[],
        bannerPic:'bannerBanners.png',
        modalVisible:false,
        idbanner:'',
        mobile:0,
        acao:'https://contonline.com.br/',
        url:'',
        slug:'',
        columns : [
          {
            name: 'Imagem',
            cell: row => <ImageTable src={row.url} />,
            center: true,
            sortable: false,
          },
          {
            name: 'Mobile',
            cell: row => <>{row.mobile == 1 ? 'SIM' : 'NÃO'}</>,
            center: true,
            sortable: false,
          },
          // {
          //   name: 'Ação',
          //   cell: row => <Link href={row.destino != null && row.destino != '' ? row.destino : '/'}><a target="_blank">{row.destino}</a></Link>,
          //   sortable: true,
          //   center: true,
          //   // right: true,
          // },
          {
              name:'Opções',
              cell: row => 
                          <>
                            <Btn onClick={e=>this.edit(row.id, row.mobile, row.destino, row.url)}><IconeBtn src='/edit.png' /></Btn>
                            <BtnDel onClick={e=>this.unable(row.id)}><IconeBtn src='/delete.svg' /></BtnDel>
                          </>,
              sortable: true,
              maxWidth: '50px',
              center: true,
      
          }
        ]
    } 
    this.cleanStates = this.cleanStates.bind(this);
    this.unable = this.unable.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getInfos = this.getInfos.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleModalNew = this.handleModalNew.bind(this);
    this.changeAcao = this.changeAcao.bind(this);
    this.changeMobile = this.changeMobile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitNew = this.handleSubmitNew.bind(this);
    this.handleUnable = this.handleUnable.bind(this);
  }  

  componentDidMount(){
      this.getAll();
      this.getInfos();
      // TESTE GITHUB PULL
      // this.request();

  }

  getAll(){
    osAPI.panelGetBanners(Cookie.get('token'))
    .then(r=>r.json())
    .then(json=>{
        this.setState({banners:json.data});
    });
  }

  cleanStates(){
    this.setState({idbanner:''})
    this.setState({mobile:0})
    this.setState({acao:'https://contonline.com.br/'+this.state.slug})
    this.setState({url:''})
  }

  changeAcao(e){
    this.setState({acao:e})
  }

  changeMobile(e){
    this.setState({mobile:e})
  }

  edit(id, mobile, acao, url){
    this.cleanStates();
    this.setState({idbanner:id})
    this.setState({mobile:mobile})
    this.setState({acao:acao})
    this.setState({url:url})
    this.handleModal();
  }

  unable = (id) =>{
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <AlertArea>
            <h1>Confirma a exclusão?</h1>
            <p>Ao clicar em sim, o banner será excluído do site!</p>
            <AreaBotoes>
              <BotaoC onClick={onClose}>NÃO</BotaoC>
              <BotaoC
                onClick={() => {
                  this.handleUnable(id);
                  onClose();
                }}
              >
                SIM!
              </BotaoC>
            </AreaBotoes>
          </AlertArea>
        );
      }
    });
  }

  getInfos(){
    osAPI.getInfosPanel(Cookie.get('token'))
    .then(r=>r.json())
    .then(json=>{
      this.setState({slug:json.data.slug})
    })
  }

  handleUnable(id){
    fetch(ecommerceAPI.BASE_URL_API+'company/unableBanner', {
      method:'POST',
      body:JSON.stringify({
          // jwt:Cookie.get('token'),
          id:id
      })
    })
    .then(r=>r.json())
    .then(json=>{
      if(json.success){
        this.getAll();
      }
    })
  }

  handleModal(){
    this.setState({modalVisible:!this.state.modalVisible});
  }

  handleModalNew(){
    this.cleanStates();
    this.setState({modalNewVisible:!this.state.modalNewVisible});
  }

  handleSubmit(){
    fetch(ecommerceAPI.BASE_URL_API+'company/editBanner', {
      method:'POST',
      body:JSON.stringify({
          // jwt:Cookie.get('token'),
          item:this.state.idbanner,
          acao:this.state.acao,
          mobile:this.state.mobile
      })
      })
      .then(r=>r.json())
      .then(json=>{
          if(json.success){   
            alert("Alterações realizadas com sucesso!");
            this.getAll();
          }
      })
  }

  handleSubmitNew(){
    this.setState({loading:true});
    fetch(ecommerceAPI.BASE_URL_API+'company/newBanner', {
      method:'POST',
      body:JSON.stringify({
          jwt:Cookie.get('token'),
          acao:this.state.acao,
          mobile:this.state.mobile
      })
      })
      .then(r=>r.json())
      .then(json=>{
          if(json.success){   
            alert("Alterações realizadas com sucesso!");
            this.setState({idbanner:json.data})
            this.getAll();
            this.setState({loading:false});
          }
      })
  }

  render(){     
    let ordenado = [];
    ordenado =  this.state.banners.sort(function(a,b) {
        return a.id > b.id ? -1 : a.id < b.id ? 1 : 0;
    });
    return(    
      <>   
        <Container>
          <ModalBanner 
            handleModal={this.handleModal}
            getAll={this.getAll}
            changeAcao={this.changeAcao}
            changeMobile={this.changeMobile}
            handleSubmit={this.handleSubmit}
            visible={this.state.modalVisible} 
            acao={this.state.acao}
            mobile={this.state.mobile}
            id={this.state.idbanner}
            imagem={this.state.url}
          />
          <ModalNewBanner 
            handleModal={this.handleModalNew}
            getAll={this.getAll}
            changeAcao={this.changeAcao}
            changeMobile={this.changeMobile}
            handleSubmit={this.handleSubmitNew}
            visible={this.state.modalNewVisible} 
            acao={this.state.acao}
            mobile={this.state.mobile}
            id={this.state.idbanner}
            imagem={this.state.url}
            loading={this.state.loading}
          />
          <OpcoesArea>
            <Link href='/painel'>
              <a>
                <BotaoArea>
                  <Botao>
                    <Icone src='/back.png' />
                  </Botao>
                  <BotaoLegenda>
                    Voltar
                  </BotaoLegenda>
                </BotaoArea>
              </a>
            </Link>
            <BotaoArea onClick={this.handleModalNew}>
              <Botao>
                <Icone src='/novo.png' />
              </Botao>
              <BotaoLegenda>
                Novo
              </BotaoLegenda>
            </BotaoArea>
          </OpcoesArea>
            <DataTable
                title=""
                columns={this.state.columns}
                data={ordenado}
                pagination={true}
                filtering={true}
                dense={true}
                // onRowClicked={e=>this.productClick(e)}
                pointerOnHover={true}
                expandableRows={false}
                highlightOnHover={true}
                subHeader={false}
                header={false}
                // subHeaderComponent = { 
                //     <SubHeader>
                //       <Filtro placeholder='FILTRE PELO CUPOM OU DESCRIÇÃO' type='text' onChange={e=>this.handleFilter(e.target.value)} />
                //     </SubHeader>
                // }
                theme='solarized'
                paginationComponentOptions = { {rowsPerPageText:'Linhas por página', rangeSeparatorText:'de'} }
            />
        </Container>
        <ContainerMob>
          <OpcoesArea>
            <Link href={'/banners/add'}>
              <BotaoArea>
                <Botao>
                  <Icone src='/novo.png' />
                </Botao>
                <BotaoLegenda>
                  Novo
                </BotaoLegenda>
              </BotaoArea>
            </Link>
          </OpcoesArea>
          <SubHeader>
            <Filtro placeholder='FILTRE PELO CUPOM OU DESCRIÇÃO' type='text' onChange={e=>this.handleFilter(e.target.value)} />
          </SubHeader>
          {this.state.loadingMob &&
            <LoaderArea>
              <Loader
                type='TailSpin'
                color="#66803E"
                height={80}
                width={80}
              />
            </LoaderArea>
          }
          {!this.state.loadingMob &&
            <>
              {/* {this.state.banners.map((i, index) => (
                <ItemArea>
                  <BannerArea>
                    <BannerImg src={i.img} />
                  </BannerArea>
                  <ItemInfoArea>
                    <Link href={i.destino}>
                      <a target="_blank">
                        {i.destino}
                      </a>
                    </Link>
                  </ItemInfoArea>
                  <ItemInfoAreaBtn>
                    <BtnDel onClick={e=>this.unable(row.id)}><IconeBtn src='/delete.png' /></BtnDel>
                  </ItemInfoAreaBtn>
                </ItemArea>
              ))} */}
            </>
          }
        </ContainerMob>
    </>
    )
  }
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default Banners;