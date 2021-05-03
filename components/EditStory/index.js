import React, { Component } from 'react';
import Cookie from 'js-cookie';
import Link from 'next/link';
import Router from 'next/router';
import Loader from 'react-loader-spinner';
import osAPI from '../../services/osAPI';
import { post } from 'axios';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
// import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { 
  BtnAction,
  Container, 
  Conteudo,
  ConteudoAntigo,
  Ipt,
  Label,
  Selector,
  PageContainer
} from './styled';
import PanelNavigation from '../PanelNavigation';
import { FirstColor, SecondColor, ThirdColor } from '../MainStyled';
import { SubTitulo, Titulo } from '../Principal/styled';
import NumberFormat from 'react-number-format'; 
import ecommerceAPI from '../../services/ecommerceAPI'; 
let Editor = () => null;

class EditStory extends Component {

  constructor(props){
    super(props);
    this.state={
        loading:false,
        ready: false,
        editorState: EditorState.createEmpty(),
        titulo:'',
        previa:'',
        autor:'',
        filename:'',
        texto:''
    }
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
    this.getInfos = this.getInfos.bind(this);
    this.submit = this.submit.bind(this)
  }

  componentDidMount(){
    // this.getInfos();
    import('react-draft-wysiwyg').then(({ Editor: WSYSIGEditor }) => {
      Editor = WSYSIGEditor;
      this.setState({ ready: true });
    });

    this.setState({titulo:this.props.materia.titulo})
    this.setState({previa:this.props.materia.previa})
    this.setState({autor:this.props.materia.autor})
    this.setState({texto:this.props.materia.conteudo})
    // this.setState({editorState:'<p>oi</p>'})
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  fileSelectedHandler(e){
    if(e.target.files[0].size >= 102400){
        this.setState({selectedFile:e.target.files[0]})
        this.setState({filename:e.target.files[0].name});
    }
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

  submit(e){
    e.preventDefault();
    const fd = new FormData();
    fd.append('jwt', Cookie.get('tk'));
    fd.append('autor', this.state.autor);
    fd.append('titulo', this.state.titulo);
    fd.append('conteudo', draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())));
    fd.append('previa', this.state.previa);
    fd.append('file', this.state.selectedFile);
    fd.append('slug', this.props.materia.slug)
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    }
    post(ecommerceAPI.BASE_URL_API+'blog/editPost', fd,config)
    .then(res => {
      // if(res.data.success){
      //   Router.push('/painel/blog');
      // }
    })
  }

  render(){ 
    const { editorState } = this.state;
    return(
        <PageContainer bgColor={ThirdColor}>
            <PanelNavigation
              dest='/admin'
            />
            <Container>
              <form onSubmit={this.submit}>
                <Label>Título da matéria</Label>
                <Ipt type='text' value={this.state.titulo} onChange={e=>this.setState({titulo:e.target.value})} />
                <Label>Prévia</Label>
                <Ipt type='text' value={this.state.previa} onChange={e=>this.setState({previa:e.target.value})} />
                <Label>Autor</Label>
                <Selector onChange={e=>this.setState({autor:e.target.value})}>
                  <option value='' disabled selected>Selecione</option>
                  <option value='1' >Lucas</option>
                </Selector>
                <Label>Imagem da capa</Label>
                <Ipt type='file' onChange={this.fileSelectedHandler} />
                <Editor
                  editorState={editorState}
                  wrapperClassName="demo-wrapper"
                  editorClassName="demo-editor"
                  onEditorStateChange={this.onEditorStateChange}
                />
                <Conteudo
                  disabled
                  value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                />


                <BtnAction>Salvar</BtnAction>
              </form>
              <ConteudoAntigo dangerouslySetInnerHTML={{ __html: this.state.texto }}></ConteudoAntigo>
            </Container>
        </PageContainer>
    )
  }
}

export default EditStory;