import { fadeIn } from 'react-animations';
import styled, { css, keyframes } from 'styled-components';

const fadeInAnimation = keyframes`${fadeIn}`;

export const BtnAction = styled.button`
    width:120px;
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

export const BoxItem = styled.div`
    margin:0;
    padding:0;
    color:#333;
    position:absolute;
    right:230px;
    cursor:pointer;
    display:flex;
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
    margin:20px;
    padding:0;
    color:#FFF;
    cursor:pointer;
    display:block;
    font-weight:600;

    &:hover{
        opacity:0.7;
    }

    @media (max-width:999px){
        display:none;
    }
`;

export const ItemMobile = styled.div`
    color:#555;
    cursor:pointer;
    display:block;
    z-index:50;
    font-size:20px;
    font-family:arial;
    font-weight:500;
    border-bottom:1px solid rgba(5,5,5,0.2);
    margin-top:10px;
    padding-bottom:5px;

    &:hover{
        opacity:0.9;
    }
`;

export const ItemLogin = styled.div`
    margin:0;
    padding:0;
    color:#333;
    position:absolute;
    right:0;
    cursor:pointer;

    &:hover{
        opacity:0.9;
    }

    @media (max-width:999px){
        display:none;
    }
`;

export const Line = styled.div`
    height:1px;
    background-color:rgba(5,5,5,0.2);
    width:100%;
    z-index:20;
`;

export const Logo = styled.img`
    width:250px;
    height:auto;
    position:absolute;
    cursor:pointer;
`;

export const Menu = styled.div`
    display:none;

    @media (max-width:900px){
        display:block;
    }
`;

export const MenuArea = styled.div`
    animation: 1.5s ${fadeInAnimation};
    display:flex;
    width:100%;
    height:100%;
    position:fixed;
    background-color:#FFF;
    right:${(props) => props.visible ? 0 : '-2000px'};
    z-index:10;
    padding:20px;
    flex-direction:column;
    padding-top:80px;
`;

export const MenuImg = styled.img`
    width:36px;
    height:auto;
    position:absolute;
    right:20px;
    top:24px;
`;

export const PageContainer = styled.div`
    animation: 0.5s ${fadeInAnimation};
    width:100%;
    height:80px;
    background-color:${(props) => props.bgColor};
    color:#fff;
    margin-top:0;
    position:fixed;
    z-index:260;
    border-bottom:1px solid rgba(3, 3, 3, 0.1);
    box-shadow:${(props) => props.altura < 100 ? '0 0 0 0 rgba(5,5,5,.5)' : '-2px 2px 10px 0 rgba(207,212,214,.5)'};
    
    @media (max-width:900px){
       margin-top:0;
    }
`;