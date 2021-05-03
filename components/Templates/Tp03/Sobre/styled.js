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
    background-color:${(props) => props.bgColor};

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
`;

export const Descricao = styled.p`
    animation: 0.7s ${fadeInAnimation};
    font-size:17px;
    letter-spacing:0.1em;
    line-height:1.5em;
    color:#555;
    text-align:center;
    display:block;
`;

export const Img = styled.img`
    width:290px;
    height:auto;
`;

export const Sub_h2 = styled.h2`
    text-transform:uppercase;
    font-weight:500;
    letter-spacing:0.1em;
    color:#333;
`;

export const PageContainer = styled.div`
    width:100%;
    display:flex;
    background-color:#F0F0F0;
    padding-top:40px;
    padding-bottom:40px;
    margin-top:60px;

`;

export const Paragrafo = styled.p`
    font-weight:600;
    color:#666666;
    font-size:16px;
`;

export const TracoSm = styled.div`
    width:50px;
    height:2px;
    background-color:#333;
`;

export const Titulo = styled.h3`
    font-weight:600;
    line-height:1.5em;
    text-transform:uppercase;
    color:#FFF;
    font-weight:700;
    font-size:60px;
    letter-spacing:1px;
    margin:0;
`;

export const ItensArea = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    flex-direction:column;
    flex-wrap:wrap;
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
    flex-wrap:wrap;
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