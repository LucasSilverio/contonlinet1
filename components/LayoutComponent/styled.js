import styled, { css } from 'styled-components';

export const Container = styled.div`
    height:100%;
    flex:1;
    display:flex;
    flex-direction:column;
    margin-bottom:50px;

    form{
        display:flex;
        flex-direction:column;
    }

    @media (max-width:800px){
        // display:none;
    }
`;

export const Column = styled.div`
    display:flex;
    flex-direction:column;
    padding:15px;

`;

export const Descricao = styled.div``;

export const Label = styled.label`
    font-size:12px;
    color:#555;
`;

export const Item = styled.div`
    width:400px;
    height:auto;
    background-color:#FFF;
    border-radius:5px;
    flex-direction:row;
    display:flex;   
    align-items:center; 
    border:1px solid rgba(5,5,5,0.1);
    cursor:pointer;
    margin:10px;
    flex-direction:column;

    a {
        margin:10px;
        color:#555;
        width:150px;
        height:40px;
        background-color:#716FF2;
        display:flex;
        justify-content:center;
        align-items:center;
        color:#FFF;
        border-radius:5px;
    }

    a:hover {
    }

    @media (max-width:690px){
        width:100%;
        height:auto;
        flex-direction:column;
    }
    
    &:hover{
        opacity:0.9;
        transform:scale(1.01);
        box-shadow: 0px -1px 8px -1px rgba(113,111,242,0.5);
        -webkit-box-shadow: 0px -1px 8px -1px rgba(113,111,242,0.5);
        -moz-box-shadow: 0px -1px 8px -1px rgba(113,111,242,0.5);
    }
`;

export const Imagem = styled.img`
    width:400px;
    height:auto;
`;

export const ItemsArea = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;

    @media (max-width:800px){
        flex-direction:column;
    }
`;

export const ItemIcon = styled.img`
    width:200px;
    height:auto;
`;

export const Titulo = styled.div`
    text-align:center;
    font-weight:600;
    color:#555;
`;

export const TitlePage = styled.h1`
    font-size:20px;
    font-weight:bold;
    margin-left:10px;
    color:#101759;
    margin-top:10px;
`;
// Opcoes Area
export const Icone = styled.img`
    width:24px;
    height:24px;
`;

export const OpcoesArea = styled.div`
    height:60px;
    width:100%;
    margin-top:60px;
    padding-left:20px;
    border-bottom:1px solid rgba(30, 30, 30, 0.1);
    display:flex;
    align-items:center;
    margin-left:20px;

    @media (max-width:799px){
        display:flex;
        justify-content:center;
        align-items:center;
        margin-bottom:20px;
    }
`;

export const BotaoArea = styled.div`
    display:flex;
    flex-direction:column;
`;

export const BotaoLegenda = styled.div`
    display:flex;
    font-size:10px;
    justify-content:center;
    color:#555;
`;

export const Botao = styled.button`
    padding:10px 20px 10px 20px;
    background-color:#FFF;
    border:1px solid rgba(30, 30, 30, 0.1);
    color:#64ACF1;
    border-radius:5px;
    cursor:pointer;
    height:40px;
    margin:20px;

    &:hover {
        opacity:0.8;
        transform:scale(1.01)
    }
`;