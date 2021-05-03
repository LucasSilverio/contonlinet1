import styled, { css } from 'styled-components';

export const Container = styled.div`
    height:60px;
    flex:1;
    display:flex;
    flex-direction:column;

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
    width:100%;
    height:auto;
    background-color:#FFF;
    border-radius:5px;
    flex-direction:row;
    display:flex;   
    align-items:center; 
    border:1px solid rgba(5,5,5,0.1);
    cursor:pointer;
    margin:10px;

    @media (max-width:690px){
        width:100%;
        height:auto;
        flex-direction:column;
    }
    
    &:hover{
        opacity:0.9;
        transform:scale(1.01);
    }
`;

export const ItemsArea = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
`;

export const ItemIcon = styled.img`
    width:200px;
    height:auto;
    border-radius:5px;
`;

export const Titulo = styled.div`
    text-align:center;
    font-weight:700;
`;

export const TitlePage = styled.h1`
    font-size:20px;
    font-weight:bold;
    margin-left:10px;
    color:#101759;
    margin-top:10px;
    margin-bottom:0;
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

export const Botao = styled.a`
    padding:10px 20px 10px 20px;
    background-color:#FFF;
    border:1px solid rgba(30, 30, 30, 0.1);
    color:#FFF;
    border-radius:5px;
    cursor:pointer;
    height:40px;
    margin:2px;

    &:hover {
        opacity:0.8;
        transform:scale(1.01)
    }
`;

export const SubTitlePage = styled.p`
    font-size:14px;
    font-weight:400;
    margin-left:10px;
    color:#888;
    margin-top:0;
`;