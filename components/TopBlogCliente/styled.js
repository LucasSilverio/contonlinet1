import styled, { css } from 'styled-components';

export const BtnAction = styled.button`
    width:110px;
    height:40px;
    position:absolute;
    right:0;
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

    a {
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

    @media (max-width:900px){
        display:none;
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

    @media (max-width:900px){
        display:none;
    }

    &:hover{
        opacity:0.9;
    }
`;

export const Logo = styled.img`
    width:100px;
    height:auto;
    position:absolute;

    @media (max-width:900px){
        margin-left:-60px;
    }
`;

export const PageContainer = styled.div`
    width:100%;
    height:80px;
    background-color:${(props) => props.bgColor};
    color:#fff;
    border-bottom:1px solid rgba(3, 3, 3, 0.1);
`;