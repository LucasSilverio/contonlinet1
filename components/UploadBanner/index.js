import React, { Component } from 'react';
import { withRouter } from 'next/router';
import Loader from 'react-loader-spinner';
import ecommerceAPI from '../../services/ecommerceAPI';
import axios, { post } from 'axios';
import Cookie from 'js-cookie';
import AlertaErro from '../AlertaErro';

import { AlertaArea, BotaoArea, DropContainer, ErrorAlert, SuccessAlert, IptArea, UploadButton } from './styled';

class UploadBanner extends Component {

    constructor(props){
        super(props);
        this.state={
            logged:false,
            loading:false,
            alert:'',
            filename:'',
            alertaErroVisible:false,
            alertaErroMsg:'',
        }

        this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
        this.closeAlertaErro = this.closeAlertaErro.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    fileSelectedHandler(e){
        this.setState({alert:''});
        // 20480 -> 20k
//        if(e.target.files[0].size >= 102400){
        if(e.target.files[0].size >= 5120){
            this.setState({selectedFile:e.target.files[0]})
            this.setState({filename:e.target.files[0].name});
        }else{
            this.setState({alert:'A foto deve ter no mínimo 100 kb'})
            this.setState({filename:''});
        }
        
    }

    handleUpload(){
        this.setState({loading:true}); 
        const fd = new FormData();
        fd.append('jwt', Cookie.get('token'));
        fd.append('file', this.state.selectedFile);
        fd.append('item', this.props.data);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        post(ecommerceAPI.BASE_URL_API+'company/uploadBanner', fd,config)
        .then(res => {
            this.setState({loading:false});
            if(res.data.error != false){
                this.setState({alert:res.data.error});
                this.showErrorAlert(res.data.error);
            }
            if(res.data.success){
                alert('Imagem atualizada com sucesso!');
                this.props.getAll();
            }            
        })
    }

    closeAlertaErro(){
        this.setState({alertaErroVisible:false})
      }
      
    showErrorAlert(e){
    this.setState({alertaErroVisible:true})
    this.setState({alertaErroMsg:e})
    
    setTimeout(
    () => this.setState({ alertaErroVisible: false }), 
        4000
    );
    
    }
    
    render(){
        return(
            <>
                <DropContainer>
                    <AlertaErro 
                    visible={this.state.alertaErroVisible}
                    alertaMsg={this.state.alertaErroMsg}
                    closeAlerta={this.closeAlertaErro}
                    />
                    <IptArea>
                        <input type='file' onChange={this.fileSelectedHandler} />
                    </IptArea>         
                    <BotaoArea>
                        {this.state.loading &&
                            <Loader
                                type="TailSpin"
                                color="#66803E"
                                height={24}
                                width={24}
                            />
                        }   
                        {!this.state.loading &&
                            <>
                                {this.state.filename != '' &&
                                    <div>{this.state.filename}</div>
                                } 
                                <UploadButton onClick={this.handleUpload}>Upload</UploadButton>
                            </>
                        } 
                    </BotaoArea>  
                    <AlertaArea>    
                        {this.props.alert != '' &&
                            <SuccessAlert>{this.props.alert}</SuccessAlert>
                        }  
                        {this.props.error != '' &&
                            <ErrorAlert>{this.props.error}</ErrorAlert>
                        }
                    </AlertaArea>
                </DropContainer>
                
            </>
        )
    }
}

export default withRouter(UploadBanner);