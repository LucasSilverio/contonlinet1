import styled, { css } from 'styled-components';

export const Container = styled.div`
    display:flex;
    max-width:640px;
    height:auto;
    margin:auto;
    color:#333;
    background-color:#F8F8F8;
    justify-content:center;
    flex-direction:column;
    padding:20px;
    border-radius:5px;
`;

export const PageContainer = styled.div`
    width:100%;
    min-height:400px;
    display:flex;
    background-color:${(props) => props.bgColor};
    color:#fff;
`;

export const Paragrafo = styled.p`

`;

export const Title = styled.h1`
    font-size:36px;
`;
export const LinkBtn = styled.a`
    width:250px;
    height:40px;
    background-color:#79A6A4;
    color:#FFF;
    border-radius:5px;
    margin-top:40px;
    display:flex;
    align-items:center;
    justify-content:center;

    &:hover{
        opacity:0.9;
    }
`;
