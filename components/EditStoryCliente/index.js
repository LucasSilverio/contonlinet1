import React, { Component } from 'react';
import Cookie from 'js-cookie';
import Link from 'next/link';
import Router from 'next/router';
import Loader from 'react-loader-spinner';
import osAPI from '../../services/osAPI';
import { post } from 'axios';
import dynamic from 'next/dynamic';
import { EditorState, convertToRaw } from 'draft-js';
// import draftToHtml from 'draftjs-to-html';
// import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { 
  Btn,
  BtnAction,
  Container, 
  Conteudo,
  Ipt,
  ImagensArea,
  Label,
  LoaderArea,
  Selector,
  PageContainer,
  UploadedImage
} from './styled';
import PanelNavigation from '../PanelNavigation';
import { FirstColor, SecondColor, ThirdColor } from '../MainStyled';
import { SubTitulo, Titulo } from '../Principal/styled';
import NumberFormat from 'react-number-format'; 
import ecommerceAPI from '../../services/ecommerceAPI'; 

const importJodit = () => import('jodit-react');

const JoditEditor = dynamic(importJodit, {
    ssr: false,
});

const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
    uploader: {
      url: ecommerceAPI.BASE_URL_API+'blog/upload' ,
      isSuccess: function (resp) {
        //this step is necessary for whatever reason, otherwise it will throw an error.
            return resp;
        },
      process: function(resp){
          //this was an important step to align the json with what jodit expects.
          return {
              files: resp.images,
              path: resp.path,
              baseurl: resp.path,
              error: resp.error,
              message: resp.message
          }
      }
    },
}

class EditStoryCliente extends Component {

  constructor(props){
    super(props);
    this.state={
        loading:false,
        ready: false,
        editorState: EditorState.createEmpty(),
        titulo:'',
        previa:'',
        autor:'',
        selectedFileImg:'',
        filenameImg:'',
        filename:'',
        content:'',
        senderContent:'',
        editor:null,
        imagens:[]
    }
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
    this.fileSelectedHandlerImg = this.fileSelectedHandlerImg.bind(this);
    this.handleImages = this.handleImages.bind(this);
    this.getInfos = this.getInfos.bind(this);
    this.submit = this.submit.bind(this)
    this.getMateriaById = this.getMateriaById.bind(this);
  }

  componentDidMount(){
    this.getMateriaById(this.props.materia);
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  uploadImageCallBack(file) {
    return new Promise(
        (resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', ecommerceAPI.BASE_URL_API+'blog/upload');
            // xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
            const data = new FormData();
            data.append('jwt', Cookie.get('token'));
            data.append('file', file);
            data.file = file;
            xhr.send(data);
            xhr.addEventListener('load', () => {
                const response = JSON.parse(xhr.responseText);
                // console.log(response.url);
                resolve({
                  data: {
                    link: response.url
                  }
                })
            });
            xhr.addEventListener('error', () => {
                const error = JSON.parse(xhr.responseText);
                reject(error);
            });
        }
    );
  }

  fileSelectedHandler(e){
    if(e.target.files[0].size >= 102400){
        this.setState({selectedFile:e.target.files[0]})
        this.setState({filename:e.target.files[0].name});
    }
  }

  fileSelectedHandlerImg(e){
    if(e.target.files[0].size >= 1000){
        this.setState({selectedFileImg:e.target.files[0]})
        this.setState({filenameImg:e.target.files[0].name});
    }
  }

  getMateriaById(id){
    osAPI.getMateriaById(Cookie.get('token'), id)
    .then(r=>r.json())
    .then(json=>{
      this.setState({titulo:json.data.titulo})
      this.setState({previa:json.data.previa})
      this.setState({autor:json.data.autor})
      this.setState({content:json.data.conteudo})
    })
  }

  getInfos(){
    osAPI.getPanelInfos(Cookie.get('tk'))
    .then(r=>r.json())
    .then(json=>{
      if(json.success){
        this.setState({nomeloja:json.data.nomeloja})
        this.setState({nome:json.data.nome})
      }
    })
  }

  handleInfos(){
    Router.push('/panel/infos');
  }

  handleContent(e){
    this.setState({senderContent:e})
    // console.log(e)
  }

  handleImages(e){
    e.preventDefault();
    this.setState({loading:true});
    const fd = new FormData();
    fd.append('jwt', Cookie.get('tk'));
    fd.append('files', this.state.selectedFileImg);
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    }
    post(ecommerceAPI.BASE_URL_API+'blog/upload', fd,config)
    .then(res => {
      console.log(res)
      if(res.data.success){
        let a = this.state.imagens;
        a.push(res.data.path);
        this.setState({imagens:a})
        this.setState({loading:false});
      }
      this.setState({loading:false});
    })
  }

