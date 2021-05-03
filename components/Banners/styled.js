import styled, { css } from 'styled-components';

export const AreaBotoes = styled.div`
    display:flex;
    flex-direction:row;
`;

export const AlertArea = styled.div`
    display:flex;
    width:400px;
    height:100px;
    margin-top:-150px;
    flex-direction:column;

    @media (max-width:450px){
        width:300px;
    }
`;

export const Container = styled.div`
    height:60px;
    flex:1;
    display:flex;
    flex-direction:column;
    overflow:auto!important;

    @media (max-width:800px){
        display:none;
    }
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

export const BotaoC = styled.a`
    width:100px;
    height:30px;
    background-color:#5C6BF2;
    border-radius:5px;
    color:#FFF;
    border:none;
    text-transform:uppercase;
    margin:5px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    &:hover{
        background-color:#6775f5;
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

export const BannerArea = styled.div`
    width:100%;
    height:auto;

`;

export const BannerImg = styled.img`
    width:100%;
    height:auto;
    top:0;
    position:absolute;
`;

export const BtnDel = styled.button`
    cursor:pointer;
    height:24px;
    width:24px;
    display:flex;
    justify-content:center;
    border:none;
    margin:1px;
    align-items:center;
    border-radius:3px;
    background-color:#FFF;
    border:1px solid rgba(1,1,1,0.3);
    color:#FFF;
    font-weight:bold;

    &:hover{
        opacity:0.8;
        transform:scale(1.1)
    }
`;

export const Btn = styled.button`
    cursor:pointer;
    height:24px;
    width:24px;
    display:flex;
    justify-content:center;
    border:none;
    margin:1px;
    align-items:center;
    border-radius:3px;
    background-color:#FFF;
    border:1px solid rgba(1,1,1,0.3);
    color:#FFF;
    font-weight:bold;

    &:hover{
        opacity:0.8;
        transform:scale(1.1)
    }
`;

export const ContainerMob = styled.div`
    flex:1;
    display:none;
    flex-direction:column;

    @media (max-width:800px){
        display:flex;
    }

`;

export const Filtro = styled.input`
    width:50%;
    height:30px;
    padding-left:10px;
    border:1px solid rgba(0, 0, 0, 0.2);
    border-radius:5px;

    @media (max-width:799px){
        width:100%;
    }
`;

export const ImageTable = styled.img`
    width:300px;
    height:auto;

    @media (max-width:800px){
        height:130px;
    }

`;

export const ImageMob = styled.img`
    width:130px;
    height:auto;
    border-radius:100px;
`;

export const ImagemArea = styled.div`

`;

export const ItemTitle = styled.p`
    margin:0;
    color:#333;
    margin-left:2px;
`;

export const IconeBtn = styled.img`
    width:12px;
    height:12px;
`;

export const Referencia = styled.p`
    margin:0;
    font-size:12px;
    color:#999;
    margin-left:2px;
`;

export const LoaderArea = styled.div`
    display:flex;
    flex:1;
    justify-content:center;
    align-items:center;
`;

export const SubHeader = styled.div`
    width:100%;
    height:40px;
    display:flex;
    flex-direction:row;
    margin-top:-50px;

    @media (max-width:799px){
        padding:0px 10px 0px 10px;
        margin-top:-10px;
    }
`;

export const Preco = styled.p`
    margin:0;
    color:#333;
    margin-left:2px;
`;

export const ItemArea = styled.div`
    display:flex;
    border:1px solid #E1E1E1;
    height:200px;
    margin:10px;
    align-items:center;
    cursor:pointer;
    position:relative;

`;

export const ItemInfoArea = styled.div`
    position:absolute;
    bottom:24px;
    font-size:12px;
    margin:0;
`;

export const ItemInfoAreaBtn = styled.div`
    position:absolute;
    bottom:0;
    font-size:12px;
    margin:0;
    display:flex;
    justify-content:center;
    width:100%;
`;

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

export const OptionBtn = styled.a`
    cursor:pointer;
    height:24px;
    width:24px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:1px;
    border:none;
    border-radius:3px;
    background-color:#5C6BF2;
    color:#FFF;
    font-weight:bold;
    padding:7px;
`;