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
`;

export const Bg = styled.img`
    width:100%;
`;

export const Container = styled.div`
    display:flex;
    max-width:800px;
    height:auto;
    margin:auto;
    align-items:center;
    color:#333;
    background-color:#CCC;
    justify-content:center;
    flex-direction:column;
`;

export const Logo = styled.img`
    width:100px;
    height:auto;
    position:absolute;
`;

export const PageContainer = styled.div`
    width:100%;
    height:auto;
    color:#fff;
    margin-top:60px;
`;

export const Paragrafo = styled.p`

`;

export const Title = styled.h1`
    font-size:14px;
`;