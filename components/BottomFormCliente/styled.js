import { fadeIn } from 'react-animations';
import styled, { css, keyframes } from 'styled-components';

const fadeInAnimation = keyframes`${fadeIn}`;

export const BtnAction = styled.button`
    width:200px;
    height:40px;
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
    height:80px;
    margin:auto;
    align-items:center;
    position:relative;

    a{
        display:flex;
        align-items:center;
    }

    @media (max-width:1199px){
        padding-left:20px;
        padding-right:20px;
    }

    @media (max-width:1199px){
        justify-content:center;
    }
`;

export const Item = styled.p`
    margin:0;
    padding:0;
    color:#333;
    position:absolute;
    right:230px;
    cursor:pointer;

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

export const Logo = styled.img`
    width:40px;
    height:auto;
`;

export const PageContainer = styled.div`
    animation: 0.5s ${fadeInAnimation};
    width:100%;
    height:80px;
    background-color:${(props) => props.bgColor};
    color:#fff;
    display:${(props) => props.altura < 200 ? 'none' : 'block'};
    bottom:0;
    position:fixed;
    z-index:20;
    border-bottom:1px solid rgba(3, 3, 3, 0.1);
    box-shadow:${(props) => props.altura < 100 ? '0 0 0 0 rgba(5,5,5,.5)' : '-2px 2px 10px 0 rgba(207,212,214,.5)'};

    @media (max-width:900px){
        display:none;
    }
`;

export const Texto = styled.p`
    font-weight:600;
    color:#555;
    margin-left:20px;
    margin-right:20px;
`;