  submit(e){
    e.preventDefault();
    this.setState({loading:true});
    const fd = new FormData();
    fd.append('jwt', Cookie.get('token'));
    fd.append('autor', this.state.autor);
    fd.append('titulo', this.state.titulo);
    fd.append('conteudo', this.state.senderContent);
    fd.append('previa', this.state.previa);
    fd.append('file', this.state.selectedFile);
    fd.append('materia', this.props.materia);
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    }
    post(ecommerceAPI.BASE_URL_API+'blog/editPostCliente', fd,config)
    .then(res => {
      if(res.data.success){
        Router.push('/conteudo/blog');
      }
      this.setState({loading:false});
    })
  }
 
  render(){ 
    const { editorState } = this.state;
    return(
        <PageContainer bgColor={ThirdColor}>
            <PanelNavigation
              dest='/conteudo/blog'
            />
            <Container> 
              {/* <Btn>[+] Imagens</Btn> */}
              <ImagensArea>
                <form onSubmit={this.handleImages}>
                  <p>Gere o link das imagens que deseja incluir na sua matéria realizando o upload aqui.</p>
                  <Ipt type='file' onChange={this.fileSelectedHandlerImg} />
                  {!this.state.loading &&
                    <BtnAction>GERAR URL</BtnAction>
                  }                  
                  {this.state.loading &&
                    <LoaderArea>
                        <Loader
                            type="TailSpin"
                            color="#5C6BF2"
                            height={24}
                            width={24}
                        />
                      </LoaderArea>
                  }
                </form>
                {this.state.imagens.map((i, index) => (
                  <UploadedImage key={index}>{i}</UploadedImage>
                ))}
              </ImagensArea>
              <form onSubmit={this.submit}>
                <Label>Título da matéria</Label>
                <Ipt type='text' value={this.state.titulo} onChange={e=>this.setState({titulo:e.target.value})} placeholder='Procure usar palavras estratégicas para o assunto que será tratado'/>
                <Label>Prévia</Label>
                <Ipt type='text' value={this.state.previa} onChange={e=>this.setState({previa:e.target.value})} placeholder='Uma pequeno resumo do texto. Use poucas palavras.'/>
                <Label>Autor</Label>
                <Ipt type='text' value={this.state.autor} onChange={e=>this.setState({autor:e.target.value})} placeholder='Seu nome.'/>
                <Label>Imagem da capa</Label>
                <Ipt type='file' onChange={this.fileSelectedHandler} />
                <JoditEditor
                  ref={this.state.editor}
                  value={this.state.content}
                  config={config}
                  tabIndex={1} // tabIndex of textarea
                  onBlur={newContent => {}} // preferred to use only this option to update the content for performance reasons
                  onChange={newContent => this.handleContent(newContent)}
                />
                
                {!this.state.loading &&
                  <BtnAction>Salvar</BtnAction>
                }
                {this.state.loading &&
                    <LoaderArea>
                        <Loader
                            type="TailSpin"
                            color="#5C6BF2"
                            height={24}
                            width={24}
                        />
                      </LoaderArea>
                  }
              </form>
            </Container>
        </PageContainer>
    )
  }
}

export default EditStoryCliente;