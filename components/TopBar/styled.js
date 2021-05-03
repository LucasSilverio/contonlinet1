import { fadeIn } from 'react-animations';
import styled, { css, keyframes } from 'styled-components';

const fadeInAnimation = keyframes`${fadeIn}`;

export const BtnAction = styled.button`
    width:110px;
    height:40px;
    position:absolute;
    right:80px;
    background-color:${(props) => props.bgColor};
    color:#FFF;
    border-radius:5px;
    border:none;
    cursor:pointer;
    font-weight:bold;

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
    height:40px;
    margin:auto;
    align-items:center;
    justify-content:flex-end;
    color:#716FF2;

    &:hover{
        opacity:0.8;
    }
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

export const Icone = styled.img`
    width:24px;
    height:auto;
    margin-right:5px;
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

export const Logo = styled.img`
    width:120px;
    height:auto;
    position:absolute;
`;

export const Lk = styled.a``;

export const PageContainer = styled.div`
    animation: 0.5s ${fadeInAnimation};
    width:100%;
    height:40px;
    background-color:${(props) => props.bgColor};
    color:#fff;
    position:fixed;
    z-index:20;
    border-bottom:1px solid rgba(3, 3, 3, 0.1);
    display:${(props) => props.altura < 100 ? 'block' : 'none'};

    @media (max-width:900px){
        display:none;
    }
`;