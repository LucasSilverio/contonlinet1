import { fadeIn } from 'react-animations';
import { fadeOut } from 'react-animations';
import styled, { css, keyframes } from 'styled-components';

const fadeInAnimation = keyframes`${fadeIn}`;
const fadeOutAnimation = keyframes`${fadeOut}`; 

export const Box = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

`;

export const BtnAction = styled.button`
    padding:10px 20px 10px 20px;
    border-radius:5px;
    border:none;
    color:#FFF;
    font-weight:600;
    margin-top:30px;
    letter-spacing:1px;
    font-size:13px;
    cursor:pointer;
    background-color:#005a48;

    &:hover{
        opacity:0.9;
    }
`;

export const Container = styled.div`
    max-width:1100px;
    width:100%;
    margin:auto;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;    

    @media (max-width:999px){
        padding:20px;
    }
`;

export const Descricao = styled.p`
    animation: 0.7s ${fadeInAnimation};
    font-size:17px;
    color:#C1C1C1;
    text-align:center;
    display:${(props) => props.visible ? 'block' : 'none'};
`;

export const Img = styled.img`
    width:290px;
    height:auto;
`;

export const Sub_h2 = styled.h2`
    text-transform:uppercase;
    font-weight:500;
    letter-spacing:0.1em;
    color:#fff;
`;

export const PageContainer = styled.div`
    width:100%;
    display:flex;
    background-color:#3B4F59;
    padding-top:40px;
    padding-bottom:40px;
    background-image:url('/backfaq.jpg');

`;

export const Paragrafo = styled.p`
    font-weight:600;
    color:#666666;
    font-size:16px;
`;

export const TracoSm = styled.div`
    width:50px;
    height:2px;
    background-color:#fff;
`;

export const Titulo = styled.h3`
    font-weight:600;
    line-height:1.5em;
    text-transform:uppercase;
    color:#FFF;
    font-weight:700;
    font-size:15px;
    letter-spacing:1px;;
`;

export const ItensArea = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    flex-direction:column;
`;

export const Item = styled.div`
    flex:1;
    height:auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:10px;
    margin:10px;
    cursor:pointer;
`;

export const Row = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;

    @media (max-width:600px){
        flex-direction:column;
        text-align:center;
    }
`;

export const BannerArea = styled.div`
    height:460px;
    max-width:100%;
    width:auto;
    overflow:hidden;
    cursor:pointer;
    

    img {
        width:100%;
        height:auto;
    }
`;