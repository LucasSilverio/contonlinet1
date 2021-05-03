import styled, { css } from 'styled-components';

export const BtnAction = styled.button`
    width:110px;
    height:40px;
    background-color:${(props) => props.bgColor};
    color:#FFF;
    border-radius:5px;
    border:none;
    cursor:pointer;
    margin-top:20px;

    &:hover{
        opacity:0.9;
    }
`;

export const Bottom = styled.div`
    display:flex;
    justify-content:center;
`;

export const Container = styled.div`
    padding:0;
    margin:0;
    display:flex;
    flex-direction:column;
    max-width:1200px;
    margin:auto;
    align-items:center;
    justify-content:center;
    position:relative;
`;

export const ContentArea = styled.div`
    display:flex;
    flex-direction:row;
    max-width:1000px;
    margin-top:60px;
    margin-bottom:100px;

    @media (max-width:800px){
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
`;

export const Content = styled.div`
    width:360px;
    height:auto;
    background-color:#FFF;
    margin:4px;
    padding-bottom:20px;
    position:relative;
    padding-top:40px;

    border:${(props) => props.destaque ? '2px solid #1975D1' : 'none'};
    border-radius:5px;

    @media (max-width:800px){
        text-align:center;
        padding:10px;
    }
`;

export const ContentFlex = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    @media (max-width:800px){
        text-align:center;
        padding:10px;
    }
`;

export const Destaque = styled.div`
    display:${(props) => props.visible ? 'flex' : 'none'};
    position:absolute;
    top:0;
    width:100%;
    height:40px;
    background-color:rgba(25,118,210,0.9);
    justify-content:center;
    align-items:center;
    text-transform:uppercase;


`;

export const Img = styled.img`
    width:350px;
    height:auto;
    margin-left:10px;
`;

export const Items = styled.div``;

export const Item = styled.p`
    color:#555;
    padding-left:10px;
    &:before{
        content:${(props) => props.tick ? "url('/tick.png')' '" : ""};
    }
`;

export const Paragrafo = styled.p`
    font-size:18px;
    color:${(props) => props.dark ? '#555' : '#FFF'}
`;

export const PageContainer = styled.div`
    width:100%;
    background-color:${(props) => props.bgColor};
    color:#fff;
    margin-top:150px;
`;

export const PrecoArea = styled.div`
    display:flex;
    align-items:baseline;
    position:relative;
    justify-content:center;
`;

export const Riscado = styled.div`
    color:#555;
    font-size:18px;
    text-decoration:line-through;
    top:0;
    position:absolute;
    
`;

export const PrecoLegend = styled.div`
    color:#999;
`;

export const PrecoLegendBottom = styled.div`
    color:#1976D2;
    position:absolute;
    bottom:0;
`;

export const Preco = styled.div`
    color:#716FF2;
    font-size:80px;
    font-weight:bold;
`;

export const PrecoSm = styled.div`
    color:#716FF2;
    font-size:22px;
    text-align:center;
    font-weight:700;
    line-height:50px;
`;

export const PeriodosArea = styled.div`
    display:flex;
    flex-direction:row;
`;

export const Periodo = styled.div`
    color:#999;
    width:120px;
    text-align:center;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    border-bottom:${(props) => props.selected ? '2px solid #5C6BF2' : ''};
    font-weight:${(props) => props.selected ? 'bold' : 'normal'};
    padding:5px;
    margin:5px;

    &:hover{
        opacity:0.8;
        transform:scale(1.01);
    }
`;

export const SubTitle = styled.h2`
    text-align:center;
    color:${(props) => props.dark ? '#716FF2' : '#FFF'};
    font-size:32px;
    font-weight:600;
`;

export const SubTitleSm = styled.p`
    text-align:center;
    color:${(props) => props.dark ? '#555' : '#FFF'};
    font-size:18px;
    font-weight:500;
    margin:0;
    padding:0;
    margin-top:-20px;
`;

export const Sm = styled.small`
    font-size:12px!important;
    color:#FFF;
`;

export const Top = styled.div`
    height:54px;
    display:flex;
    justify-content:center;
    font-weight:bold;
    align-items:center;
    font-size:30px;
    color:#555;
    flex-direction:column;
    background-color:${(props) => props.destaque ? '#BEC4FA' : '#FFF'}
`;