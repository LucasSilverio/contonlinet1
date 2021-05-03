import { fadeIn } from 'react-animations';
import styled, { css, keyframes } from 'styled-components';

const fadeInAnimation = keyframes`${fadeIn}`;

export const BtnAction = styled.button`
    width:110px;
    height:30px;
    right:80px;
    background-color:${(props) => props.bgColor};
    color:#FFF;
    border-radius:5px;
    border:none;
    cursor:pointer;
    font-weight:bold;
    margin-top:5px;

    &:hover{
        opacity:0.9;
    }

    @media (max-width:1199px){
        margin-right:20px;
    }

    @media (max-width:1199px){
        display:none;
    }
`;

export const Container = styled.div`
    padding:0;
    margin:0;
    display:flex;
    max-width:1200px;
    margin:auto;
    flex-direction:column;
    position:relative;
    padding:5px;
`;

export const Item = styled.p`
    margin:5px;
    padding:0;
    font-size:12px;
    font-weight:bold;
    color:#333;

    &:before{
        content:url(${(props) => props.icon})' ';
    }

    &:hover{
        opacity:0.9;
    }
`;

export const ItemLogin = styled.p`
    margin:0;
    padding:0;
    color:#333;
    position:absolute;
    right:0;
    cursor:pointer;

    &:hover{
        opacity:0.9;
    }
`;

export const Mensagem = styled.p`
    left:5px;
    color:#fff;
    margin:0;
`;

export const Logo = styled.img`
    width:120px;
    height:auto;
    position:absolute;
`;

export const Lk = styled.a``;

export const PageContainer = styled.div`
    animation: 0.5s ${fadeInAnimation};
    width:300px;
    height:auto;
    border-radius:5px;
    background-color:${(props) => props.bgColor};
    color:#fff;
    position:fixed;
    right:-10px;
    bottom:100px;
    padding:10px;
    z-index:20;
    border-bottom:1px solid rgba(3, 3, 3, 0.1);
    display:block;
    // display:${(props) => props.altura < 100 ? 'block' : 'none'};

    @media (max-width:900px){
        display:none;
    }
`;