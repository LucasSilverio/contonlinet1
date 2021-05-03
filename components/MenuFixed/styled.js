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
    height:100px;
    margin:auto;
    align-items:center;
    position:relative;
    justify-content:flex-end;

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

export const Drawer = styled.div`
    animation: 1.5s ${fadeInAnimation};
    width:80%;
    height:100%;
    background-color:#FFF;
    position:fixed;
    right:0;
    top:0;
    z-index:20;
    display:${(props) => props.visible ? 'block' : 'none'};
`;

export const Item = styled.p`
    padding:0;
    color:#333;
    right:230px;
    cursor:pointer;
    display:block;
    margin:10px;
    font-size:13px;
    letter-spacing:0.2em;
    font-weight:600;
    color:#999;

    &:hover{
        color:${(props) => props.color};
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
    font-size:14px;
    text-transform:uppercase;
    font-weight:bold;
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

export const IconeMenu = styled.img`
    width:32px;
    height:32px;
    position:fixed;
    right:40px;
    top:30px;
    display:none;
    z-index:20;
    cursor:pointer;

    &:hover{
        transform:scale(1.1);
        opacity:0.9;
    }
    

    @media (max-width:999px){
        display:block;
    }
`;

export const Line = styled.div`
    height:1px;
    background-color:rgba(5,5,5,0.2);
    width:100%;
    z-index:20;
`;

export const Logo = styled.img`
    width:160px;
    height:auto;
    position:absolute;
    left:10px;
    cursor:pointer;
`;

export const Lk = styled.a``;

export const MenuDestaque = styled.div`
    display:block;
    padding-left:20px;
    padding-right:20px;
    padding-top:10px;
    padding-bottom:10px;
    border-radius:5px;
    font-weight:700;
    cursor:pointer;
    background-color:${(props) => props.bgColor};
    &:hover{
        transform:scale(1.1);
        opacity:0.8;
    }

    @media (max-width:599px){
        display:none;
    }

`;

export const MenuDestaqueMob = styled.div`
    display:none;
    padding-left:20px;
    padding-right:20px;
    padding-top:10px;
    padding-bottom:10px;
    border-radius:5px;
    font-weight:700;
    cursor:pointer;
    background-color:${(props) => props.bgColor};
    width:90%;
    margin:auto;
    align-items:center;
    justify-content:center;
    &:hover{
        transform:scale(1.1);
        opacity:0.8;
    }

    @media (max-width:599px){
        display:flex;
    }


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
    width:80%;
    height:100%;
    position:fixed;
    background-color:#FFF;
    right:${(props) => props.visible ? 0 : '-2000px'};
    z-index:20;
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
    height:100px;
    background-color:${(props) => props.bgColor};
    color:#fff;
    margin-top:${(props) => props.altura < 100 ? '40px' : '0'};
    position:fixed;
    z-index:20;
    border-bottom:1px solid rgba(3, 3, 3, 0.1);
    box-shadow:${(props) => props.altura < 100 ? '0 0 0 0 rgba(5,5,5,.5)' : '-2px 2px 10px 0 rgba(207,212,214,.5)'};
    
    @media (max-width:900px){
       margin-top:0;
    }

    @media (max-width:599px){
        margin-top:0;
        height:150px;
     }


`;