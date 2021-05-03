import { fadeIn } from 'react-animations';
import styled, { css, keyframes } from 'styled-components';

const fadeInAnimation = keyframes`${fadeIn}`;

export const BtnAction = styled.button`
    width:100%;
    height:40px;
    background-color:${(props) => props.bgColor};
    color:#FFF;
    border-radius:5px;
    border:none;
    cursor:pointer;
    font-weight:bold;
    margin-top:10px;
    display:block;

    &:hover{
        opacity:0.9;
        transform:scale(1.01);
    }

    @media (max-width:768px){
        display:none;
    }

    @media (max-width:600px){
        width:100%;
    }
`;

export const BotaoArea = styled.div`
    display:flex;
    width:100%;

    a {
        width:100%;
        margin:5px;
    }
`;

export const BtnActionTab = styled.button`
    width:450px;
    height:40px;
    background-color:${(props) => props.bgColor};
    color:#FFF;
    border-radius:5px;
    border:none;
    cursor:pointer;
    font-weight:bold;
    margin-top:10px;
    display:none;

    &:hover{
        opacity:0.9;
    }

    @media (max-width:768px){
        display:none;
    }

    @media (max-width:600px){
        width:100%;
    }

    @media (max-width:400px){
        display:none;
    }

    
`;

export const BtnActionMob = styled.button`
    width:450px;
    height:40px;
    background-color:${(props) => props.bgColor};
    color:#FFF;
    border-radius:5px;
    border:none;
    cursor:pointer;
    font-weight:bold;
    margin-top:10px;
    display:none;

    &:hover{
        opacity:0.9;
    }

    @media (max-width:768px){
        width:100%;
        display:block;
    }

    @media (max-width:400px){
        display:block;
    }
`;

export const Container = styled.div`
    padding:0;
    margin:0;
    display:flex;
    max-width:1200px;
    height:600px;
    margin:auto;
    position:relative;

    @media (max-width:1199px){
        
    }

    @media (max-width:1050px){
        height:auto;
        flex-direction:column;
    }
`;

export const Content = styled.div`
    flex:1;
    padding-top:10px;

    @media (max-width:1199px){
        padding-left:20px;
        padding-right:20px;
        
    }
    
    @media (max-width:600px){
        padding-right:20px;
    }

`;

export const ContentImg = styled.div`
    flex:1;
    padding-top:10px;

    &:hover{
        transform:scale(1.01);
    }
`;

export const Destaque = styled.strong`
    color:#F2A57C;
`;

export const Titulo = styled.h1`
    color:#716FF2;
    font-size:2.5em;
    line-height:1.2;
    font-weight:700;

    @media (max-width:600px){
        font-size:40px;
    }

    @media (max-width:375px){
        font-size:35px;
    }
`;

export const SubTitulo = styled.h2`
    color:#30455c;
    font-size:20px;
    line-height:25px;
    font-weight:500;
`;

export const Paragrafo = styled.p`
    line-height:24px;
    font-weight:400;
`;

export const BannerImg = styled.img`
    height:auto;
    position:absolute;

    @media (max-width:1050px){
        display:none;
    }
`;

export const BannerImgMob = styled.img`
    height:auto;
    position:absolute;
    display:none;

    @media (max-width:1050px){
        position:static;
        width:100%;
        display:block;
    }

    @media (max-width:600px){
        margin-top:20px;
    }
`;

export const PageContainer = styled.div`
    width:100%;
    height:600px;
    background-color:${(props) => props.bgColor};
    color:#fff;
    margin-top:120px;
    overflow:hidden;

    
    
    @media (max-width:1050px){
        height:auto;
        margin-top:80px;
    }
`;

export const VideoArea = styled.div`
    flex:1;
    padding-top:10px;

    video {
        width:100%;
        height:auto;
        top:0;
        right:30px;
        transform:rotate(40deg)
        
    }

    &:hover{
        transform:scale(1.01);
    }
`;

export const Video = styled.video`
    width:350px;
    height:300px;
`;

export const Wave = styled.div`
    width:800px;
    height:600px;
    background-color:#716FF2;
    position:absolute;
    z-index:200;
    transform:rotate(-40deg);
    overflow:hidden;
    border-radius:300px;

    @media (max-width:999px){
        display:none;
    }
`;